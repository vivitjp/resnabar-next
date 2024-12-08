import { create } from "zustand"

export interface ExcelState {
  cell_A: number
  setCell_A: (val: number) => void
  cell_B: number
  setCell_B: (val: number) => void
  cell_C: number
  setCell_C: (val: number) => void
  cell_D: number
  setCell_D: (val: number) => void
}

const initialValues = {
  cell_A: 0,
  cell_B: 0,
  cell_C: 0,
  cell_D: 0,
}

export const useExcel = create<ExcelState>()((set) => ({
  ...initialValues,
  setCell_A: (val) => set(() => ({ cell_A: val })),
  setCell_B: (val) => set((state) => ({ cell_B: state.cell_A + val })),
  setCell_C: (val) => set((state) => ({ cell_C: state.cell_B + val })),
  setCell_D: () => set((state) => ({ cell_D: state.cell_B + state.cell_C })),
}))

export interface ExcelStateAuto {
  cell_A: number
  setCell_A: (val: number) => void
  cell_B: number
  cell_C: number
  cell_D: number
}

export const useExcelAuto = create<ExcelStateAuto>()((set, get) => ({
  ...initialValues,
  setCell_A: (val) =>
    set(() => ({
      cell_A: val,
      cell_B: get().cell_A * 2,
      cell_C: get().cell_B * 2,
      cell_D: get().cell_B * get().cell_C,
    })),
}))
