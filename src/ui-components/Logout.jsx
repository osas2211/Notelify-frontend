import React from "react"
import { Button, Icon } from "@aws-amplify/ui-react"
import { useDispatch } from "react-redux"
import { Logout as LogoutIcon } from "@mui/icons-material"
import { logout } from "../redux/slices/authSlice"
import { useNavigate } from "react-router-dom"

export const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Button
      variation="primary"
      backgroundColor={"red.80"}
      size="small"
      onClick={() => {
        dispatch({ type: logout.type })
        navigate("/login")
      }}
    >
      <Icon as={LogoutIcon} /> Log Out
    </Button>
  )
}
