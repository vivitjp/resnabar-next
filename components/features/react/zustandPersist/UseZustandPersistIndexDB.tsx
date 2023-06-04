import { shallow } from "zustand/shallow"

import { Column, Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { UseReturnType } from "@/components/common/type/type"
import { usePersistIndexedDBStore } from "@/store/usePersistIndexedDBStore"
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
    <Column gap="10px">
      <NameIndexDB />
    </Column>
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
    <Row>
      <Row> Name: </Row>
      <Input ref={nameRef} />
      <button onClick={handleClickButton} value="Save"> Submit </button>
      <Row> {Person.name} </Row>
    </Row>
  )
}
 
//■ Browser IndexedDB
db: keyval-store
persist-indexDB-person:""{"state":{"name":"John","age":35,"active":false},"version":0}""`
