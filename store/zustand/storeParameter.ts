import { create } from "zustand"

export type Person = {
  id: string
  name: string
}

export interface People {
  names: Person[]
  setName: (person: Person) => void
  getName: (id: string) => string
}

// export const usePerson1 = create<Person>()((set) => ({
//   names: [],
//   setName: (person)  => set((state.names) => {   }),
// }))
