import { shallow } from "zustand/shallow"

import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/type/type"
import { usePersistLocalStoragePartializeStore } from "@/store/zustand/usePersistLocalStorageStore"
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
    <Flex flexFlow="column" gap="10px">
      <NameLocalStorage />
    </Flex>
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
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"100px"}>
        Name:
      </Flex>
      <Input ref={nameRef} width={"160px"} />
      <button onClick={handleClickButton} value="Save">
        Submit
      </button>
      <Flex flexFlow="row" fontSize="16px" padding="5px" width={"300px"}>
        {Person.name}
      </Flex>
    </Flex>
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
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Name: </Flex>
      <Input ref={nameRef} />
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Flex flexFlow="row" > {Person.name} </Flex>
    </Flex>
  )
}
 
//■ Browser Local Storage(ageなし)
persist-localStorage-partialize-person:"{"state":{"name":"ZYX","active":false},"version":0}"`
