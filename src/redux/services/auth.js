import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authAPI = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://notelify-backend.up.railway.app/api/v1/user/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query(data) {
        return {
          url: "signup",
          method: "POST",
          body: data,
        }
      },
    }),
    login: builder.mutation({
      query(data) {
        return {
          url: "signin",
          method: "POST",
          body: data,
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authAPI
