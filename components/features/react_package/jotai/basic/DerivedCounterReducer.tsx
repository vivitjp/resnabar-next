import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInputChakra"
import { addingCountDerivedAtom } from "./atoms"
import { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Box, Flex } from "@chakra-ui/react"

export function JotaiDerivedCounterReducer(): UseReturnType {
  const title = `Derived Atom(他の配列値atom操作パターン)`
  const subTitle = `const valueAtom = atom(0);
const derivedAtom = atom(
  (get) => get(valueAtom),         //Get: null = WriteOnly
  (get, set, param: number) => {   //Set: method
    set(valueAtom, get(valueAtom) + param)
  }
)
const [value, setValue] = useAtom(derivedAtom)
setValue(1)`

  const jsx = <DerivedCounterReducer />
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

const DerivedCounterReducer = () => {
  const [value, setValue] = useState(0)
  const [countDerived, add] = useAtom(addingCountDerivedAtom)

  const handleSetValue = () => {
    add(value)
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
        <Button onClick={handleSetValue}>セット</Button>
      </Flex>
      <Box fontSize="16px" padding="5px">
        {countDerived}
      </Box>
    </Flex>
  )
}

const code = `■ Atoms
import { atom } from "jotai"
 
// 他の配列値atom操作パターン
export const addingCountDerivedAtom = atom(
  (get) => get(countDerivedAtom),       //Get(null にすれば WriteOnly)
  (get, set, num: number) => {          //Method
    set(countDerivedAtom, get(countDerivedAtom) + num)
  }
)
 
■ Component
import { useAtom } from "jotai"
import { addingCountDerivedAtom } from "./atoms"
 
const DerivedCounterReducer = () => {
  const [value, setValue] = useState(0)
  const [countDerived, add] = useAtom(addingCountDerivedAtom)
 
  const handleSetValue = () => { add(value) }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }
 
  return (
    <Flex>
      <Flex>
        <Box>派生カウント</Box>
        <Input value={value} onChange={handleOnChange} />
        <Button onClick={handleSetValue}>セット</Button>
      </Flex>
      <Box fontSize="16px" padding="5px"> {countDerived} </Box>
    </Flex>
  )
}`
