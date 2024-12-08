import { atom } from "jotai"

// Excelの連鎖参照を実現
export const atom_A = atom(0)
export const atom_B = atom((get) => get(atom_A) * 2)
export const atom_C = atom((get) => get(atom_B) * 2)
export const atom_D = atom((get) => get(atom_B) + get(atom_C))
export const atom_E = atom((get) => get(atom_C) + get(atom_A))
export const atom_F = atom((get) => get(atom_B) + get(atom_E))
export const atom_G = atom((get) => get(atom_E) + get(atom_F))
export const atom_H = atom((get) => get(atom_G) + get(atom_A))
export const atom_I = atom((get) => get(atom_B) + get(atom_H))
export const atom_J = atom((get) => get(atom_I) + get(atom_A))
export const atom_K = atom((get) => get(atom_F) + get(atom_H))
export const atom_L = atom((get) => get(atom_H) + get(atom_G))
export const atom_M = atom((get) => get(atom_L) + get(atom_K))

const method_A = (base: number, param: number) => base + param
const atom_array_base_A = atom([0, 0, 0, 0])
export const atom_array_A = atom(
  (get) => get(atom_array_base_A),
  (get, set, target: number) => {
    set(
      atom_array_base_A,
      get(atom_array_base_A).map((n, index) =>
        index === target ? method_A(n, get(atom_A)) : n
      )
    )
  }
)
