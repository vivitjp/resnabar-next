import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import addressReducer from "./slices/addressSlice"
import counterReducer from "./slices/counterSlice"
import deepObjectReducer from "./slices/deepObjectSlice"
import deepObjectSliceWrappedReducer from "./slices/deepObjectWrappedSlice"
import { itemReducer } from "../redux/reducers/itemReducer"

export function makeStore() {
  return configureStore(
    {
      reducer: {
        address: addressReducer, //ToolKit
        counter: counterReducer, //ToolKit
        deepObject: deepObjectReducer,
        deepObjectWrapped: deepObjectSliceWrappedReducer,
        items: itemReducer, //Normal Redux
      },
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
