import { create } from "zustand"

export interface CountState {
  count: number
  countUp: () => void
  name: string
  setName: (name: string) => void
  address: string
  setAddress: (address: string) => void
}

export const useCount = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const useCount2 = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const useCount3 = create<CountState>()((set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

//-----------------------------------------
// Person
//-----------------------------------------
export interface Person {
  name: string
  setName: (name: string) => void
  address: string
  setAddress: (address: string) => void
}
export const usePerson1 = create<Person>()((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const usePerson2 = create<Person>()((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))

export const usePerson3 = create<Person>()((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
  address: "",
  setAddress: (address) => set(() => ({ address })),
}))
