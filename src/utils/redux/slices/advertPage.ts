import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  search: "",
  regionId: 1,
}

export const advertSearchSlice = createSlice({
  name: "advertPage",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setRegionId: (state, action) => {
      state.regionId = action.payload
    },
  },
})

export const { setSearch, setRegionId } = advertSearchSlice.actions

export default advertSearchSlice
