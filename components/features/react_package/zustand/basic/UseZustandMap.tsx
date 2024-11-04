import { shallow } from "zustand/shallow"
import { useMapSet } from "@/store/zustand/useMapSet"
import { useRef, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Flex } from "@chakra-ui/react"
import { Button, InputRef } from "@/components/common/styleInputChakra"

export function UseZustandMap(): UseReturnType {
  const title = `Map`

  const jsx = <ZustandObject />
  return {
    title,
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
    </Flex>
  )
}

const Name = () => {
  const refKey = useRef<HTMLInputElement>(null)
  const refValue = useRef<HTMLInputElement>(null)

  const handleSetName = () => {
    const key = refKey?.current?.value ?? ""
    const value = refValue?.current?.value ?? ""

    if (!key || !value) return

    useMapSet.setState((prev) => ({
      nameMap: new Map<string, string>(prev.nameMap).set(key, value),
    }))
  }

  const { nameMap } = useMapSet(
    (state) => ({ nameMap: state.nameMap }),
    shallow
  )

  const refSearchKey = useRef<HTMLInputElement>(null)
  const [foundValue, setFoundValue] = useState<string>("")
  const handleSearch = () => {
    const key = refSearchKey?.current?.value ?? ""

    if (!key) return
    setFoundValue(nameMap.get(key) ?? "")
  }

  return (
    <>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Key:
        </Flex>
        <InputRef ref={refKey} />
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Value:
        </Flex>
        <InputRef ref={refValue} />
        <Button onClick={handleSetName}>Save</Button>
      </Flex>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Key:
        </Flex>
        <InputRef ref={refSearchKey} />
        <Button onClick={handleSearch}>Find</Button>
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Found: {foundValue}
        </Flex>
      </Flex>
    </>
  )
}

const code = `■ Store
type Person = {
  nameMap: Map<string, string>
  citySet: Set<string>
}
 
export const useMapSet = create<Person>()(() => ({
  nameMap: new Map(),
  citySet: new Set(),
}))
 
■ Component
const Name = () => {
  const refKey = useRef<HTMLInputElement>(null)
  const refValue = useRef<HTMLInputElement>(null)
 
  const handleSetName = () => {
    const key = refKey?.current?.value ?? ""
    const value = refValue?.current?.value ?? ""
    if (!key || !value) return

    useMapSet.setState((prev) => ({
      nameMap: new Map<string, string>(prev.nameMap).set(key, value),
    }))
  }
 
  const { nameMap } = useMapSet(
    (state) => ({ nameMap: state.nameMap }),
    shallow
  )
 
  const refSearchKey = useRef<HTMLInputElement>(null)
  const [foundValue, setFoundValue] = useState<string>("")
  const handleSearch = () => {
    const key = refSearchKey?.current?.value ?? ""
    if (!key) return
    setFoundValue(nameMap.get(key) ?? "")
  }
 
  return (
    <>
      <Flex flexFlow="row" >
        <Flex flexFlow="row" > Key: </Flex>
        <InputRef ref={refKey} />
        <Flex flexFlow="row" > Value: </Flex>
        <InputRef ref={refValue} />
        <Button onClick={handleSetName}> Save </Button>
      </Flex>
      <Flex flexFlow="row" >
        <Flex flexFlow="row" > Key: </Flex>
        <InputRef ref={refSearchKey} />
        <Button onClick={handleSearch}> Find </Button>
        <Flex flexFlow="row" > Found: {foundValue} </Flex>
      </Flex>
    </>
  )
}`
