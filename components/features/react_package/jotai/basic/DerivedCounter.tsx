import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInputChakra"
import { doubledCountAtom, doubledOrigAtom } from "./atoms"
import { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Box, Flex } from "@chakra-ui/react"

export function JotaiDerivedCounter(): UseReturnType {
  const title = `Derived Atom`

  const jsx = <DerivedCounter />
  return {
    title,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "Jotai",
  }
}

const DerivedCounter = () => {
  const [value, setValue] = useState(0)
  const [origCount, setOrigCount] = useAtom(doubledOrigAtom)
  const [doubledCount] = useAtom(doubledCountAtom)

  const handleSetCount = () => {
    setOrigCount(value)
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  return (
    <Flex
      flexFlow="row"
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Box width="100px">派生カウント</Box>
        <Input defaultValue={value} onChange={handleOnChange} />
        <Button onClick={handleSetCount}>セット</Button>
      </Flex>
      <Box fontSize="16px" padding="5px">
        {origCount} : {doubledCount}
      </Box>
    </Flex>
  )
}

const code = `■ Atoms
import { atom } from "jotai"
 
export const doubledOrigAtom = atom(0)
export const doubledCountAtom = atom((get) => get(doubledOrigAtom) * 2)
 
■ Component
import { useAtom } from "jotai"
import { doubledCountAtom, doubledOrigAtom } from "./atoms"
 
const DerivedCounter = () => {
  const [value, setValue] = useState(0)
  const [origCount, setOrigCount] = useAtom(doubledOrigAtom)
  const [doubledCount] = useAtom(doubledCountAtom)
 
  const handleSetCount = () => { setOrigCount(value) }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }
 
  return (
    <Flex flexFlow="row" >
      <Flex flexFlow="row" >
        <Box>派生カウント</Box>
        <Input defaultValue={value} onChange={handleOnChange} />
        <Button onClick={handleSetCount}>セット</Button>
      </Flex>
      <Box> {origCount} : {doubledCount} </Box>
    </Flex>
  )
}`
