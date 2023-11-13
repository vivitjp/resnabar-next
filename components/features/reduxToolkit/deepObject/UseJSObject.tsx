import { UseReturnType } from "@/components/type/type"
import { Column, Div, DivPre, Row } from "@/components/common/styleDiv"
import { useState } from "react"
import { Button, Input } from "@/components/common/styleInput"
import { DeepObjectState } from "@/store/reduxToolkit/slices/deepObjectSlice"

export function UseJSObject(): UseReturnType {
  const title = `JavaScript の Object 参照`

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
const code = `let localObject: DeepObjectState = initOject
const [localObjectState, setLocalObjectState] = useState<DeepObjectState>()
 
const [localPref, setLocalPref] = useState<string>("神奈川")
const [localCity, setLocalCity] = useState<string>("横浜")
const [localName, setLocalName] = useState<string>("五十嵐")
const [localAge, setLocalAge] = useState<number>(18)
 
const setInputToObjectHandler = () => {
  localObject = {
    address: {
      pref: localPref,
      city: localCity,
    },
    name: localName,
    age: localAge,
  }
  setLocalObjectState({...localObject})
}
 
const clearHandler = () => {
  localObject.address = initOject.address
  localObject.name = initOject.name
  localObject.age = initOject.age
  setLocalObjectState({...localObject})
}
  
const setInitAddressPrefHandler = () => {
  localObject.address.pref = "北海道"
  setLocalObjectState({ ...localObject })
}`

const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}

const ParentCompo = () => {
  let localObject: DeepObjectState = initOject

  const [localObjectState, setLocalObjectState] =
    useState<DeepObjectState>(initOject)

  const [localPref, setLocalPref] = useState<string>("神奈川")
  const [localCity, setLocalCity] = useState<string>("横浜")
  const [localName, setLocalName] = useState<string>("五十嵐")
  const [localAge, setLocalAge] = useState<number>(18)

  const setInputToObjectHandler = () => {
    localObject = {
      address: {
        pref: localPref,
        city: localCity,
      },
      name: localName,
      age: localAge,
    }
    setLocalObjectState({ ...localObject })
  }

  const clearHandler = () => {
    localObject.address = initOject.address
    localObject.name = initOject.name
    localObject.age = initOject.age
    setLocalObjectState({ ...localObject })
  }

  const setInitAddressPrefHandler = () => {
    localObject.address.pref = "北海道"
    setLocalObjectState({ ...localObject })
  }

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
            <Button width="200px" onClick={setInputToObjectHandler}>
              入力値を保存
            </Button>
            <Div>ローカル値をObjectに保存</Div>
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Button textAlign="left" width="200px" onClick={clearHandler}>
              初期化(各個+参照)
            </Button>
            <Div>localObject.address = initOject.address 参照代入</Div>
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="200px"
              onClick={setInitAddressPrefHandler}
            >
              initObjectの上書き
            </Button>
            <Div>localObject.address.pref = &apos;北海道&apos;</Div>
          </Row>
        </Column>
      </Column>

      <Column width="200px" marginRight="10px">
        初期値(initOject)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(initOject, undefined, 2)}
        </DivPre>
        State(localObject)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(localObjectState, undefined, 2)}
        </DivPre>
      </Column>
    </Row>
  )
}
