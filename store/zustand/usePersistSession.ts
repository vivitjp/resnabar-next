import { create } from "zustand"
import { persist } from "zustand/middleware"

type PersistPerson = {
  name: string
  age: number
  active: boolean
  setName: (name: string) => void
  setAge: (age: number) => void
  setActive: (flag: boolean) => void
}

export const usePersistSession = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      age: 35,
      active: false,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setActive: (flag) => set({ active: flag }),
    }),
    {
      name: "persist-session-person", //ユニークな判別名
      getStorage: () => sessionStorage, //<-- Deprecated
    }
  )
)
