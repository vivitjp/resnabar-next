import { UseReturnType } from "@/components/common/type/type"

export function UseZustandStore(): UseReturnType {
  const title = `zustand store`

  return {
    title,
    code,
    codeKeyType: "JSTS",
  }
}

const code = `export interface CountState {
  count: number
  name: string
  countUp: () => void
  setName: (name: string) => void
  address: string
  setAddress: (address: string) => void
}
 
export const useCount = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set((state) => ({ name })),
  address: "",
  setAddress: (address) => set((state) => ({ address })),
}))
`
