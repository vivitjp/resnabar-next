import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/type/type"
import { usePersistLocalStorageStore } from "@/store/zustand/usePersistLocalStorageStore"
import { useRef } from "react"

export function UseZustandPersistLocalStorage(): UseReturnType {
  return {
    title: `Zustand: Persist(Json for Local Storage)`,
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandObject />,
    codeKeyType: "JSTS",
  }
}

const ZustandObject = () => {
  return (
    <Column gap="10px">
      <NameLocalStorage />
    </Column>
  )
}

const NameLocalStorage = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistLocalStorageStore(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )

  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }

  return (
    <Row padding="5px" alignItems="center" gap="10px">
      <Row fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Row>
      <Input ref={nameRef} width={"160px"} />
      <button onClick={handleClickButton} value="Save">
        Submit
      </button>
      <Row fontSize="16px" padding="5px" width={"300px"}>
        {Person.name}
      </Row>
    </Row>
  )
}

const code = `const usePersistLocalStorageStore = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      setName: (name) => set({ name }),
    }),
    {
      name: "persist-localStorage-person",   //ユニークな判別名
      storage: createJSONStorage(() => localStorage),
    }
  )
)
 
const NameLocalStorage = () => {
  const nameRef = useRef<HTMLInputElement>(null)
 
  const Person = usePersistLocalStorageStore(
    (state) => ({ name: state.name, setName: state.setName }),
    shallow
  )
 
  const handleClickButton = () => {
    Person.setName(nameRef.current?.value ?? "")
  }
 
  return (
    <Row>
      <Row> Name: </Row>
      <Input ref={nameRef} />
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Row> {Person.name} </Row>
    </Row>
  )
}
 
//■ Browser Local Storage
persist-localStorage-person:"{"state":{"name":"John","age":35,"active":false},"version":0}"`
