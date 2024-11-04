import { shallow } from "zustand/shallow"

import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { usePerson1 } from "@/store/zustand/storeBasic"

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
    <Flex flexFlow="column" gap="10px">
      <Name />
      <Address />
    </Flex>
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
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Flex>
      <Input onChange={handleName} value={name} width={"160px"} />
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"300px"}>
        {name}
      </Flex>
    </Flex>
  )
}

const Address = () => {
  const address = usePerson1((state) => state.address)
  const setAddress = usePerson1((state) => state.setAddress)

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"100px"}>
        Address:
      </Flex>
      <Input onChange={handleAddress} value={address} width={"160px"} />
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"300px"}>
        {address}
      </Flex>
    </Flex>
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
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Name: </Flex>
      <Input onChange={() => setName(...)} value={name}/>
      <Flex flexFlow="row" > {name} </Flex>
    </Flex>
  )
}
 
const Address = () => {
  //個別取り出し
  const address = usePerson((state) => state.address)
  const setAddress = usePerson((state) => state.setAddress)
 
  return (
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Address: </Flex>
      <Input onChange={() => setAddress(...)} value={address} />
      <Flex flexFlow="row" > {address} </Flex>
    </Flex>
  )
}`
