import { configureStore } from "@reduxjs/toolkit"

import advertSearchSlice from "@/utils/redux/slices/advertPage"
import userSlice from "@/utils/redux/slices/user"
import wbApiSlice from "@/utils/redux/slices/wbApi"

export const store = configureStore({
  reducer: {
    advertPage: advertSearchSlice.reducer,
    user: userSlice.reducer,
    [wbApiSlice.reducerPath]: wbApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wbApiSlice.middleware),
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
