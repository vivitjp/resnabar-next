export type StateItem = {
  item: number
}

export type ActionItem =
  | {
      type: "ADD"
      payload: {
        item: number
      }
    }
  | {
      type: "SUBTRACT"
      payload: {
        item: number
      }
    }
  | {
      type: "RESET"
    }

export function reducerItem(state: StateItem, action: ActionItem): StateItem {
  switch (action.type) {
    case "ADD":
      return {
        item: state.item + action.payload.item,
      }
    case "SUBTRACT":
      return {
        item: state.item - action.payload.item,
      }
    case "RESET":
      return {
        item: 0,
      }
  }
}
