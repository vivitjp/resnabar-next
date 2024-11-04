import { UseReturnType } from "@/components/type/type"
import { Div, DivPre } from "@/components/common/styleDiv"
import { useState } from "react"

import { Button, Input } from "@/components/common/styleInput"
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  clearDeepOjectAddressRef,
  clearDeepOjectAll,
  clearDeepOjectEach,
  clearDeepOjectStruct,
  selectDeepObject,
  selectInitialState,
  setDeepObject,
  setDeepOjectAddressPref,
} from "@/store/reduxToolkit/slices/deepObjectSlice"
import { Flex } from "@chakra-ui/react"

export function UseDeepObject(): UseReturnType {
  const title = `Redux Toolkit: Shallow & Deep`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}
 
export const deepObjectSlice = createSlice({
  name: "deepObject",
  initialState: initOject,
  reducers: {

    //■ 1.入力値を個別に保存
    setDeepObject: (state, action: PayloadAction<DeepObjectState>) => {
      state.address.pref = action.payload.address?.pref ?? ""
      state.address.city = action.payload.address?.city ?? ""
      state.name = action.payload.name
      state.age = action.payload.age
    },
    
    //■ 2.初期値を値/参照(spread構文)で代入
    clearDeepOjectEach: (state) => {
      state.address = { ...initOject.address }   //Shallow(1段のみの浅さ)はOK
      state.name = initOject.name
      state.age = initOject.age
    },
    
    //■ 3.初期値を値で代入/深いobjectには参照で代入
    clearDeepOjectAddressRef: (state) => {
      // ★参照を保存(initOjectのaddressの参照)しても初期値は不変なのでOKなのか？
      state.address = initOject.address //★ 参照で上書きが許される!!
      state.name = initOject.name
      state.age = initOject.age
    },
    
    //■ ⛔ state 自体をobject(Spread構文)で初期化
    clearDeepOjectAll: (state) => {
      state = { ...initOject } // state自体は immutableなので上書きされない
    },
    
    //■ ⛔ state 自体をobject(structuredClone)で初期化
    clearDeepOjectStruct: (state) => {
      state = structuredClone(initOject) // state自体は immutableなので上書きされない
    },
  
    //■ 4.objectの深い属性に値代入
    setDeepOjectAddressPref: (state) => {
      state.address.pref = "北海道"
    },
  }
})`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const deepObject = useAppSelector(selectDeepObject)
  const initialState = useAppSelector(selectInitialState)
  const [localPref, setLocalPref] = useState<string>("神奈川")
  const [localCity, setLocalCity] = useState<string>("横浜")
  const [localName, setLocalName] = useState<string>("五十嵐")
  const [localAge, setLocalAge] = useState<number>(18)

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="fit-width" padding="10px">
        <Flex
          flexFlow="row"
          padding="10px"
          gap="10px"
          justifyContent="space-between"
        >
          pref:
          <Input
            aria-label="Pref"
            value={localPref}
            onChange={(e) => {
              setLocalPref(() => e.target.value)
            }}
          />
          City:
          <Input
            aria-label="City"
            value={localCity}
            onChange={(e) => {
              setLocalCity(() => e.target.value)
            }}
          />
          Name:
          <Input
            aria-label="Name"
            value={localName}
            onChange={(e) => {
              setLocalName(() => e.target.value)
            }}
          />
          Age:
          <Input
            aria-label="Age"
            value={localAge}
            onChange={(e) => {
              setLocalAge(() => +e.target.value)
            }}
          />
        </Flex>
        <Flex flexFlow="column" padding="10px">
          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() =>
                dispatch(
                  setDeepObject({
                    address: {
                      pref: localPref,
                      city: localCity,
                    },
                    name: localName,
                    age: localAge,
                  })
                )
              }
            >
              1.入力値を個別に保存
            </Button>
            <Div>
              state.address.pref = action.payload.address.pref
              <br />
              state.address.city = action.payload.address.city
            </Div>
          </Flex>

          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(clearDeepOjectEach())}
            >
              2.初期値を値/参照(structuredClone/spread構文)で代入
            </Button>
            <Div>state.address = &#123; ...initOject.address &#125;</Div>
          </Flex>

          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(clearDeepOjectAddressRef())}
            >
              3.初期値を値で代入/深いobjectには参照で代入
            </Button>
            <Div>state.address = initOject.address //参照</Div>
          </Flex>

          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(clearDeepOjectAll())}
            >
              ⛔ state 自体をobject(Spread構文)で初期化
            </Button>
            <Div>
              state = &#123; ...initOject &#125; //上書🆖:
              stateトップはimmutable
            </Div>
          </Flex>

          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(clearDeepOjectStruct())}
            >
              ⛔ state 自体をobject(structuredClone)で初期化
            </Button>
            <Div>
              state = structuredClone(initOject) //上書🆖:
              stateトップはimmutable
            </Div>
          </Flex>

          <Flex flexFlow="row" padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(setDeepOjectAddressPref())}
            >
              4.objectの深い属性に値代入
            </Button>
            <Div>
              state.address.pref = &apos;北海道&apos;
              <br />
              🧡 参照先に代入したが初期objectに変化なし!! 👉 Reduxの特質
            </Div>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexFlow="column" width="200px" marginRight="10px">
        Global初期値(initOject)
        <DivPre
          border={"1px solid #aaa"}
          padding="10px"
          margin="10px"
          fontSize="14px"
        >
          {JSON.stringify(initialState, undefined, 2)}
        </DivPre>
        GlobalState(state)
        <DivPre
          border={"1px solid #aaa"}
          padding="10px"
          margin="10px"
          fontSize="14px"
        >
          {JSON.stringify(deepObject, undefined, 2)}
        </DivPre>
      </Flex>
    </Flex>
  )
}
