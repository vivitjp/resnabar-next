import { useExcel } from "../store/storeExcel"
import { Flex, Text } from "@chakra-ui/react"

export const Cell_ALL = () => {
  const cell_A = useExcel((state) => state.cell_A)
  const cell_B = useExcel((state) => state.cell_B)
  const cell_C = useExcel((state) => state.cell_C)
  const cell_D = useExcel((state) => state.cell_D)

  return (
    <Flex flexFlow="row" fontSize="16px" padding="5px" width="300px" gap="10">
      <Text>{cell_A}</Text>
      <Text>{cell_B}</Text>
      <Text>{cell_C}</Text>
      <Text>{cell_D}</Text>
    </Flex>
  )
}
