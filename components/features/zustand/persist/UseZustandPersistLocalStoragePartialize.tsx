import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { usePersistLocalStoragePartializeStore } from "@/zustandStore/usePersistLocalStorageStore"
import { useRef } from "react"

export function UseZustandPersistLocalStoragePartialize(): UseReturnType {
  return {
    title: `Zustand: Persist(Json for Local Storage, Partialize)`,
    subTitle: "age 以外を保存する Store",
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

  const Person = usePersistLocalStoragePartializeStore(
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

const code = `const UseZustandPersistLocalStoragePartialize = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      age: 35,
      active: false,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setActive: (flag) => set({ active: flag }),
    }),
    {
      name: "persist-localStorage-partialize-person",   //ユニークな判別名
      storage: createJSONStorage(() => localStorage),
      //age以外を保存
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["age"].includes(key))
        ),
      //ageのみを保存
      // partialize: (state) => ({ age: state.age }),
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
 
//■ Browser Local Storage(ageなし)
persist-localStorage-partialize-person:"{"state":{"name":"ZYX","active":false},"version":0}"`
