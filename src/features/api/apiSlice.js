import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SPACEX_API }),
  endpoints: (builder) => ({
    getCapsules: builder.query({
      query: () => '/capsules',
    }),
    getCapsule: builder.query({
      query: (capsuleSerial) => `/capsules/${capsuleSerial}`,
    }),
  }),
});

export const { useGetCapsulesQuery, useGetCapsuleQuery } = apiSlice;
