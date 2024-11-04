import { Div } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { useAtom } from "jotai"
import { citySelectedAtom } from "./atoms"
import { SelectCity } from "./components/SelectCity"
import { Flex } from "@chakra-ui/react"

export function JotaiSelector(): UseReturnType {
  const title = `Jotai 基礎: Selector`

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
      <Div fontSize="16px" padding="5px">
        選択された市 : {citySelected}
      </Div>
    </Flex>
  )
}

const code = `■ Atoms
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
      <Div>
        選択された市 : {citySelected}
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
