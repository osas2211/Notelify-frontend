import React, { useState } from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"
import {
  Heading,
  View,
  Icon,
  Flex,
  Button,
  TextField,
  Text,
} from "@aws-amplify/ui-react"
import { Done, Save, Edit } from "@mui/icons-material"
import { useLocation, useParams } from "react-router-dom"
import { InviteCollaborator } from "../ui-components/InviteCollaborator"
import {
  useGetNoteQuery,
  useGetNotesQuery,
  useGetCollabNotesQuery,
} from "../redux/services/user"
import { useUpdateNoteMutation } from "../redux/services/user"
import { ToastContainer, toast } from "react-toastify"
import { useSerialize } from "../hooks/useSerialize"
import { useDateFormater } from "../hooks/useDateFormater"

export const Editor = () => {
  const param = useParams()
  const location = useLocation()
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetNoteQuery({ id: param.id, token })
  const collabNotes = useGetCollabNotesQuery(token)
  const notes = useGetNotesQuery(token)
  const textContent = isSuccess && JSON.parse(data.note.textContent)
  const [updateNote] = useUpdateNoteMutation()
  const serialize = useSerialize
  const [labelEdit, setLabelEdit] = useState(false)
  const [label, setLabel] = useState("")
  const dateObj = new Date(isSuccess && data.note.last_edited)
  const { date, time_ } = useDateFormater(dateObj)
  return (
    <>
      <ToastContainer />
      <Flex justifyContent="space-between" alignItems={"center"}>
        <>
          {labelEdit === false ? (
            <Flex alignItems={"center"}>
              <Heading level={3}>{isSuccess && data.note.label}</Heading>
              <Button
                variation="primary"
                size="small"
                onClick={() => {
                  setLabel(data.note.label)
                  setLabelEdit(true)
                }}
              >
                <Icon as={Edit} color={"#fff"} />
              </Button>
            </Flex>
          ) : (
            <Flex alignItems={"center"}>
              <TextField
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
              <Button
                variation="primary"
                size="small"
                marginBottom={"-0.5rem"}
                onClick={async () => {
                  try {
                    if (label !== "") {
                      await updateNote({
                        token,
                        label: label,
                        id: param.id,
                      })
                      toast.success("Label Saved", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                      refetch()
                      notes.refetch()
                      collabNotes.refetch()
                      setLabelEdit(false)
                    } else {
                      toast.error("Label field cannot be empty", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                    }
                  } catch (error) {
                    toast.error("Unable to save note", {
                      position: toast.POSITION.TOP_CENTER,
                    })
                  }
                }}
              >
                <Icon as={Done} color={"#fff"} />
              </Button>
            </Flex>
          )}
        </>
        <View>
          {location.pathname.indexOf("collab-notes") === -1 && (
            <InviteCollaborator
              fontSize="1.5rem"
              collaborators={isSuccess && data.note.collaborators}
              noteID={isSuccess && data.note._id}
            />
          )}
          <Icon
            as={Save}
            fontSize="1.5rem"
            opacity={"0.7"}
            marginLeft="1rem"
            onClick={async () => {
              try {
                if (
                  serialize(JSON.parse(localStorage.getItem("content"))) !== ""
                ) {
                  await updateNote({
                    token,
                    textContent: localStorage.getItem("content"),
                    id: param.id,
                  })
                  toast.success("Note saved", {
                    position: toast.POSITION.TOP_CENTER,
                  })
                  refetch()
                  notes.refetch()
                  collabNotes.refetch()
                } else {
                  toast.error("note field cannot be empty", {
                    position: toast.POSITION.TOP_CENTER,
                  })
                }
              } catch (error) {
                toast.error("Unable to save note", {
                  position: toast.POSITION.TOP_CENTER,
                })
              }
            }}
          />
        </View>
      </Flex>
      <Text
        as="small"
        marginBottom={"2.5rem"}
        marginTop={"0.5rem"}
        fontStyle="italic"
        opacity={"70"}
      >
        last edited: {`${date}, ${time_}`}
      </Text>
      {isSuccess !== false ? (
        <RichTextEditor initialValue={textContent} id={param.id} />
      ) : (
        <Heading>Fetching Note....</Heading>
      )}
    </>
  )
}
