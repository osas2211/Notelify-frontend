import { userApi } from "../services/user"
import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: { notes: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getNotes.matchFulfilled,
      (state, { payload }) => {
        state.notes = payload.notes
      }
    )
  },
})

export default userSlice.reducer
