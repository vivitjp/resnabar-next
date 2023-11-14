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
    codeKeyType: "JSTS",
    codeFold: true,
  }
}
const code = `コンポーネント外でlet変数宣言
let localObject: DeepObjectState
 
const Compo=()=>{
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
  }
  
  const clearHandler = () => {
    localObject.address = initOject.address <--- 参照を代入
    localObject.name = initOject.name
    localObject.age = initOject.age
  }
    
  const clearHandlerBySpread = () => {
    localObject = { ...initOject } <--- Spread構文は deep な属性を参照で渡す
  }
  
  const clearHandlerByStructuredClone = () => {
    localObject = structuredClone(initOject) <--- 深い底まで「構造と値」をクローン
  }
  
  const setInitAddressPrefHandler = () => {
    localObject.address.pref = "北海道" <--- ローカルの深い変数に代入
  }
}`

const initOject: DeepObjectState = {
  address: {
    pref: "Tokyo",
    city: "Shibuya",
  },
  name: "Steve",
  age: 20,
}

let localObject: DeepObjectState = {
  address: {
    pref: "",
    city: "",
  },
  name: "",
  age: 0,
}

const ParentCompo = () => {
  const [trigger, setTrigger] = useState<boolean>(false)

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
    setTrigger((prev) => !prev)
  }

  const clearHandler = () => {
    localObject.address = initOject.address
    localObject.name = initOject.name
    localObject.age = initOject.age
    setTrigger((prev) => !prev)
  }

  const clearHandlerBySpread = () => {
    localObject = { ...initOject }
    setTrigger((prev) => !prev)
  }

  const clearHandlerByStructuredClone = () => {
    localObject = structuredClone(initOject)
    setTrigger((prev) => !prev)
  }

  const setInitAddressPrefHandler = () => {
    localObject.address.pref = "北海道"
    setTrigger((prev) => !prev)
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
            <Button
              textAlign="left"
              width="400px"
              onClick={setInputToObjectHandler}
            >
              1.ローカルObjectへ入力値を代入
            </Button>
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Button textAlign="left" width="400px" onClick={clearHandler}>
              2A.ローカルObjectへ初期値Objectの「値と参照」を代入
            </Button>
            <Div>localObject.address = initOject.address(参照)</Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="400px"
              onClick={clearHandlerBySpread}
            >
              2B.ローカルObjectへ初期値Objectを「Spread構文」で代入
            </Button>
            <Div>localObject = &#123; ...initOject &#125; </Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="400px"
              onClick={clearHandlerByStructuredClone}
            >
              2C.ローカルObjectへ初期値Objectを「structuredClone」で代入
            </Button>
            <Div>localObject = structuredClone(initOject) </Div>
          </Row>

          <Row padding="5px" gap="10px" alignItems="center">
            <Button
              textAlign="left"
              width="400px"
              onClick={setInitAddressPrefHandler}
            >
              3.ローカルObjectの深い変数を「値」で上書き
            </Button>
            <Div>
              localObject.address.pref = &apos;北海道&apos;
              <br />
              初期値objectも同時に変わる様子を観察
            </Div>
          </Row>
        </Column>
      </Column>

      <Column width="200px" marginRight="10px">
        初期値Object(initOject)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(initOject, undefined, 2)}
        </DivPre>
        ローカルObject(localObject)
        <DivPre border={"1px solid #aaa"} padding="10px" margin="10px">
          {JSON.stringify(localObject, undefined, 2)}
        </DivPre>
      </Column>
    </Row>
  )
}
