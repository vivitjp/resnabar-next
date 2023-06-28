import { UseReturnType } from "@/components/type/type"

export function UseReduxStore(): UseReturnType {
  const title = `Store & Hooks`

  return {
    title,
    code,
    options: [],
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `■ Store [redux/store.ts]
 
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
//全Sliceをimport
import addressReducer from "./slices/addressSlice"
 
//テスト用にMethodを独立させる
export function makeStore() {
  return configureStore(
    { reducer: {  address: addressReducer, ... ここに列記 } },
    devTools: process.env.NODE_ENV !== "production",
  )
}
const store = makeStore()
 
export type AppState = ReturnType<typeof store.getState>  //ステート全般の型
export type AppDispatch = typeof store.dispatch           //selectorの型
export type AppThunk<ReturnType = void>                   //methodの型
 = ThunkAction<ReturnType, AppState, unknown, Action<string>>
 
export default store
 
■ Hooks [redux/provider.tsx]
 
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { AppDispatch, AppState } from "./store"
 
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector`
