import React, { useState } from "react"
import {
  Text,
  View,
  Heading,
  Icon,
  Flex,
  Button,
  Card,
  Grid,
  TextAreaField,
} from "@aws-amplify/ui-react"
import BoltIcon from "@mui/icons-material/Bolt"
import DeleteIcon from "@mui/icons-material/Delete"
import Modal from "@mui/material/Modal"
import { ToastContainer, toast } from "react-toastify"
import {
  useAddQuicknoteMutation,
  useDeleteQuicknoteMutation,
  useGetQuicknotesQuery,
} from "../redux/services/user"

export const QuickNotes = () => {
  const token = localStorage.getItem("token")
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
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { data, isSuccess, refetch } = useGetQuicknotesQuery(token)
  const [addNote] = useAddQuicknoteMutation()
  const [deleteNote] = useDeleteQuicknoteMutation()
  const [note, setNote] = useState("")
  return (
    <View as="div" boxShadow="medium" padding="1.2rem" className="quicknotes">
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <View style={style}>
          <Text marginBottom={"1rem"}>Add Quicknote</Text>
          <TextAreaField
            placeholder="Enter your Quicknote/Todo"
            label="TextContent"
            marginBottom={"1rem"}
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
            }}
          />
          <Button
            variation="primary"
            size="small"
            onClick={async () => {
              try {
                await addNote({ token, text: { text: note } }).unwrap()
                refetch()
                setNote("")
                handleClose()
                toast.success("Quicknote added", {
                  position: toast.POSITION.TOP_CENTER,
                })
              } catch (error) {
                console.log(error)
              }
            }}
          >
            Add Todo
          </Button>
        </View>
      </Modal>
      <Flex justifyContent={"space-between"} alignItems={"start"}>
        <h2>
          Quicknotes / Todos <Icon as={BoltIcon} color="#F4D35E" />
        </h2>

        <Button variation="primary" size="small" onClick={handleOpen}>
          + New Todo
        </Button>
      </Flex>

      <View as="div" marginTop="1rem">
        <Grid
          templateColumns={{ base: "1fr 1fr", large: "1fr 1fr 1fr 1fr" }}
          gap="0.8rem"
        >
          {data?.quicknotes.length === 0 ? (
            <p>No Todos</p>
          ) : (
            isSuccess &&
            data?.quicknotes.map((quicknote, key) => (
              <Card
                padding={"1rem 1.7rem 1rem 1rem"}
                borderRadius="8px"
                boxShadow={"medium"}
                className="quicknote"
                key={quicknote._id}
              >
                <Icon
                  as={DeleteIcon}
                  className="quicknote-icon"
                  color={"#C9C19F"}
                  onClick={async () => {
                    try {
                      await deleteNote({ token, id: quicknote._id }).unwrap()
                      refetch()
                      toast.warning("Quicknote deleted", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                />
                <Heading level={6} fontWeight={"medium"}>
                  Todo #{key + 1}
                </Heading>
                <Text fontSize={"0.85rem"} marginTop="0.5rem">
                  {quicknote.body}
                </Text>
              </Card>
            ))
          )}
        </Grid>
      </View>
    </View>
  )
}
