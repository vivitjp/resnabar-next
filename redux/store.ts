import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import addressReducer from "./slices/addressSlice"
import counterReducer from "./slices/counterSlice"

export function makeStore() {
  return configureStore(
    {
      reducer: { address: addressReducer, counter: counterReducer },
    }
    //devTools: process.env.NODE_ENV !== "production",
  )
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
