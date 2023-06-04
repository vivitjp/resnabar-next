import { shallow } from "zustand/shallow"
import { Column, Row } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { useMapSet } from "@/store/useMapSet"
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
    <Column gap="10px">
      <City />
    </Column>
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
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px">
          Value:
        </Row>
        <Input ref={refValue} />
        <Button onClick={handleSetCity}>Save</Button>
      </Row>
      <Row padding="5px" alignItems="center" gap="10px">
        <Row fontSize="16px" padding="5px">
          Key:
        </Row>
        <Input ref={refSearchKey} />
        <Button onClick={handleSearch}>Find</Button>
        <Row fontSize="16px" padding="5px">
          Found(boolean): {foundValue ? "Yes" : "No"}
        </Row>
      </Row>
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
      <Row>
        <Row> Key: </Row>
        <Input ref={refKey} />
        <Row> Value: </Row>
        <Input ref={refValue} />
        <Button onClick={handleSetCity}> Save </Button>
      </Row>
      <Row>
        <Row> Key: </Row>
        <Input ref={refSearchKey} />
        <Button onClick={handleSearch}> Find </Button>
        <Row> Found: {foundValue ? "Yes" : "No"} </Row>
      </Row>
    </>
  )
}`
