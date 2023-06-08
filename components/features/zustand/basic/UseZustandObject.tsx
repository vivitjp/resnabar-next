import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { useCount3 } from "@/zustandStore/storeBasic"

export function UseZustandObject(): UseReturnType {
  const title = `Object(分割代入)による取り出し`
  const subTitle = `const { name, setName } = useCount()`

  const jsx = <ZustandObject />
  return {
    title,
    code,
    subTitle,
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
  const { name, setName } = useCount3()

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
  const address = useCount3((state) => state.address)
  const setAddress = useCount3((state) => state.setAddress)

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

const code = `const ZustandObject = () => {
  return (
    <>
      <Name />
      <Address />
    </>
  )
}
 
const Name = () => {
  const { name, setName } = useCount() //Object(分割代入)による取り出し
 
  return (
    <Row>
      <Row> Name: </Row>
      <Input onChange={() => setName(...)} value={name}/>
      <Row> {name} </Row>
    </Row>
  )
}
 
const Address = () => {
  const address = useCount((state) => state.address)      //個別取り出し
  const setAddress = useCount((state) => state.setAddress)//個別取り出し
 
  return (
    <Row>
      <Row> Address: </Row>
      <Input onChange={() => setAddress(...)} value={address} />
      <Row> {address} </Row>
    </Row>
  )
}`
