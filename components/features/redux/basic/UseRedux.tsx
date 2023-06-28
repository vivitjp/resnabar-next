import { UseReturnType } from "@/components/type/type"

export function UseReduxCode(): UseReturnType {
  const title = `Reducer, Actions, Store, Provider`

  return {
    title,
    code,
    options: [],
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `■ reducers/itemReducer.ts
 
export type StateItem = { item: number }
 
export type ItemIncrement = {
  type: "INCREMENT"
  payload: StateItem["item"]
}
 
export type ItemDecrement = {
  type: "DECREMENT"
  payload: StateItem["item"]
}
 
export type ItemReset = {
  type: "RESET"
}
 
export type ActionItem = ItemIncrement | ItemDecrement | ItemReset
 
const initValues: StateItem = { item: 0 }
 
export const itemReducer = (
  state: StateItem = initValues,
  action: ActionItem
) => {
  switch (action.type) {
    case "INCREMENT":
      return { item: state.item + action.payload }
    case "DECREMENT":
      return { item: state.item - action.payload }
    default:
      return initValues
  }
}
 
■ actions/itemActions.ts
 
export const actions = {
  increment: (number: number): ItemIncrement => {
    return {
      type: "INCREMENT",
      payload: number,
    }
  },
  decrement: (number: number): ItemDecrement => {
    return {
      type: "DECREMENT",
      payload: number,
    }
  },
  reset: (): ItemReset => {
    return {
      type: "RESET",
    }
  },
}
 
■ providers.ts
★itemReducer を toolkit の provider に入れてもOK
 
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
`
