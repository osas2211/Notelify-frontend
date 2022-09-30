import { createSlice } from "@reduxjs/toolkit"
import { authAPI } from "../services/auth"

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    logout: (state, payload) => {
      state.token = null
      state.user = null
      localStorage.setItem("token", "")
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
        state.token = payload.user.token
        localStorage.setItem("token", payload.user.token)
      }
    )
    builder.addMatcher(
      authAPI.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
        state.token = payload.user.token
        localStorage.setItem("token", payload.user.token)
      }
    )
  },
})

export default authSlice.reducer
export const { logout } = authSlice.actions
export const selectCurrentUser = (state) => state.auth.user
