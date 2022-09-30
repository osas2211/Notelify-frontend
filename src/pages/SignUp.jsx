import React, { useState } from "react"
import { Flex } from "@aws-amplify/ui-react"
import { AuthForm } from "../ui-components/AuthForm"
import signupImg from "../images/signup.png"
import { useRegisterMutation } from "../redux/services/auth"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()
  const onRegister = async (e) => {
    e.preventDefault()
    try {
      await register({
        userName,
        password,
        name,
        email,
      }).unwrap()
      navigate("/notes")
    } catch (error) {
      toast.error("Duplicate User: User already exists", {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <div>
      <div className="signup">
        <ToastContainer />
        <Flex
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <AuthForm
            variant={"signup"}
            header={"Create an account"}
            subheader={"Start your journey with us for free"}
            userNameRegister={userName}
            nameRegister={name}
            email={email}
            passwordRegister={password}
            setNameRegister={setName}
            setEmail={setEmail}
            setPasswordRegister={setPassword}
            setUserNameRegister={setUserName}
            submitRegister={onRegister}
            isLoadingRegister={isLoading}
          />
          <div className="login-img">
            <img src={signupImg} alt="Signup" />
          </div>
        </Flex>
      </div>
    </div>
  )
}
