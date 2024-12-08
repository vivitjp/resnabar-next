import { useExcel } from "../store/storeExcel"
import { Flex, Text } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { useEffect } from "react"

export const Cell_B = () => {
  const cell_A = useExcel((state) => state.cell_A)
  const cell_B = useExcel((state) => state.cell_B)
  const setCell_B = useExcel((state) => state.setCell_B)

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_B(parseInt(e.currentTarget.value))
  }

  useEffect(() => {
    setCell_B && setCell_B(cell_A)
  }, [setCell_B, cell_A])

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Text> B: </Text>
      <Input onChange={handle} value={cell_B} width={"160px"} />
    </Flex>
  )
}
