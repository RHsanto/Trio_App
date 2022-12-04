// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => 'launches',
    }),
    getSingleFlight:builder.query({
      query: (flight_number) => `launches/${flight_number}`,
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useGetSingleFlightQuery } = serviceApi