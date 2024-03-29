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

export const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}

interface DeepObjectStateWrapped {
  data: DeepObjectState
}

const initOjectWrapped: DeepObjectStateWrapped = {
  data: initOject,
}

export const deepObjectSliceWrapped = createSlice({
  name: "wrappedDeepObject",
  initialState: initOjectWrapped,
  reducers: {
    //■ 1.入力値をGlobalStateに保存
    setDeepObjectWrapped: (state, action: PayloadAction<DeepObjectState>) => {
      state.data = structuredClone(action.payload)
    },

    //■ 2.初期値代入(一括処理)
    clearDeepOjectWrapped: (state) => {
      state.data = structuredClone(initOject)
    },

    //■ 3.初期値部分代入
    setDeepObjectExceptName: (state) => {
      const { name, ...elses } = initOject
      state.data = { ...state.data, ...structuredClone(elses) }
    },
  },
})

export const {
  clearDeepOjectWrapped,
  setDeepObjectWrapped,
  setDeepObjectExceptName,
} = deepObjectSliceWrapped.actions

export const selectInitialStateWrapped = () => initOject

export const selectDeepObjectWrapped = (state: AppState) =>
  state.deepObjectWrapped.data

export default deepObjectSliceWrapped.reducer
