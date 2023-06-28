import {
  ItemDecrement,
  ItemIncrement,
  ItemReset,
} from "../reducers/itemReducer"

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
