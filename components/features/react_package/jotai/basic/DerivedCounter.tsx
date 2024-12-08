import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInputChakra"
import { doubledCountAtom, doubledOrigAtom } from "./atoms"
import { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Box, Flex } from "@chakra-ui/react"

export function JotaiDerivedCounter(): UseReturnType {
  const title = `Derived Atom(他の値atom操作パターン)`
  const subTitle = `const valueAtom = atom(0);
const derivedAtom = atom((get) => get(valueAtom) * 2);
const [calcValue] = useAtom(derivedAtom)`

  const jsx = <DerivedCounter />
  return {
    title,
    subTitle,
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
        <Input value={value} onChange={handleOnChange} />
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
 
// 値パターン: useStateに近似
export const doubledOrigAtom = atom(0)
// 他のatom値操作パターン(doubledOrigAtomの変化にReactiveに対応)
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
    <Flex>
      <Flex>
        <Box>派生カウント</Box>
        <Input value={value} onChange={handleOnChange} />
        <Button onClick={handleSetCount}>セット</Button>
      </Flex>
      <Box> {origCount} : {doubledCount} </Box>
    </Flex>
  )
}`
