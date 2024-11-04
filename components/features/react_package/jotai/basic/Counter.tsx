import { Div } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"

import { useAtom } from "jotai"
import { countAtom } from "./atoms"
import { Counter } from "./components/Counter"
import { Flex } from "@chakra-ui/react"

export function JotaiCounter(): UseReturnType {
  const title = `Jotai 基礎: Counter`

  const jsx = <Component />
  return {
    title,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "Jotai",
  }
}

const Component = () => {
  const [count] = useAtom(countAtom)

  return (
    <Flex
      flexFlow="row"
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <Counter />
      <Div fontSize="16px" padding="5px">
        カウント: {count}
      </Div>
    </Flex>
  )
}

const code = `■ Atoms
import { atom } from "jotai"
 
export const countAtom = atom(0)
export const countDerivedAtom = atom(0)
 
■ 親
import { useAtom } from "jotai"
import { countAtom } from "./atoms"
import { Counter } from "./components/Counter"
 
const Component = () => {
  const [count] = useAtom(countAtom)
 
  return (
    <Flex flexFlow="row" >
      <Counter />
      <Div>
        カウント: {count}
      </Div>
    </Flex>
  )
}
 
■ 子
import { useAtom } from "jotai"
import { countAtom } from "../atoms"
 
export const Counter = () => {
  const [value, setValue] = useState(0)
  const [_, setCounter] = useAtom(countAtom)
 
  const handleSetValue = () => { setCounter(value) }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }
 
  return (
    <Flex flexFlow="row" >
      <Div>カウント</Div>
      <Input defaultValue={value} onChange={handleOnChange} />
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}`
