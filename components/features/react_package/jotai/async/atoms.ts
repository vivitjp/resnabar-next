import { atom } from "jotai"

// async/await は v2 で実装

//非同期fetch: 即時コール
export const urlAtom = atom("https://vivit-mock-company.vercel.app/2")
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
