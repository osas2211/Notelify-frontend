import React, { useState } from "react"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import {
  Button,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react"
import { Modal } from "@mui/material"
import {
  useGetUsersMutation,
  useInviteCollaboratorMutation,
} from "../redux/services/user"
import { ToastContainer, toast } from "react-toastify"
import avatar from "../images/dp.jpg"

export const InviteCollaborator = ({ noteID, collaborators, fontSize }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    padding: "1rem",
  }
  const token = localStorage.getItem("token")
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [invite, feedback] = useInviteCollaboratorMutation()
  const [getUsers, { data, isLoading, isSuccess }] = useGetUsersMutation()
  const [userName, setUserName] = useState("")
  return (
    <>
      <Icon
        as={PersonAddAltIcon}
        fontSize={fontSize || "1.2rem"}
        opacity={"0.7"}
        marginLeft="1rem"
        style={{ cursor: "pointer" }}
        onClick={async () => {
          try {
            handleOpen()
            await getUsers({ token, users: collaborators }).unwrap()
          } catch (error) {
            console.log(error.message)
          }
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <View style={style} padding={"1rem"}>
          <ToastContainer />
          <h3>Collaborators</h3>
          <hr />
          <View as="div" marginTop="1rem">
            {isLoading ? (
              <p style={{ fontStyle: "italic" }}>fetching collaborators...</p>
            ) : data?.users[0] === null ? (
              <p>No collaborator</p>
            ) : (
              isSuccess &&
              data.users[0] !== null &&
              data.users.map((user) => (
                <Flex alignItems={"center"} marginBottom="0.5rem">
                  <div className="notification-img">
                    <img src={user.avatarURL || avatar} alt="Collaborator" />
                  </div>
                  <Text>
                    {user.name} ({user.userName})
                  </Text>
                </Flex>
              ))
            )}
          </View>
          <View margin="2rem 0">
            <TextField
              placeholder="Enter Username to invite"
              label="Invite"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </View>
          <Button
            variation="primary"
            disabled={feedback.isLoading || false}
            onClick={async () => {
              try {
                await invite({ userName, noteID, token }).unwrap()
                toast.success("Invitation Sent!.", {
                  position: toast.POSITION.TOP_CENTER,
                })
                setUserName("")
                handleClose()
              } catch (error) {
                console.log(error.data.message)
                toast.error(error.data.message, {
                  position: toast.POSITION.TOP_CENTER,
                })
              }
            }}
          >
            {feedback.isLoading ? "Inviting user..." : " Invite User"}
          </Button>
        </View>
      </Modal>
    </>
  )
}
