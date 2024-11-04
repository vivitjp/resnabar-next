import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { useCount3 } from "@/store/zustand/storeBasic"

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
    <Flex flexFlow="column" gap="10px">
      <Name />
      <Address />
    </Flex>
  )
}

const Name = () => {
  const { name, setName } = useCount3()

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
  const address = useCount3((state) => state.address)
  const setAddress = useCount3((state) => state.setAddress)

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
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Name: </Flex>
      <Input onChange={() => setName(...)} value={name}/>
      <Flex flexFlow="row" > {name} </Flex>
    </Flex>
  )
}
 
const Address = () => {
  const address = useCount((state) => state.address)      //個別取り出し
  const setAddress = useCount((state) => state.setAddress)//個別取り出し
 
  return (
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Address: </Flex>
      <Input onChange={() => setAddress(...)} value={address} />
      <Flex flexFlow="row" > {address} </Flex>
    </Flex>
  )
}`
