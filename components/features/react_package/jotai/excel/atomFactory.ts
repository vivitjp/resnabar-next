import { Atom, atom } from "jotai"

// type Props<T extends any> = {
//   value: T
//   nums: number
//   derived: ReturnType<Atom>
//   method?: () => void
// }

// atom を CB で渡す方法が不明

// export const atomFactory = <T,>({value:T, nums=4, method?: ()=>void}) => {
//   const atoms = []
//   for (let i = 0; i < nums; i++) {
//   if (!method) {
//       atoms.push(atom(value))
//     } else {
//       atoms.push(atom(value))
//     }
//   }
//   return atoms
// }

//   atom(
//   (get) => get(atom_array_base_A),
//   (get, set, target: number) => {
//     set(
//       atom_array_base_A,
//       get(atom_array_base_A).map((n, index) =>
//         index === target ? method_A(n, get(atom_A)) : n
//       )
//     )
//   }
// )
