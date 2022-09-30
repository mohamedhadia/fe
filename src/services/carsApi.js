import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mocki.io/v1/',
  }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => `/c2843195-edf7-4356-b4cb-79894092b351`,
    }),
  }),
})

export const { useGetCarsQuery } = carsApi
