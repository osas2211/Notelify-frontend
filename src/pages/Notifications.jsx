import React from "react"
import { View, Heading, Flex, Button } from "@aws-amplify/ui-react"
import avatar from "../images/dp.jpg"
import "../styles/notification.css"
import {
  useAcceptInviteMutation,
  useGetCollabNotesQuery,
  useGetUserQuery,
  useRejectInviteMutation,
} from "../redux/services/user"
import { toast, ToastContainer } from "react-toastify"

export const Notifications = () => {
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetUserQuery(token)
  const [accept] = useAcceptInviteMutation()
  const [reject] = useRejectInviteMutation()
  const parameters = useGetCollabNotesQuery(token)
  return (
    <View as="div">
      <ToastContainer />
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        Notifications
      </Heading>
      <View as="div">
        {isSuccess &&
          data.user.invitations.map((invitation) => (
            // render invitations
            <View as="div" className="notification">
              <Flex alignItems="center">
                <div className="notification-img">
                  <img src={invitation.ownerImg || avatar} alt="Note Owner" />
                </div>
                <span>
                  User
                  <span style={{ fontWeight: 500 }}>
                    {" "}
                    {invitation.ownerUserName}{" "}
                  </span>{" "}
                  invited you to collaborate on Note:{" "}
                  <span style={{ fontWeight: 500 }}>{invitation.label}</span>
                </span>
              </Flex>

              <div>
                <Button
                  variation="primary"
                  size="small"
                  backgroundColor={"#4DA167"}
                  color="#fff"
                  border={"none"}
                  marginRight="0.5rem"
                  onClick={async () => {
                    try {
                      await accept({ id: invitation.noteID, token }).unwrap()
                      toast.success("Invitation Accepted", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                      refetch()
                      parameters.refetch()
                    } catch (error) {
                      console.log(error)
                      toast.error(error.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                      })
                    }
                  }}
                >
                  Accept
                </Button>
                <Button
                  backgroundColor={"#F03A47"}
                  color="#fff"
                  border={"none"}
                  size="small"
                  onClick={async () => {
                    try {
                      await reject({ id: invitation.noteID, token }).unwrap()
                      toast.warning("Invitation Rejected", {
                        position: toast.POSITION.TOP_CENTER,
                      })
                      refetch()
                    } catch (error) {
                      console.log(error)
                      toast.error(error.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                      })
                    }
                  }}
                >
                  Reject
                </Button>
              </div>
            </View>
          ))}
      </View>
    </View>
  )
}
