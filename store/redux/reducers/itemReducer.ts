export type StateItem = {
  item: number
}

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
