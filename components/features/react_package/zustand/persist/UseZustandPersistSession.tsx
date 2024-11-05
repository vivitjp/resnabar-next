import { shallow } from "zustand/shallow"

import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInputChakra"
import { UseReturnType } from "@/components/type/type"
import { usePersistSession } from "@/store/zustand/usePersistSession"
import { useRef } from "react"

export function UseZustandPersistSession(): UseReturnType {
  return {
    title: `Zustand: Persist(Session)`,
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
      <NameSession />
    </Flex>
  )
}

const NameSession = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistSession(
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

const code = `const usePersistSession = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      setName: (name) => set({ name }),
    }),
    {
      name: "persist-session-person",   //ユニークな判別名
      getStorage: () => sessionStorage, //<-- getStorage:Deprecated
    }
  )
)
 
const NameSession = () => {
  const nameRef = useRef<HTMLInputElement>(null)
 
  const Person = usePersistSession(
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
 
//■ Browser Session
persist-session-person:"{"state":{"name":"John","age":35,"active":false},"version":0}"
`
