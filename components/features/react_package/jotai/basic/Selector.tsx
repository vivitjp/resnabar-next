import { UseReturnType } from "@/components/type/type"
import { useAtom } from "jotai"
import { citySelectedAtom } from "./atoms"
import { SelectCity } from "./components/SelectCity"
import { Box, Flex } from "@chakra-ui/react"

export function JotaiSelector(): UseReturnType {
  const title = `Atom(配列値パターン: useStateに近似)`
  const subTitle = `const citiesAtom = atom(["A", "B", "C"])
const [cities, setCities] = useAtom(citiesAtom)`

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
  const [citySelected] = useAtom(citySelectedAtom)

  return (
    <Flex
      flexFlow="row"
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <SelectCity />
      <Box fontSize="16px" padding="5px">
        選択された市 : {citySelected}
      </Box>
    </Flex>
  )
}

const code = `■ Atoms(配列値パターン: useStateに近似)
import { atom } from "jotai"
 
export const citiesAtom = atom(["東京", "京都", "大阪"])
export const citySelectedAtom = atom("")
 
■ 親
import { useAtom } from "jotai"
import { citySelectedAtom } from "./atoms"
import { SelectCity } from "./components/SelectCity"
 
const Component = () => {
  const [citySelected] = useAtom(citySelectedAtom)
 
  return (
    <Flex flexFlow="row" >
      <SelectCity />
      <Box>
        選択された市 : {citySelected}
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
