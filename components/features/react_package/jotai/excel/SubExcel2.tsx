import { useAtom, Provider } from "jotai"
import { Input } from "@/components/common/styleInputChakra"
import { Button, Flex } from "@chakra-ui/react"
import { atom_array_A } from "./atoms"
import { BoxT, BoxX, FlexX } from "./Commons"
import { useState } from "react"

export const ExcelChainedReaction2 = () => {
  const [index_A, setIndex_A] = useState(0)
  const [array_A, add_A] = useAtom(atom_array_A)

  const handleSetIndexA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex_A(Number(e.currentTarget.value))
  }

  const handleAddA = () => {
    add_A(index_A)
  }

  return (
    <Provider>
      <Flex flexFlow="column" padding="5px" alignItems="flex-start" gap="0">
        <Button onClick={handleAddA} mb={3}>
          Add 1
        </Button>
        <FlexX>
          <BoxT width="100px">Index</BoxT>
          <Input value={index_A} onChange={handleSetIndexA} mb={3} />
        </FlexX>
        <FlexX>
          <BoxT width="100px">Array</BoxT>
          {array_A.map((n) => (
            <BoxX>{n}</BoxX>
          ))}
        </FlexX>
      </Flex>
    </Provider>
  )
}
