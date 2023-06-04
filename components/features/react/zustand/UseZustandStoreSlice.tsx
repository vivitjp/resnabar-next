import { UseReturnType } from "@/components/common/type/type"

export function UseZustandStoreSlice(): UseReturnType {
  const title = `zustand store: Slice パターン`

  return {
    title,
    code,
    codeKeyType: "JSTS",
  }
}

const code = `export interface NameSlice {
  name: String
  setName: (name: string) => void
}
const createNameSlice: StateCreator<NameSlice> = (set) => ({
  name: "",
  setName: (name) => set({ name }),
})
 
export interface AddressSlice {
  address: String
  setAddress: (address: string) => void
}
const createAddressSlice: StateCreator<AddressSlice> = (set) => ({
  address: "",
  setAddress: (address) => set({ address }),
})
 
export const useBoundStore = create<NameSlice & AddressSlice>()((...args) => ({
  ...createNameSlice(...args),
  ...createAddressSlice(...args),
}))
 
//公式Documentの型は以下の通り(煩雑)だが、
StateCreator<AddressSlice & AddressSlice, [], [], AddressSlice>
 
//以下の通り(簡潔)でも動くようだ
StateCreator<AddressSlice>`
