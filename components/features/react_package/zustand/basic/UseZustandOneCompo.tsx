import { Column, Row } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/type/type"
import { useCount } from "@/store/zustand/storeBasic"

export function UseZustandOneCompo(): UseReturnType {
  const title = `コンポーネント処理(Oneコンポーネント)`
  const subTitle = `同一コンポーネント内で呼び出した全変数とメソッドはお互いに再描画を誘引`

  const jsx = <ZustandOne />
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

const ZustandOne = () => {
  const count = useCount((state) => state.count)
  const countUp = useCount((state) => state.countUp)

  const name = useCount((state) => state.name)
  const setName = useCount((state) => state.setName)
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const address = useCount((state) => state.address)
  const setAddress = useCount((state) => state.setAddress)
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <Column gap="10px">
      <Row fontSize="18px" padding="5px" gap="20px">
        <Button onClick={countUp}>Count Up</Button>
        <Row fontSize="24px" padding="5px">
          {count}
        </Row>
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px" width={"100px"}>
          Name:
        </Row>
        <Input onChange={handleName} value={name} width={"160px"} />
        <Row fontSize="16px" padding="5px" width={"300px"}>
          {name}
        </Row>
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px" width={"100px"}>
          Address:
        </Row>
        <Input onChange={handleAddress} value={address} width={"160px"} />
        <Row fontSize="16px" padding="5px" width={"300px"}>
          {address}
        </Row>
      </Row>
    </Column>
  )
}

const code = `const ZustandOne = () => {
  const count = useCount((state) => state.count)
  const countUp = useCount((state) => state.countUp)
 
  const name = useCount((state) => state.name)
  const setName = useCount((state) => state.setName)
  const handleName = (e) => { setName(e.currentTarget.value) }
 
  const address = useCount((state) => state.address)
  const setAddress = useCount((state) => state.setAddress)
  const handleAddress = (e) => { setAddress(e.currentTarget.value) }
 
  return (
    <>
      <>
        <Button onClick={countUp}>Count Up</Button>
        {count}
      </>
      <>
        Name: <Input onChange={handleName} value={name} />
        {name}
      </>
      <>
        Address: <Input onChange={handleAddress} value={address} />
        {address}
      </>
    </>
  )
}`
