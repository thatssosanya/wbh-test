import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { AppState } from "@/utils/redux/store"

import { AdvertsResponse, CatalogResponse, RegionResponse } from "@/types/api"

const wbApiSlice = createApi({
  reducerPath: "wbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + "/wb/",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as AppState
      headers.set("Authorization", `Bearer ${state.user.token}`)

      return headers
    },
  }),
  endpoints: (builder) => ({
    getCatalogs: builder.query<CatalogResponse, void>({
      query: () => `catalogs/`,
    }),
    getRegions: builder.query<RegionResponse, void>({
      query: () => `regions/`,
    }),
    getAdverts: builder.query<AdvertsResponse, { search: string }>({
      // type is always 6 (= search) in this demo
      query: ({ search }) => `adverts/?type=6&input=${search}`,
    }),
  }),
})

export const { useGetCatalogsQuery, useGetRegionsQuery, useGetAdvertsQuery } = wbApiSlice

export default wbApiSlice
