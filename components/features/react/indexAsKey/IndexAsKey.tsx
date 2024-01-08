import React, { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Div } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"

export function UseIndexAsKey(): UseReturnType {
  const title = `Index for Key`
  const subTitle = `データオブジェクトを表示する際に、配列のindexをユニークKeyとして使用すると起こるReactの再描画時の想定外の挙動`

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
    codeFold: true,
  }
}

type DataType = { id: number; name: string; color?: string }

const cities: DataType[] = [
  { id: 1, name: "tokyo" },
  { id: 2, name: "osaka" },
  { id: 3, name: "kobe" },
  { id: 4, name: "nagoya" },
]
const mores: DataType[] = [
  { id: 10, name: "sendai" },
  { id: 11, name: "fukuoka" },
  { id: 12, name: "sapporo" },
  { id: 13, name: "yokohama" },
  { id: 14, name: "nagasaki" },
  { id: 15, name: "akita" },
  { id: 16, name: "matsumoto" },
  { id: 17, name: "tokushima" },
  { id: 18, name: "saga" },
  { id: 19, name: "maebashi" },
]

const ParentCompo = () => {
  const [counter, setCounter] = useState(mores.length)
  const [data, setData] = useState<DataType[]>(
    cities.map((city) => ({ ...city, color: "gray" }))
  )

  const KEY_INDEX = "a-key-index-"
  const KEY_ID = "a-key-id-"

  const handleSetInitialValues = () => {
    for (let i = 0; i < cities.length; i++) {
      const id1 = document.getElementById(`${KEY_INDEX}${i}`)
      if (id1) id1.setAttribute("value", String.fromCharCode(65 + i))
      const id2 = document.getElementById(`${KEY_ID}${i}`)
      if (id2) id2.setAttribute("value", String.fromCharCode(65 + i))
    }
  }

  const handleAddItems = () => {
    if (!counter) return
    setData((prev) => [{ ...mores[counter - 1], color: "Crimson" }, ...prev])
    setCounter((prev) => prev - 1)
  }

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="100px" gap="4px">
        <Button onClick={handleSetInitialValues}>初期値設定</Button>
        <Button onClick={handleAddItems}>アイテム追加</Button>
      </Column>
      <Column width="300px" gap="5px" padding="5px">
        <Div fontSize="20px" color="gray" fontWeight="700">
          Key=Index
        </Div>
        <Column width="100%" alignItems="flex-start" gap="5px">
          {data.map((city, index) => (
            <Row
              key={index}
              width="100%"
              fontSize="20px"
              color={city.color}
              justifyContent="space-between"
            >
              <Div>{city.name}</Div>
              <Input fontSize="12px" id={`${KEY_INDEX}${index}`} />
            </Row>
          ))}
        </Column>
      </Column>
      <Column width="300px" gap="5px" padding="5px">
        <Div fontSize="20px" color="gray" fontWeight="700">
          unique_id
        </Div>
        <Column width="100%" alignItems="flex-start" gap="5px">
          {data.map((city, index) => (
            <Row
              key={city.id}
              width="100%"
              fontSize="20px"
              color={city.color}
              justifyContent="space-between"
            >
              <Div>{city.name}</Div>
              <Input fontSize="12px" id={`${KEY_ID}${index}`} />
            </Row>
          ))}
        </Column>
      </Column>
    </Row>
  )
}

const code = `type DataType = { id: number; name: string; color?: string }
 
const cities: DataType[] = [
  { id: 1, name: "tokyo" },
  { id: 2, name: "osaka" },
  { id: 3, name: "kobe" },
  { id: 4, name: "nagoya" },
]
 
const mores: DataType[] = [
  { id: 10, name: "sendai" },
  { id: 11, name: "fukuoka" },
  { id: 12, name: "sapporo" },
  { id: 13, name: "yokohama" },
  { id: 14, name: "nagasaki" },
  { id: 15, name: "akita" },
  { id: 16, name: "matsumoto" },
  { id: 17, name: "tokushima" },
  { id: 18, name: "saga" },
  { id: 19, name: "maebashi" },
]
 
const ParentCompo = () => {
  const [counter, setCounter] = useState(mores.length)
  const [data, setData] = useState<DataType[]>(
    cities.map((city) => ({ ...city, color: "gray" }))
  )
 
  const KEY_INDEX = "a-key-index-"
  const KEY_ID = "a-key-id-"
 
  const handleSetInitialValues = () => { 省略 }
 
  const handleAddItems = () => {
    if (!counter) return
    setData((prev) => [{ ...mores[counter - 1], color: "Crimson" }, ...prev])
    setCounter((prev) => prev - 1)
  }
 
  return (
    <Row>
      <Column>
        <Button onClick={handleSetInitialValues}>初期値設定</Button>
        <Button onClick={handleAddItems}>アイテム追加</Button>
      </Column>
      <Column>
        <Div> Key=Index </Div>
        <Column>
          {data.map((city, index) => (
            <Row key={index}> 🚫key=index
              <Div>{city.name}</Div>
              <Input id={\`\${KEY_INDEX}\${index}\`} />
            </Row>
          ))}
        </Column>
      </Column>
      <Column>
        <Div> Key=unique_id </Div>
        <Column>
          {data.map((city, index) => (
            <Row key={city.id}> ⭕key=unique_id
              <Div>{city.name}</Div>
              <Input id={\`\${KEY_ID}\${index}\`} />
            </Row>
          ))}
        </Column>
      </Column>
    </Row>
  )
}`
