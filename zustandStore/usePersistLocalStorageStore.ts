import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type PersistPerson = {
  name: string
  age: number
  active: boolean
  setName: (name: string) => void
  setAge: (age: number) => void
  setActive: (flag: boolean) => void
}

export const usePersistLocalStorageStore = create<PersistPerson>()(
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
      name: "persist-localStorage-person", //ユニークな判別名
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const usePersistLocalStoragePartializeStore = create<PersistPerson>()(
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
      name: "persist-localStorage-partialize-person", //ユニークな判別名
      storage: createJSONStorage(() => localStorage),
      //age以外を保存
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["age"].includes(key))
        ),
      //ageのみを保存
      // partialize: (state) => ({ age: state.age }),
    }
  )
)
