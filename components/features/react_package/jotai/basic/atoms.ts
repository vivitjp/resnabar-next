import { atom } from "jotai"

export const countAtom = atom(0)
export const countDerivedAtom = atom(0)

export const citiesAtom = atom(["東京", "京都", "大阪"])
export const citySelectedAtom = atom("")

// 派生 Atom(他のAtomの値を加工)
export const doubledOrigAtom = atom(0)
export const doubledCountAtom = atom((get) => get(doubledOrigAtom) * 2)

// Get & Set
export const addingCountDerivedAtom = atom(
  //Get(null にすれば WriteOnly)
  (get) => get(countDerivedAtom),
  //Method
  (get, set, num: number) => {
    set(countDerivedAtom, get(countDerivedAtom) + num)
  }
)

//非同期fetch: 即時コール
export const urlAtom = atom("http://localhost:5099/posts")
export const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom))
  return await response.json()
})

//非同期fetch: Lazyコール
export const fetchDataAtom = atom("")
export const fetchUrlLazyAtom = atom(
  (get) => get(fetchDataAtom),
  async (get, set) => {
    const response = await fetch(get(urlAtom))
    set(fetchDataAtom, await response.json())
  }
)
