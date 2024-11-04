import { shallow } from "zustand/shallow"

import { Flex } from "@chakra-ui/react"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/type/type"
import { usePersistIndexedDBStore } from "@/store/zustand/usePersistIndexedDBStore"
import { useRef } from "react"

export function UseZustandPersistIndexDB(): UseReturnType {
  return {
    title: `Zustand: Persist(Json for IndexedDB)`,
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
      <NameIndexDB />
    </Flex>
  )
}

const NameIndexDB = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistIndexedDBStore(
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

const code = `■ yarn add idb-keyval
import { get, set, del } from "idb-keyval" //Package
 
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name)
  },
}
 
export const usePersistIndexedDBStore = create<PersistPerson>()(
  persist(
    (set) => ({
      name: "John",
      setName: (name) => set({ name }),
    }),
    {
      name: "persist-indexDB-person", //ユニークな判別名
      storage: createJSONStorage(() => storage),
    }
  )
)
 
const NameIndexDB = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  const Person = usePersistIndexedDBStore(
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
 
//■ Browser IndexedDB
db: keyval-store
persist-indexDB-person:""{"state":{"name":"John","age":35,"active":false},"version":0}""`
