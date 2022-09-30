import { createSlice } from "@reduxjs/toolkit"

export const contentSlice = createSlice({
  name: "content",
  initialState: "",
  reducers: {
    setContent: (state, payload) => {
      state = payload
    },
  },
})

export default contentSlice.reducer
export const { setContent } = contentSlice.actions
