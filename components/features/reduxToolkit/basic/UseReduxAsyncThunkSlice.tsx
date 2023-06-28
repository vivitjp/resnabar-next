import { UseReturnType } from "@/components/type/type"

export function UseReduxAsyncThunkSlice(): UseReturnType {
  const title = `AsyncThunk Slice`

  return {
    title,
    code,
    options: [],
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { AppState } from "../store"
import { fetchCount } from "@/api/counterAPI"
 
export interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}
 
const initialState: CounterState = {
  value: 0,
  status: "idle",
}
 
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
  }
)
 
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    resetCounter: (state) => {
      state.value = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.value += action.payload
      })
  },
})
 
export const { setCounter, resetCounter } = counterSlice.actions
export const selectCounter = (state: AppState) => state.counter.value
 
export default counterSlice.reducer`
