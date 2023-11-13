import { UseReturnType } from "@/components/type/type"
import { Column, Div, DivPre, Row } from "@/components/common/styleDiv"
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

export function UseReduxDeepObject(): UseReturnType {
  const title = `Redux Toolkit: 様々な方法によるStateの値の体入と初期化`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
    codeFold: false,
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
 
reducers: {
  ■ 各個に値を与える
  clearDeepOjectEach: (state) => {
    //Deep Objectに対してはSpread構文使用
    state.address = { ...initOject.address } //浅い場合
    or state.address = structuredClone(initOject.address) //深い場合
    state.name = initOject.name
    state.age = initOject.age
  },
 
  ■ 各個に値を与える
  clearDeepOjectAddressRef: (state) => {
    //参照を保存(initOjectのaddressの参照)しても初期値は不変なのでOK
    state.address = initOject.address //参照で上書き
    state.name = initOject.name
    state.age = initOject.age
  },
  
  ■ state自体をSpread構文で上書き(NG)
  clearDeepOjectAll: (state) => {
    state = { ...initOject }
  },
  
  ■ state自体をstructuredClone()で生成したクローンで上書き(NG)
  //https://developer.mozilla.org/ja/docs/Web/API/structuredClone
  clearDeepOjectStruct: (state) => {
    state = structuredClone(initOject)
  },
 
  ■ state の参照されている深い値を更新
  setDeepOjectAddressPref: (state) => {
    state.address.pref = "北海道"
  },
 
  ■ 引数を保存する
  setDeepObject: (state, action: PayloadAction<DeepObjectState>) => {
    state.address.pref = action.payload.address?.pref ?? ""
    state.address.city = action.payload.address?.city ?? ""
    state.name = action.payload.name
    state.age = action.payload.age
  },
}`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const deepObject = useAppSelector(selectDeepObject)
  const initialState = useAppSelector(selectInitialState)
  const [localPref, setLocalPref] = useState<string>("神奈川")
  const [localCity, setLocalCity] = useState<string>("横浜")
  const [localName, setLocalName] = useState<string>("五十嵐")
  const [localAge, setLocalAge] = useState<number>(18)

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="fit-width" padding="10px">
        <Row padding="10px" gap="10px" justifyContent="space-between">
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
        </Row>
        <Column padding="10px">
          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              width="200px"
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
              入力値を保存
            </Button>
            <Div>ローカル値をG-Stateに保存</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              width="200px"
              onClick={() => dispatch(clearDeepOjectEach())}
            >
              初期化(各個)
            </Button>
            <Div>一般的な値の代入・初期化</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="200px"
              onClick={() => dispatch(clearDeepOjectAddressRef())}
            >
              初期化(各個値+参照代入)
            </Button>
            <Div>state.address = initOject.address //参照代入</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="200px"
              onClick={() => dispatch(clearDeepOjectAll())}
            >
              初期化(Spread構文)
            </Button>
            <Div>state自体の上書きはNG:値が保存されない</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              width="200px"
              onClick={() => dispatch(clearDeepOjectStruct())}
            >
              初期化(structuredClone)
            </Button>
            <Div>state自体の上書きはNG:値が保存されない</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="200px"
              onClick={() => dispatch(setDeepOjectAddressPref())}
            >
              state更新
            </Button>
            <Div>
              state.address.pref = &apos;北海道&apos;
              <br />
              参照先に代入したのに、初期値に変化なし!!
            </Div>
          </Row>
        </Column>
      </Column>
      <Column width="200px" marginRight="10px">
        初期値(initialState)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(initialState, undefined, 2)}
        </DivPre>
        State(ReduxGlobalState)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(deepObject, undefined, 2)}
        </DivPre>
      </Column>
    </Row>
  )
}
