import { Div } from "@/components/common/styleDiv"
import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInput"
import { countAtom } from "../atoms"
import { useState } from "react"
import { Flex } from "@chakra-ui/react"

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
      <Div width="100px">カウント</Div>
      <Input defaultValue={value} onChange={handleOnChange} />
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}
