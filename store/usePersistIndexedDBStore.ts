import { create } from "zustand"
import { persist, createJSONStorage, StateStorage } from "zustand/middleware"
import { get, set, del } from "idb-keyval" // can use anything: IndexedDB, Ionic Storage, etc.

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved")
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved")
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted")
    await del(name)
  },
}

type PersistPerson = {
  name: string
  age: number
  active: boolean
  setName: (name: string) => void
  setAge: (age: number) => void
  setActive: (flag: boolean) => void
}

export const usePersistIndexedDBStore = create<PersistPerson>()(
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
      name: "persist-indexDB-person", //ユニークな判別名
      storage: createJSONStorage(() => storage),
    }
  )
)
