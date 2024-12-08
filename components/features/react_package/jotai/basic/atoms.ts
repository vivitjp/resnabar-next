import { atom } from "jotai"

export const citiesAtom = atom(["東京", "京都", "大阪"])
export const citySelectedAtom = atom("")

// 派生 Atom(他のAtomの値を加工)

export const doubledOrigAtom = atom(0)
export const doubledCountAtom = atom((get) => get(doubledOrigAtom) * 2)

// Get & Set
export const countAtom = atom(0)
export const countDerivedAtom = atom(0)

export const addingCountDerivedAtom = atom(
  //Get(null にすれば WriteOnly)
  (get) => get(countDerivedAtom),
  //Method
  (get, set, num: number) => {
    set(countDerivedAtom, get(countDerivedAtom) + num)
  }
)

/*
// primitive atom
function atom<Value>(initialValue: Value): PrimitiveAtom<Value>

// 読み取り専用
function atom<Value>(read: (get: Getter) => Value): Atom<Value>

// writable derived atom
function atom<Value, Args extends unknown[], Result>(
  read: (get: Getter) => Value,
  write: (get: Getter, set: Setter, ...args: Args) => Result,
): WritableAtom<Value, Args, Result>

// write-only derived atom
function atom<Value, Args extends unknown[], Result>(
  read: Value,
  write: (get: Getter, set: Setter, ...args: Args) => Result,
): WritableAtom<Value, Args, Result>`
*/
