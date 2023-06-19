import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "../store"

export interface AddressState {
  city: string
}

const initialState: AddressState = {
  city: "",
}

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setCityLower: (state) => {
      state.city = state.city.toLowerCase()
    },
    //戻り値のあるメソッドは定義不可
    //isTokyo: (state) => state.city==="Tokyo"
  },
})

export const { setCity, setCityLower } = addressSlice.actions

export const selectCity = (state: AppState) => state.address.city

export const isTokyo = (state: AppState) => state.address.city === "Tokyo"

export const capitalizeCity = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectCity(getState())
  dispatch(setCity(currentValue.toUpperCase()))
}

export default addressSlice.reducer
