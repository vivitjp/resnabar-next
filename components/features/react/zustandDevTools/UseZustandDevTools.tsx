import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { useRef } from "react"
import { useDevTools } from "@/store/useDevTools"

export function UseZustandDevTools(): UseReturnType {
  return {
    title: `Zustand: DevTools`,
    subTitle: "Chromeの拡張機能、要インストール",
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandObject />,
    codeKeyType: "JSTS",
  }
}

const ZustandObject = () => {
  return (
    <Column gap="10px">
      <Name />
    </Column>
  )
}

const Name = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = useDevTools(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Row>
      <Input ref={nameRef} width={"160px"} />
      <button onClick={handleClickButton} value="Save">
        Submit
      </button>
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {Person.name}
      </Row>
    </Row>
  )
}

const code = `//■ Chrome Extension
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja

//■ FireFox Extension
https://addons.mozilla.org/ja/firefox/addon/reduxdevtools/
 
//■ Store
type Person = {
  name: string
  setName: (name: string) => void
}
 
export const useDevTools = create<Person>()(
  devtools((set) => ({
    name: "John",
    setName: (name) => set({ name }, false, "setName"),
  }))
)
 
//■
const Name = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = useDevTools(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )
 
  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }
 
  return (
    <Row>
      <Row> Name: </Row>
      <Input ref={nameRef}/>
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Row> {Person.name} </Row>
    </Row>
  )
}`
