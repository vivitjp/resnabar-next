import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { usePerson1 } from "@/store/storeBasic"

export function UseZustandObjectShallow(): UseReturnType {
  const title = `Object(分割代入)による取り出しでShallow比較 [★★]`
  const subTitle = `const { name, setName } = usePerson(
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
  const { name, setName } = usePerson1(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Row>
      <Input onChange={handleName} value={name} width={"160px"} />
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {name}
      </Row>
    </Row>
  )
}

const Address = () => {
  const address = usePerson1((state) => state.address)
  const setAddress = usePerson1((state) => state.setAddress)

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
  //Object(分割代入)による取り出し
  const { name, setName } = usePerson(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow // Shallowによる比較で再描画抑制
  )
 
  return (
    <Row>
      <Row> Name: </Row>
      <Input onChange={() => setName(...)} value={name}/>
      <Row> {name} </Row>
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
