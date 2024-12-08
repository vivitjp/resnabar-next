import { useExcel } from "../store/storeExcel"
import { Flex, Text } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { useEffect } from "react"

export const Cell_C = () => {
  const cell_B = useExcel((state) => state.cell_B)
  const cell_C = useExcel((state) => state.cell_C)
  const setCell_C = useExcel((state) => state.setCell_C)

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_C(parseInt(e.currentTarget.value))
  }

  useEffect(() => {
    setCell_C && setCell_C(cell_B)
  }, [setCell_C, cell_B])

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Text> B: </Text>
      <Input onChange={handle} value={cell_C} width={"160px"} />
    </Flex>
  )
}
