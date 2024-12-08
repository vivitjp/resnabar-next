import { Provider } from "jotai"
import { UseReturnType } from "@/components/type/type"
import { Flex } from "@chakra-ui/react"
import { ExcelChainedReaction2 } from "./SubExcel2"
import { ExcelChainedReaction1 } from "./SubExcel1"

export function JotaiExcel(): UseReturnType {
  const title = `JotaiでExcelライクな連鎖参照をシミュレート`

  const jsx = <ExcelChainedReaction />
  return {
    title,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "Jotai",
  }
}

const ExcelChainedReaction = () => {
  return (
    <Provider>
      <Flex flexFlow="column" padding="5px" alignItems="flex-start" gap="0">
        <ExcelChainedReaction1 />
        <ExcelChainedReaction2 />
      </Flex>
    </Provider>
  )
}

const code = `[atoms.ts]
export const atom_A = atom(0)
export const atom_B = atom((get) => get(atom_A) * 2)
export const atom_C = atom((get) => get(atom_B) * 2)
export const atom_D = atom((get) => get(atom_B) + get(atom_C))
 
export const atom_X = atom(
  (get) => get(atom_A),
  (get, set, param1: number) => set(atom_A, get(atom_A) + param1)
)
 
[Component.tsx]
import { useAtom, Provider } from "jotai"
 
const ExcelChainedReaction = () => {
  const [cell_A, setCell_A] = useAtom(atom_A)
  const [cell_B, setCell_B] = useAtom(atom_B)
  const [cell_C, setCell_C] = useAtom(atom_C)
 
  const [cell_X, setCellAByParam] = useAtom(atom_X)
 
  const handleOnChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_A(Number(e.currentTarget.value))
  }
  
  const handleOnChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellAByParam(Number(e.currentTarget.value))
  }
 
  return (
    <Provider>
      <Flex>
        <Flex>
          <Input value={cell_A} onChange={handleOnChangeA} />
          <Box >{cell_B}</Box>
          <Box >{cell_C}</Box>
          <Box >{cell_D}</Box>
        </Flex>
        <Flex>
          <Input value={cell_X} onChange={handleOnChangeX} />
        </Flex>
      </Flex>
    </Provider>
  )
}`
