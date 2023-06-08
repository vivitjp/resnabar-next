import { StateCreator, create } from "zustand"

//-----------------------------------------
// Slice Pattern
//-----------------------------------------
export interface NameSlice {
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
