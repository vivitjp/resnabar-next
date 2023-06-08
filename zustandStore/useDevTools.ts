import { create } from "zustand"
import { devtools } from "zustand/middleware"

//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja

type Person = {
  name: string
  setName: (name: string) => void
}

export const useDevTools = create<Person>()(
  devtools((set) => ({
    name: "John",
    setName: (name) => set({ name }, false, "setName"),
  }))
)
