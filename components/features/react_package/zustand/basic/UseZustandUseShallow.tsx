import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { usePerson1 } from "@/store/zustand/storeBasic"
import { useShallow } from "zustand/react/shallow"

export function UseZustandUseShallow(): UseReturnType {
  const title = `⭕ useShallow 使用(shallowはdeprecated)`
  const subTitle = `deprecated になった shallow の代わりに同機能を持つ useShallow フックを使用`

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
    useShallow((state) => ({ name: state.name, setName: state.setName }))
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
  const address = usePerson1(useShallow((state) => state.address))
  const setAddress = usePerson1(useShallow((state) => state.setAddress))

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

const code = `import { useShallow } from "zustand/react/shallow"
 
const ZustandObject = () => {
  return (
    <>
      <Name />
      <Address />
    </>
  )
}
 
const Name = () => {
  const { name, setName } = usePerson1(
    useShallow((state) => ({ name: state.name, setName: state.setName }))
  )
 
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
 
  return (
    <Flex>
      <Flex> Name: </Flex>
      <Input onChange={handleName} value={name} />
      <Flex> {name} </Flex>
    </Flex>
  )
}
 
const Address = () => {
  const address = usePerson1(useShallow((state) => state.address))
  const setAddress = usePerson1(useShallow((state) => state.setAddress))

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }

  return (
    <Flex>
      <Flex> Address: </Flex>
      <Input onChange={() => setAddress(...)} value={address} />
      <Flex> {address} </Flex>
    </Flex>
  )
}`
