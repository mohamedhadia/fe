import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { carsApi } from './carsApi'
import searchSlice from './searchSlice'

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(carsApi.middleware),
})

setupListeners(store.dispatch)
