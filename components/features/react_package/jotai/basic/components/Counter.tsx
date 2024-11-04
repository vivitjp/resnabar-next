import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInputChakra"
import { countAtom } from "../atoms"
import { useState } from "react"
import { Box, Flex } from "@chakra-ui/react"

export const Counter = () => {
  const [value, setValue] = useState(0)
  const [_, setCounter] = useAtom(countAtom)

  const handleSetValue = () => {
    setCounter(value)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Box width="100px">カウント</Box>
      <Input defaultValue={value} onChange={handleOnChange} />
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}
