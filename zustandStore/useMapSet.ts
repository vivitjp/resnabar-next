import { create } from "zustand"

type Person = {
  nameMap: Map<string, string>
  citySet: Set<string>
}

export const useMapSet = create<Person>()(() => ({
  nameMap: new Map(),
  citySet: new Set(),
}))
