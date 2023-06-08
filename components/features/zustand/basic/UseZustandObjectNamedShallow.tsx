import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { usePerson2 } from "@/zustandStore/storeBasic"

export function UseZustandObjectNamedShallow(): UseReturnType {
  const title = `Object(名前付)による取り出しでShallow比較 [★]`
  const subTitle = `const Person = usePerson(
    (state) => ({ name: state.name, setName: state.setName }), shallow
  )`

  const jsx = <ZustandObject />
  return {
    title,
    subTitle,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const ZustandObject = () => {
  return (
    <Column gap="10px">
      <Name />
      <Address />
    </Column>
  )
}

const Name = () => {
  const Person = usePerson2(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    Person.setName(e.currentTarget.value)
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Row>
      <Input onChange={handleName} value={Person.name} width={"160px"} />
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {Person.name}
      </Row>
    </Row>
  )
}

const Address = () => {
  const address = usePerson2((state) => state.address)
  const setAddress = usePerson2((state) => state.setAddress)

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Address:
      </Row>
      <Input onChange={handleAddress} value={address} width={"160px"} />
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {address}
      </Row>
    </Row>
  )
}

const code = `import { shallow } from "zustand/shallow"
 
const ZustandObject = () => {
  return (
    <>
      <Name />
      <Address />
    </>
  )
}
 
const Name = () => {
  //Object(名前付)による取り出し
  const Person = usePerson(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow // Shallowによる比較で再描画抑制
  )

  return (
    <Row>
      <Row> Name: </Row>
      <Input onChange={() => Person.setName(...)} value={name}/>
      <Row> {Person.name} </Row>
    </Row>
  )
}
 
const Address = () => {
  //個別取り出し
  const address = usePerson((state) => state.address)
  const setAddress = usePerson((state) => state.setAddress)
 
  return (
    <Row>
      <Row> Address: </Row>
      <Input onChange={() => setAddress(...)} value={address} />
      <Row> {address} </Row>
    </Row>
  )
}`
