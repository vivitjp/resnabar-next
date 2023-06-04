import { Column, Row } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { useCount2 } from "@/store/storeBasic"

export function UseZustandCascaded(): UseReturnType {
  const title = `コンポーネント分散処理`
  const subTitle = `変数の取り出しを子コンポーネントに振り分けることで再描画を抑制`

  const jsx = <ZustandCascaded />
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

const ZustandCascaded = () => {
  return (
    <Column gap="10px">
      <Count />
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px" width={"100px"}>
          Name:
        </Row>
        <InputName />
        <Name />
      </Row>
      <Address />
    </Column>
  )
}

const Count = () => {
  const countUp = useCount2((state) => state.countUp)
  const count = useCount2((state) => state.count)

  return (
    <Row fontSize="18px" padding="5px" gap="20px">
      <Button onClick={countUp}>Count Up</Button>
      <Row fontSize="24px" padding="5px">
        {count}
      </Row>
    </Row>
  )
}

const InputName = () => {
  const name = useCount2((state) => state.name)
  const setName = useCount2((state) => state.setName)

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return <Input onChange={handleName} value={name} width={"160px"} />
}

const Name = () => {
  const name = useCount2((state) => state.name)

  return (
    <Row fontSize="16px" padding="5px" width={"300px"}>
      {name}
    </Row>
  )
}

const Address = () => {
  const address = useCount2((state) => state.address)
  const setAddress = useCount2((state) => state.setAddress)

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

const code = `const ZustandCascaded = () => {
  return (
    <>
      <Count />
      <>
        Name: <InputName />
        <Name />
      </>
      <Address />
    </>
  )
}
 
const Count = () => {
  const countUp = useCount((state) => state.countUp)
  const count = useCount((state) => state.count)
 
  return (
    <>
      <Button onClick={countUp}>Count Up</Button>
      <> {count} </>
    </>
  )
}
 
const InputName = () => {
  const name = useCount((state) => state.name)
  const setName = useCount((state) => state.setName)
  const handleName = (e) => { setName(e.currentTarget.value) }
 
  return <Input onChange={handleName} value={name} />
}
 
const Name = () => {
  const name = useCount((state) => state.name)
 
  return <> {name} </>
}
 
const Address = () => {
  const address = useCount((state) => state.address)
  const setAddress = useCount((state) => state.setAddress)
 
  const handleAddress = (e) => { setAddress(e.currentTarget.value) }
 
  return (
    <>
      <Input onChange={handleAddress} value={address} />
      <> {address} </>
    </>
  )
}`
