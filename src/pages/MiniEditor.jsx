import React, { useState } from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"

export const MiniEditor = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]
  const [text, setText] = useState(initialValue)
  return (
    <>
      <RichTextEditor initialValue={text} setText={setText} />
    </>
  )
}
