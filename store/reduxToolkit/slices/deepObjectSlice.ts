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
    //■ 1.入力値を個別に保存
    setDeepObject: (state, action: PayloadAction<DeepObjectState>) => {
      state.address.pref = action.payload.address?.pref ?? ""
      state.address.city = action.payload.address?.city ?? ""
      state.name = action.payload.name ?? ""
      state.age = action.payload.age ?? ""
    },
    //■ 2.初期値を値/参照(spread構文)で代入
    clearDeepOjectEach: (state) => {
      state.address = { ...initOject.address }
      state.name = initOject.name
      state.age = initOject.age
    },
    //3.初期値を値で代入/深いobjectには参照で代入
    clearDeepOjectAddressRef: (state) => {
      state.address = initOject.address //参照
      state.name = initOject.name
      state.age = initOject.age
    },
    //4.objectの深い属性に値代入
    setDeepOjectAddressPref: (state) => {
      state.address.pref = "北海道"
    },
    //⛔ state 自体をobject(Spread構文)で初期化
    clearDeepOjectAll: (state) => {
      state = { ...initOject }
    },
    //⛔ state 自体をobject(structuredClone)で初期化
    clearDeepOjectStruct: (state) => {
      state = structuredClone(initOject)
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
