import { shallow } from "zustand/shallow"
import { Flex } from "@chakra-ui/react"
import { Button, InputRef } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { useMapSet } from "@/store/zustand/useMapSet"
import { useRef, useState } from "react"

export function UseZustandSet(): UseReturnType {
  const title = `Set`

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
      <City />
    </Flex>
  )
}

const City = () => {
  const refValue = useRef<HTMLInputElement>(null)

  const handleSetCity = () => {
    const value = refValue?.current?.value ?? ""

    if (!value) return

    useMapSet.setState((prev) => ({
      citySet: new Set<string>(prev.citySet).add(value),
    }))
  }

  const { citySet } = useMapSet(
    (state) => ({ citySet: state.citySet }),
    shallow
  )

  const refSearchKey = useRef<HTMLInputElement>(null)
  const [foundValue, setFoundValue] = useState<boolean>(false)
  const handleSearch = () => {
    const key = refSearchKey?.current?.value ?? ""

    if (!key) return
    setFoundValue(citySet.has(key) ?? false)
  }

  return (
    <>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Value:
        </Flex>
        <InputRef ref={refValue} />
        <Button onClick={handleSetCity}>Save</Button>
      </Flex>
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Key:
        </Flex>
        <InputRef ref={refSearchKey} />
        <Button onClick={handleSearch}>Find</Button>
        <Flex flexFlow="row" fontSize="16px" padding="5px">
          Found(boolean): {foundValue ? "Yes" : "No"}
        </Flex>
      </Flex>
    </>
  )
}

const code = `■ Store
type Person = {
  citySet: Map<string, string>
  citySet: Set<string>
}
 
export const useMapSet = create<Person>()(() => ({
  citySet: new Map(),
  citySet: new Set(),
}))
 
■ Component
const City = () => {
  const refKey = useRef<HTMLInputElement>(null)
  const refValue = useRef<HTMLInputElement>(null)
 
  const handleSetCity = () => {
    const key = refKey?.current?.value ?? ""
    const value = refValue?.current?.value ?? ""
    if (!key || !value) return

    useMapSet.setState((prev) => ({
      citySet: new Map<string, string>(prev.citySet).set(key, value),
    }))
  }
 
  const { citySet } = useMapSet(
    (state) => ({ citySet: state.citySet }),
    shallow
  )
 
  const refSearchKey = useRef<HTMLInputElement>(null)
  const [foundValue, setFoundValue] = useState<string>("")
  const handleSearch = () => {
    const key = refSearchKey?.current?.value ?? ""
    if (!key) return
    setFoundValue(citySet.get(key) ?? "")
  }
 
  return (
    <>
      <Flex flexFlow="row" >
        <Flex flexFlow="row" > Key: </Flex>
        <InputRef ref={refKey} />
        <Flex flexFlow="row" > Value: </Flex>
        <InputRef ref={refValue} />
        <Button onClick={handleSetCity}> Save </Button>
      </Flex>
      <Flex flexFlow="row" >
        <Flex flexFlow="row" > Key: </Flex>
        <InputRef ref={refSearchKey} />
        <Button onClick={handleSearch}> Find </Button>
        <Flex flexFlow="row" > Found: {foundValue ? "Yes" : "No"} </Flex>
      </Flex>
    </>
  )
}`
