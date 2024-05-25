import { UseReturnType } from "@/components/type/type"
import { Column, Div, DivPre, Row } from "@/components/common/styleDiv"
import { useState } from "react"

import { Button, Input } from "@/components/common/styleInput"
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  clearDeepOjectWrapped,
  selectDeepObjectWrapped,
  selectInitialStateWrapped,
  setDeepObjectWrapped,
  setDeepObjectExceptName,
} from "@/store/reduxToolkit/slices/deepObjectWrappedSlice"

export function UseDeepObjectWrapped(): UseReturnType {
  const title = `Redux Toolkit: Shallow & Deep(一括処理)`

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
const code = `■ 型定義ターゲットデータ
export interface DeepObjectState {
  address: {
    pref: string
    city: string
  }
  name: string
  age: number
}
 
■ ターゲットデータ初期値
const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}
 
//タイプ定義で、属性 data を入れてターゲットデータ深度を一段下げる
■ 型定義: Slice用
interface DeepObjectStateWrapped {
  data: DeepObjectState  <--- 属性 data *名前は任意
}
 
■ 初期値: Slice用
const initOjectWrapped: DeepObjectStateWrapped = {
  data: initOject,
}
 
export const deepObjectSliceWrapped = createSlice({
  name: "wrappedDeepObject",
  initialState: initOjectWrapped,
  reducers: {

    //■ 1.入力値をGlobalStateに保存
    setDeepObjectWrapped: (state, action: PayloadAction<DeepObjectState>) => {
      state.data = structuredClone(action.payload)
    },
 
    //■ 2.初期値代入(一括処理)
    clearDeepOjectWrapped: (state) => {
      state.data = structuredClone(initOject)
    },
 
    //■ 3.初期値部分代入
    setDeepObjectExceptName: (state) => {
      const { name, ...elses } = initOject // 名前以外
      state.data = { ...state.data, ...structuredClone(elses) }
    },
  },
})`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const deepObject = useAppSelector(selectDeepObjectWrapped)
  const initialState = useAppSelector(selectInitialStateWrapped)
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
            value={localPref}
            onChange={(e) => {
              setLocalPref(() => e.target.value)
            }}
          />
          City:
          <Input
            value={localCity}
            onChange={(e) => {
              setLocalCity(() => e.target.value)
            }}
          />
          Name:
          <Input
            value={localName}
            onChange={(e) => {
              setLocalName(() => e.target.value)
            }}
          />
          Age:
          <Input
            value={localAge}
            onChange={(e) => {
              setLocalAge(() => +e.target.value)
            }}
          />
        </Row>
        <Column padding="10px">
          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() =>
                dispatch(
                  setDeepObjectWrapped({
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
              1.入力値をGlobalStateに保存
            </Button>
            <Div>state.data = structuredClone(action.payload)</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(clearDeepOjectWrapped())}
            >
              2.初期値代入(一括処理)
            </Button>
            <Div>state.data = structuredClone(initOject)</Div>
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="350px"
              onClick={() => dispatch(setDeepObjectExceptName())}
            >
              3.初期値部分代入
            </Button>
            <Div>
              const &#123; name, ...elses &#125; = initOject
              <br />
              state.data = &#123; ...state.data, ...structuredClone(elses)
              &#125;
            </Div>
          </Row>
        </Column>
      </Column>
      <Column width="200px" marginRight="10px">
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
      </Column>
    </Row>
  )
}
