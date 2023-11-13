import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState } from "../store"

export interface DeepObjectState {
  address: {
    pref: string
    city: string
  }
  name: string
  age: number
}

const initDeepOjectState: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}

export const deepObjectSlice = createSlice({
  name: "deepObject",
  initialState: initDeepOjectState,
  reducers: {
    clearDeepOjectEach: (state) => {
      state.address = { ...initDeepOjectState.address }
      state.name = initDeepOjectState.name
      state.age = initDeepOjectState.age
    },
    clearDeepOjectAddressRef: (state) => {
      state.address = initDeepOjectState.address //参照
      state.name = initDeepOjectState.name
      state.age = initDeepOjectState.age
    },
    clearDeepOjectAll: (state) => {
      state = { ...initDeepOjectState }
    },
    clearDeepOjectStruct: (state) => {
      state = structuredClone(initDeepOjectState)
    },
    setDeepObject: (state, action: PayloadAction<DeepObjectState>) => {
      state.address.pref = action.payload.address?.pref ?? ""
      state.address.city = action.payload.address?.city ?? ""
      state.name = action.payload.name ?? ""
      state.age = action.payload.age ?? ""
    },
  },
})

export const {
  setDeepObject,
  clearDeepOjectEach,
  clearDeepOjectAddressRef,
  clearDeepOjectAll,
  clearDeepOjectStruct,
} = deepObjectSlice.actions

export const selectInitialState = () => initDeepOjectState

export const selectDeepObject = (state: AppState) => state.deepObject

export default deepObjectSlice.reducer
