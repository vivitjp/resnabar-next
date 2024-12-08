import { useExcel } from "../store/storeExcel"
import { Flex, Text } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"

export const Cell_A = () => {
  const cell_A = useExcel((state) => state.cell_A)
  const setCell_A = useExcel((state) => state.setCell_A)

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
