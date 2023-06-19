import { UseReturnType } from "@/components/type/type"

export function UseReduxSlice(): UseReturnType {
  const title = `Slice`

  return {
    title,
    code,
    options: [],
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { AppState, AppThunk } from "../store"
 
//型
export interface AddressState {
  city: string
}
//値
const initialState: AddressState = {
  city: "",
}
 
export const addressSlice = createSlice({
  name: "address",  <--- ユニークな判別名
  initialState,     <--- 初期値
  reducers: {       <--- メソッド
    setCity: (state, action: PayloadAction<string>) => {  <--- payload が引数
      state.city = action.payload
    },
    setCityLower: (state) => { <-- 引数なしのメソッド
      state.city = state.city.toLowerCase()
    },
    //戻り値のあるメソッドは定義不可
    //isTokyo: (state) => state.city==="Tokyo"
  },
})
 
//Method(setter)
export const { setCity } = addressSlice.actions
 
//ステートセレクタ(getter)
export const selectCity = (state: AppState) => state.address.city

//カスタムセレクタ
export const isTokyo = (state: AppState) => state.address.city === "Tokyo"
 
//ステート活用した応用Method
export const capitalizeCity = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectCity(getState())
  dispatch(setCity(currentValue.toUpperCase()))
}
 
//Reactiveではない応用メソッド
export const isTokyo = (): AppThunk => (_, getState) => {
  return selectCity(getState()) === "Tokyo"
}

export default addressSlice.reducer
`
