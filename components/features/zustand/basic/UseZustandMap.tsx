import { shallow } from "zustand/shallow"
import { useMapSet } from "@/zustandStore/useMapSet"
import { useRef, useState } from "react"
import { UseReturnType } from "@/components/common/type/type"
import { Column, Row } from "@/components/common/styleDiv"
import { Input, Button } from "@/components/common/styleInput"

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
    <Column gap="10px">
      <Name />
    </Column>
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
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px">
          Key:
        </Row>
        <Input ref={refKey} />
        <Row fontSize="16px" padding="5px">
          Value:
        </Row>
        <Input ref={refValue} />
        <Button onClick={handleSetName}>Save</Button>
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px">
          Key:
        </Row>
        <Input ref={refSearchKey} />
        <Button onClick={handleSearch}>Find</Button>
        <Row fontSize="16px" padding="5px">
          Found: {foundValue}
        </Row>
      </Row>
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
      <Row>
        <Row> Key: </Row>
        <Input ref={refKey} />
        <Row> Value: </Row>
        <Input ref={refValue} />
        <Button onClick={handleSetName}> Save </Button>
      </Row>
      <Row>
        <Row> Key: </Row>
        <Input ref={refSearchKey} />
        <Button onClick={handleSearch}> Find </Button>
        <Row> Found: {foundValue} </Row>
      </Row>
    </>
  )
}`
