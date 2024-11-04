import { Flex } from "@chakra-ui/react"
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
    <Flex flexFlow="column" gap="10px">
      <Flex flexFlow="row" fontSize="18px" padding="5px" gap="20px">
        <Button onClick={countUp}>Count Up</Button>
        <Flex flexFlow="row" fontSize="24px" padding="5px">
          {count}
        </Flex>
      </Flex>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px" width={"100px"}>
          Name:
        </Flex>
        <Input onChange={handleName} value={name} width={"160px"} />
        <Flex flexFlow="row" fontSize="16px" padding="5px" width={"300px"}>
          {name}
        </Flex>
      </Flex>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px" width={"100px"}>
          Address:
        </Flex>
        <Input onChange={handleAddress} value={address} width={"160px"} />
        <Flex flexFlow="row" fontSize="16px" padding="5px" width={"300px"}>
          {address}
        </Flex>
      </Flex>
    </Flex>
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
