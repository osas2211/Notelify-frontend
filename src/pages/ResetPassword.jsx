import React, { useState } from "react"
import { TextField, View, Button, Heading } from "@aws-amplify/ui-react"
import { ToastContainer, toast } from "react-toastify"

export const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onReset = async (e) => {
    e.preventDefault()
    try {
      if (password !== "") {
        toast.success(
          "An email has been sent to you, please check your inbox or spam folder if not seen",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        )
      } else {
        toast.error("Password field cannot be empty", {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    } catch (error) {}
  }
  return (
    <div>
      <ToastContainer />
      <form
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
        }}
        onSubmit={onReset}
      >
        <Heading level={3}>Reset Password</Heading>
        <View width={400}>
          <TextField
            placeholder="Enter your email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </View>
        <View width={400}>
          <TextField
            placeholder="Enter your new passoword"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </View>
        <View marginTop="1rem">
          <Button variation="primary" type="submit" size="small">
            Reset Password
          </Button>
        </View>
      </form>
    </div>
  )
}
