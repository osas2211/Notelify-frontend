import { Flex } from "@aws-amplify/ui-react"
import React, { useState } from "react"
import { AuthForm } from "../ui-components/AuthForm"
import loginImg from "../images/signin.png"
import { useLoginMutation } from "../redux/services/auth"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const LogIn = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const onLogin = async (e) => {
    e.preventDefault()
    try {
      await login({ userName, password }).unwrap()
      navigate("/notes")
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <div className="login">
      <ToastContainer />
      <Flex
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <AuthForm
          variant={"login"}
          header={"Welcome back"}
          subheader={"Jot down your ideas and thoughts within seconds"}
          userNameLogin={userName}
          setUserNameLogin={setUserName}
          passwordLogin={password}
          setPasswordLogin={setPassword}
          submitLogin={onLogin}
          isLoading={isLoading}
        />
        <div className="login-img">
          <img src={loginImg} alt="Login" />
        </div>
      </Flex>
    </div>
  )
}
