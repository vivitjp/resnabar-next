import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"
import { ChangeEvent, useState } from "react"
import { useInput } from "./components/UseInput"

export function useRenderHooks1AllInOne(): UseReturnType {
  const title = `RenderHook: All in One`
  const subTitle = `１コンポーネント内部に RenderHooks の返り値を集約させると、どれか一つが更新されても同レベルのコンポーネント全体が再描画(高コスト)される(* React DevTool の Highlight Option を on にして観察)`

  const jsx = <RenderHooksAllInOne />
  const codeKeyType: CodeKeyType = "JSTS"
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: codeKeyType,
  }
}

const RenderHooksAllInOne = () => {
  const [typedValue, setTypedValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedValue(e.currentTarget.value)
  }
  const { RenderInput: RenderInput1 } = useInput()
  const { RenderInput: RenderInput2 } = useInput()
  return (
    <Flex flexFlow="column" padding="10px">
      <Flex flexFlow="row" padding="5px">
        <input onChange={handleChange} value={typedValue} />
      </Flex>
      <Flex flexFlow="row" padding="5px">
        {RenderInput1}
      </Flex>
      <Flex flexFlow="row" padding="5px">
        {RenderInput2}
      </Flex>
    </Flex>
  )
}

const code = `const RenderHooksAllInOne = () => {
  const [typedValue, setTypedValue] = useState("") //LocalHooks
  const { RenderInput: RenderInput1 } = useInput() //renderHooks
  const { RenderInput: RenderInput2 } = useInput() //renderHooks
  const handleChange = () => {}
 
  return (
    <Flex flexFlow="column" >
      <Flex flexFlow="row" ><input onChange={handleChange} value={typedValue} /></Flex>
      <Flex flexFlow="row" >{RenderInput1}</Flex>
      <Flex flexFlow="row" >{RenderInput2}</Flex>
    </Flex>
  )
}`
