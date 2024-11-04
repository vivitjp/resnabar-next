import { shallow } from "zustand/shallow"

import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
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
    <Flex flexFlow="column" gap="10px">
      <NameLocalStorage />
    </Flex>
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
    <Flex flexFlow="row" >
      <Flex flexFlow="row" > Name: </Flex>
      <Input ref={nameRef} />
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Flex flexFlow="row" > {Person.name} </Flex>
    </Flex>
  )
}
 
//■ Browser Local Storage
persist-localStorage-person:"{"state":{"name":"John","age":35,"active":false},"version":0}"`
