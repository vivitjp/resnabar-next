import { Column, Row } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"
import { useState, ChangeEvent } from "react"
import { useInput } from "./components/UseInput"

export function useRenderHooks2Cascaded(): UseReturnType {
  const title = `RenderHook: Cascaded`
  const subTitle = `RenderHooks の返り値を子コンポーネントに分散されてから親コンポーネントでまとめると、他の更新がコンポーネント全体の再描画を引き起こさない(* React DevTool の Highlight Option を on にして観察)`

  const jsx = <RenderHooksCascaded />
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

const RenderHooksCascaded = () => {
  return (
    <Column padding="10px">
      <LocalCompo1 />
      <RenderHooksCompo1 />
      <RenderHooksCompo2 />
    </Column>
  )
}
const LocalCompo1 = () => {
  const [value, setValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <Row padding="5px">
      <input onChange={handleChange} value={value} />
    </Row>
  )
}

const RenderHooksCompo1 = () => {
  const { RenderInput } = useInput()
  return <Row padding="5px">{RenderInput}</Row>
}

const RenderHooksCompo2 = () => {
  const { RenderInput } = useInput()
  return <Row padding="5px">{RenderInput}</Row>
}

const code = `const RenderHooksCascaded = () => {
  return (
    <Column>
      <LocalCompo1 />
      <RenderHooksCompo1 />
      <RenderHooksCompo2 />
    </Column>
  )
}
 
const LocalCompo1 = () => {
  const [value, setValue] = useState("") //LocalHooks
  const handleChange = () => {}
  return <input onChange={handleChange} value={value} />
}
 
const RenderHooksCompo1 = () => {
  const { RenderInput } = useInput() //renderHooks
  return <Row>{RenderInput}</Row>
}
 
const RenderHooksCompo2 = () => {
  const { RenderInput } = useInput() //renderHooks
  return <Row>{RenderInput}</Row>
}`
