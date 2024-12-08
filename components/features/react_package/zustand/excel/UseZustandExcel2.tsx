import { Flex, Text } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { useExcelAuto } from "./store/storeExcel"

export function UseZustandExcel2(): UseReturnType {
  const title = `エクセルスタイル：値更新の連鎖`
  const subTitle = `zustandで連鎖簡潔(周回遅れのUpdate)。値を入れ続けると徐々に値が更新されていく。`

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
    </Flex>
  )
}

const Cell_ALL = () => {
  const { cell_A, cell_B, cell_C, cell_D } = useExcelAuto()

  return (
    <Flex flexFlow="row" fontSize="16px" padding="5px" width="300px" gap="10">
      <Text>{cell_A}</Text>
      <Text>{cell_B}</Text>
      <Text>{cell_C}</Text>
      <Text>{cell_D}</Text>
    </Flex>
  )
}

const Cell_A = () => {
  const { cell_A, setCell_A } = useExcelAuto()

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_A(parseInt(e.currentTarget.value))
  }

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Text> A: </Text>
      <Input onChange={handle} value={cell_A} width={"160px"} />
    </Flex>
  )
}

const code = `■ [storeExcel.ts]
export interface ExcelStateAuto {
  cell_A: number
  setCell_A: (val: number) => void
  cell_B: number
  cell_C: number
  cell_D: number
}
 
export const useExcelAuto = create<ExcelStateAuto>()((set, get) => ({
  ...initialValues,
  setCell_A: (val) =>
    set(() => ({
      cell_A: val,
      cell_B: get().cell_A * 2, 🟠即時反映
      cell_C: get().cell_B * 2, 🟠次回反映
      cell_D: get().cell_B * get().cell_C, 🟠次次回反映
    })),
}))
 
■ [Cell_A.tsx]
const Cell_A = () => {
  const { cell_A, setCell_A } = useExcelAuto()
 
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_A(parseInt(e.currentTarget.value))
  }
 
  return (
    <Flex>
      <Text> A: </Text>
      <Input onChange={handle} value={cell_A}/>
    </Flex>
  )
}`
