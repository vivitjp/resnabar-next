"use client"

import { legacy_createStore as createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import { itemReducer } from "./reducers/itemReducer"

const allReducers = combineReducers({
  items: itemReducer,
  //...追加
})

const store = createStore(allReducers)

export function ProvidersRedux({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

//単独の際には利用
