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

const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}

export const deepObjectSlice = createSlice({
  name: "deepObject",
  initialState: initOject,
  reducers: {
    clearDeepOjectEach: (state) => {
      state.address = { ...initOject.address }
      state.name = initOject.name
      state.age = initOject.age
    },
    clearDeepOjectAddressRef: (state) => {
      state.address = initOject.address //参照
      state.name = initOject.name
      state.age = initOject.age
    },
    setDeepOjectAddressPref: (state) => {
      state.address.pref = "北海道"
    },

    clearDeepOjectAll: (state) => {
      state = { ...initOject }
    },
    clearDeepOjectStruct: (state) => {
      state = structuredClone(initOject)
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
  setDeepOjectAddressPref,
  clearDeepOjectAll,
  clearDeepOjectStruct,
} = deepObjectSlice.actions

export const selectInitialState = () => initOject

export const selectDeepObject = (state: AppState) => state.deepObject

export default deepObjectSlice.reducer
