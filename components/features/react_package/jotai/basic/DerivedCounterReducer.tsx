import { Div } from "@/components/common/styleDiv"
import { useAtom } from "jotai"
import { Button, Input } from "@/components/common/styleInput"
import { addingCountDerivedAtom } from "./atoms"
import { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Flex } from "@chakra-ui/react"

export function JotaiDerivedCounterReducer(): UseReturnType {
  const title = `Derived Atom: Reducer`

  const jsx = <DerivedCounterReducer />
  return {
    title,
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
        <Div width="100px">派生カウント</Div>
        <Input defaultValue={value} onChange={handleOnChange} />
        <Button onClick={handleSetValue}>セット</Button>
      </Flex>
      <Div fontSize="16px" padding="5px">
        {countDerived}
      </Div>
    </Flex>
  )
}

const code = `■ Atoms
import { atom } from "jotai"
 
export const addingCountDerivedAtom = atom(
  (get) => get(countDerivedAtom),                  //Get(null にすれば WriteOnly)
  (get, set, num: number) => {                     //Method
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
    <Flex flexFlow="row" >
      <Flex flexFlow="row" >
        <Div>派生カウント</Div>
        <Input defaultValue={value} onChange={handleOnChange} />
        <Button onClick={handleSetValue}>セット</Button>
      </Flex>
      <Div fontSize="16px" padding="5px"> {countDerived} </Div>
    </Flex>
  )
}`
