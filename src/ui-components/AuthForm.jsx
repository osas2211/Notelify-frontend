import React from "react"
import "../styles/authForm.css"
import Notelifylogo3 from "./Notelifylogo3"
import { TextField, Flex, CheckboxField, Button } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"

export const AuthForm = ({
  header,
  subheader,
  variant,
  userNameLogin,
  setUserNameLogin,
  passwordLogin,
  setPasswordLogin,
  submitLogin,
  isLoadingLogin,
  nameRegister,
  setNameRegister,
  email,
  setEmail,
  userNameRegister,
  setUserNameRegister,
  passwordRegister,
  setPasswordRegister,
  submitRegister,
  isLoadingRegister,
}) => {
  return (
    <div className="auth-form">
      <div style={{ margin: "2.5rem 0" }}>
        <Link to={"/"}>
          <Notelifylogo3 />
        </Link>
      </div>
      <div>
        <h2>{header}</h2>
        <p style={{ margin: "0rem 0" }}>
          <small>{subheader}</small>
        </p>
      </div>

      {/* Login Form */}
      {variant === "login" && (
        <form onSubmit={submitLogin}>
          <Flex direction={"column"}>
            <TextField
              placeholder="JohnDoe5796"
              label="Username"
              type={"text"}
              boxShadow={"medium"}
              marginBottom="0.8rem"
              value={userNameLogin}
              onChange={(e) => setUserNameLogin(e.target.value)}
              required
            />
            <TextField
              label="password"
              type={"password"}
              boxShadow={"medium"}
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
          </Flex>
          <Flex
            direction={"row"}
            marginTop="1.5rem"
            justifyContent={"space-between"}
          >
            <CheckboxField label="Remember me" name="remember" value="yes" />
            <Link
              to={"/forget-password"}
              style={{ textDecoration: "underline", color: "#0DA2E7" }}
            >
              Forgot password?
            </Link>
          </Flex>

          <Button
            type="submit"
            variation="primary"
            width={"100%"}
            margin="2.3rem 0 0.8rem 0"
            disabled={isLoadingLogin ? true : false}
          >
            {isLoadingLogin ? "Signing in..." : "Sign In"}
          </Button>
          <p style={{ textAlign: "center" }}>
            Don't have an account?
            <Link
              to={"/signup"}
              style={{
                textDecoration: "underline",
                color: "#0DA2E7",
                padding: "0.5rem",
              }}
            >
              Sign up for free
            </Link>
          </p>
        </form>
      )}
      {/* Sign Up */}
      {variant === "signup" && (
        <form onSubmit={submitRegister}>
          <Flex
            direction={"column"}
            justifyContent="space-between"
            // alignItems={"flex-start"}
          >
            <TextField
              placeholder="John Doe"
              label="Full Name"
              type={"text"}
              boxShadow="medium"
              marginBottom="0.8rem"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
            />
            <TextField
              placeholder="example@notelify.com"
              label="Email"
              type={"email"}
              boxShadow={"medium"}
              marginBottom="0.8rem"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="John247"
              label="Username"
              type={"text"}
              boxShadow="medium"
              marginBottom="0.8rem"
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
            />
            <TextField
              label="password"
              type={"password"}
              boxShadow={"medium"}
              required
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
          </Flex>
          <Button
            type="submit"
            variation="primary"
            width={"100%"}
            margin="2.3rem 0 0.8rem 0"
            disabled={isLoadingLogin ? true : false}
          >
            {isLoadingLogin ? "Signing up..." : "Sign Up"}
          </Button>
          <p style={{ textAlign: "center" }}>
            Already have an account?
            <Link
              to={"/login"}
              style={{
                textDecoration: "underline",
                color: "#0DA2E7",
                padding: "0.5rem",
              }}
            >
              Sign In
            </Link>
          </p>
        </form>
      )}
    </div>
  )
}
