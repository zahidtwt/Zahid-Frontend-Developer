import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3' }),
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
