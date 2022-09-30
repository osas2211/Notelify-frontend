import React, { useState } from "react"
import {
  View,
  Heading,
  Grid,
  Button,
  Text,
  TextField,
} from "@aws-amplify/ui-react"
import "../styles/notes.css"
import { NoteOverview } from "../ui-components/NoteOverview"
import { useGetNotesQuery, useAddNoteMutation } from "../redux/services/user"
import Modal from "@mui/material/Modal"
import { toast, ToastContainer } from "react-toastify"
import { MiniEditor } from "./MiniEditor"

export const Notes = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    padding: "1rem",
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
    localStorage.setItem("content", "")
  }
  const handleClose = () => setOpen(false)
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetNotesQuery(token)
  const [addNote] = useAddNoteMutation()
  const [label, setlabel] = useState("")
  const onAddNote = async () => {
    try {
      if (localStorage.getItem("content") !== "") {
        await addNote({
          label,
          textContent: localStorage.getItem("content"),
          token,
        })
        toast.success("Note added", {
          position: toast.POSITION.TOP_CENTER,
        })
        refetch()
        handleClose()
        setlabel("")
      } else {
        toast.error("Note field Cannot be empty", {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <View as="div">
      <ToastContainer />
      {/* ADD A NEW NOTE */}
      <Button
        variation="primary"
        size="small"
        className="add-btn"
        boxShadow={"large"}
        onClick={handleOpen}
      >
        {" "}
        + Add New Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <View style={style}>
          <Text marginBottom={"1rem"}>Add Quicknote</Text>
          <TextField
            placeholder="Enter title..."
            marginBottom={"2rem"}
            label="Title"
            value={label}
            onChange={(e) => setlabel(e.target.value)}
          />
          {/* <TextAreaField
            placeholder="Enter Note..."
            label="Body"
            marginBottom={"1rem"}
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          /> */}
          <View>
            <MiniEditor />
          </View>
          <Button
            variation="primary"
            size="small"
            onClick={onAddNote}
            marginTop="5rem"
          >
            Add Note
          </Button>
        </View>
      </Modal>

      {/* ALL NOTES */}
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        All Notes
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {isSuccess &&
          data.notes.map(
            (note) =>
              !note.archive && (
                <NoteOverview
                  isFavourite={note.favourite}
                  id={note._id}
                  body={note.textContent}
                  title={note.label}
                  refetchNote={refetch}
                  isArchived={note.archive}
                  time={note.last_edited}
                  collaborators={note.collaborators}
                />
              )
          )}
      </Grid>
    </View>
  )
}
