import React from "react"
import { Header } from "../ui-components/Header"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { QuickNotes } from "../ui-components/QuickNotes"
import { useHref } from "react-router-dom"
import jwt_decode from "jwt-decode"

export const PrivateRoutes = () => {
  const location = useLocation()
  const href = useHref()
  const token = localStorage.getItem("token")
  const decode = token !== "" && jwt_decode(token)
  const timeLength = token !== "" && `${decode.exp}`.length
  const compTime = `${Date.now()}`.slice(0, timeLength)
  if (decode.exp > Number(compTime) && token !== "") {
    return (
      <div>
        <Header />
        <main>
          {href === "/notifications" ? (
            <></>
          ) : href === "/archive" ? (
            <></>
          ) : href.indexOf(`notes/editor/`) !== -1 ? (
            <></>
          ) : (
            <QuickNotes />
          )}
          <Outlet />
        </main>
      </div>
    )
  } else {
    return <Navigate to={"/login"} state={{ from: location }} />
  }
}
