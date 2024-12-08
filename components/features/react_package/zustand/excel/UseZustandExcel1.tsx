import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { Cell_A } from "./coponents/Cell_A"
import { Cell_B } from "./coponents/Cell_B"
import { Cell_C } from "./coponents/Cell_C"
import { Cell_ALL } from "./coponents/Cell_ALL"

export function UseZustandExcel1(): UseReturnType {
  const title = `エクセルスタイル：値更新の連鎖 1`
  const subTitle = `zustandで連鎖が簡潔せず、useEffectでの制御が必須`

  const jsx = <Compo />
  return {
    title,
    subTitle,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const Compo = () => {
  return (
    <Flex flexFlow="column" gap="10px">
      <Cell_ALL />
      <Cell_A />
      <Cell_B />
      <Cell_C />
    </Flex>
  )
}

const code = `■ [storeExcel.ts]
export interface ExcelState {
  cell_A: number
  setCell_A: (val: number) => void
  cell_B: number
  setCell_B: (val: number) => void
  cell_C: number
  setCell_C: (val: number) => void
  cell_D: number
  setCell_D: (val: number) => void
}
 
const initialValues = {
  cell_A: 0,
  cell_B: 0,
  cell_C: 0,
  cell_D: 0,
}
 
export const useExcel = create<ExcelState>()((set) => ({
  ...initialValues,
  setCell_A: (val) => set(() => ({ cell_A: val })),
  setCell_B: (val) => set((state) => ({ cell_B: state.cell_A + val })),
  setCell_C: (val) => set((state) => ({ cell_C: state.cell_B + val })),
  setCell_D: () => set((state) => ({ cell_D: state.cell_B + state.cell_C })),
}))
 
■ [Cell_A.tsx]
export const Cell_A = () => {
  const cell_A = useExcel((state) => state.cell_A)
  const setCell_A = useExcel((state) => state.setCell_A)
 
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_A(parseInt(e.currentTarget.value))
  }
 
  return (
    <Flex>
      <Text> A: </Text>
      <Input onChange={handle} value={cell_A}/>
    </Flex>
  )
}
 
■ [Cell_B.tsx]
export const Cell_B = () => {
  const cell_A = useExcel((state) => state.cell_A)
  const cell_B = useExcel((state) => state.cell_B)
  const setCell_B = useExcel((state) => state.setCell_B)
 
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_B(parseInt(e.currentTarget.value))
  }
 
  🟠連鎖のトリガーが必要
  useEffect(() => {
    setCell_B && setCell_B(cell_A)
  }, [setCell_B, cell_A])
 
  return (
    <Flex>
      <Text> B: </Text>
      <Input onChange={handle} value={cell_B}/>
    </Flex>
  )
}`
