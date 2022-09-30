import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import isHotkey from "is-hotkey"
import { Editable, withReact, useSlate, Slate } from "slate-react"
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
} from "slate"
import { withHistory } from "slate-history"
import { cx, css } from "@emotion/css"
import {
  Code,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  LooksOne,
  LooksTwo,
} from "@mui/icons-material"
import { connect } from "socket.io-client"

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? "white"
              : "#aaa"
            : active
            ? "black"
            : "#ccc"};
        `
      )}
    />
  )
)

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
))

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      "material-icons",
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
))

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  />
))
const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
}

const LIST_TYPES = ["numbered-list", "bulleted-list"]
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"]

export const RichTextEditor = ({ initialValue, id }) => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  // const editor = useMemo(() => withHistory(withReact(createEditor() as any)), [])
  const editor = useMemo(() => withReact(createEditor()), [])

  const [saved, setSaved] = useState(true)

  const remote = useRef(false)
  const socketchange = useRef(false)
  const socket = connect("https://notelify-backend.up.railway.app/")
  useEffect(() => {
    socket.emit("CONNECTED_TO_ROOM", id)
    socket.on("ROOM_CONNECTION", (data) => setValue(data))
    socket.on(`text-changed`, ({ ops, newText }) => {
      remote.current = true
      Editor.withoutNormalizing(editor, () => {
        JSON.parse(ops).forEach((op) => editor.apply(op))
      })
      remote.current = false
      socketchange.current = true
    })

    return () => {
      socket.off(`text-changed`)
    }
  })
  return (
    <>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => {
          setValue(value)
          const ops = editor.operations.filter((o) => {
            if (o) {
              return o.type !== "set_selection" && o.type !== "set_value"
            }
            return false
          })
          if (ops.length && !remote.current && !socketchange.current) {
            setSaved(false)
            socket.emit("text-changed", {
              newText: value,
              id,
              ops: JSON.stringify(ops),
            })
            localStorage.setItem("content", JSON.stringify(value))
          }
          socketchange.current = false
        }}
      >
        <Toolbar>
          <MarkButton format="bold" icon={<FormatBold />} />
          <MarkButton format="italic" icon={<FormatItalic />} />
          <MarkButton format="underline" icon={<FormatUnderlined />} />
          <MarkButton format="code" icon={<Code />} />
          <BlockButton format="heading-one" icon={<LooksOne />} />
          <BlockButton format="heading-two" icon={<LooksTwo />} />
          <BlockButton format="block-quote" icon={<FormatQuote />} />
          <BlockButton format="numbered-list" icon={<FormatListNumbered />} />
          <BlockButton format="bulleted-list" icon={<FormatListBulleted />} />
          <BlockButton format="left" icon={<FormatAlignLeft />} />
          <BlockButton format="center" icon={<FormatAlignCenter />} />
          <BlockButton format="right" icon={<FormatAlignRight />} />
          <BlockButton format="justify" icon={<FormatAlignJustify />} />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter your note here…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    }
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}
