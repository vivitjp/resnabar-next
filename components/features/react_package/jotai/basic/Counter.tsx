import { UseReturnType } from "@/components/type/type"
import { useAtom } from "jotai"
import { countAtom } from "./atoms"
import { Counter } from "./components/Counter"
import { Box, Flex } from "@chakra-ui/react"

export function JotaiCounter(): UseReturnType {
  const title = `Atom(値パターン: useStateに近似)`
  const subTitle = `const countAtom = atom(0)
const [count, setCount] = useAtom(countAtom)`

  const jsx = <Component />
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
      <Box fontSize="16px" padding="5px">
        カウント: {count}
      </Box>
    </Flex>
  )
}

const code = `■ Atoms
import { atom } from "jotai"
 
//値パターン: useStateに近似
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
      <Box>
        カウント: {count}
      </Box>
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
      <Box>カウント</Box>
      <Input defaultValue={value} onChange={handleOnChange} />
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}`
