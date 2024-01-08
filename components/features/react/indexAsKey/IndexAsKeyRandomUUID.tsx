import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Div } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"

export function UseIndexAsKeyRandomUUID(): UseReturnType {
  const title = `randomUUID() for Key(Dataオブジェクトがidを含まない実装)`
  const subTitle = `データに id がない場合、表示前に self.crypto.randomUUID() を用いて id を付与する`

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

type DataType = { id: string; name: string; color: string }

const cities = ["tokyo", "osaka", "kobe", "nagoya"]
const citiesMore = ["sendai", "fukuoka", "sapporo", "yokohama", "nagasaki"]

const ParentCompo = () => {
  const [counter, setCounter] = useState(citiesMore.length)
  const [citiesWithId, setCitiesWithId] = useState<DataType[]>([])
  const [moresWithId, setMoresWithId] = useState<DataType[]>([])

  const KEY_INDEX = "b-key-index-"
  const KEY_ID = "b-key-id-"

  useEffect(() => {
    setCitiesWithId(
      cities.map((item) => ({
        id: self.crypto.randomUUID(),
        name: item,
        color: "gray",
      }))
    )
    setMoresWithId(
      citiesMore.map((item) => ({
        id: self.crypto.randomUUID(),
        name: item,
        color: "Crimson",
      }))
    )
  }, [])

  const handleSetInitialValues = () => {
    for (let i = 0; i < citiesWithId.length; i++) {
      const id1 = document.getElementById(`${KEY_INDEX}${i}`)
      if (id1) id1.setAttribute("value", String.fromCharCode(65 + i))
      const id2 = document.getElementById(`${KEY_ID}${i}`)
      if (id2) id2.setAttribute("value", String.fromCharCode(65 + i))
    }
  }

  const handleAddItems = () => {
    if (!counter) return
    setCitiesWithId((prev) => [moresWithId[counter - 1], ...prev])
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
          {citiesWithId.map((city, index) => (
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
          Key=UUID
        </Div>
        <Column width="100%" alignItems="flex-start" gap="5px">
          {citiesWithId.map((city, index) => (
            <Row
              key={city?.id ?? 0}
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

const code = `type DataType = { id: string; name: string; color: string }
 
const cities = ["tokyo", "osaka", "kobe", "nagoya"]
const citiesMore = ["sendai", "fukuoka", "sapporo", "yokohama", "nagasaki"]
 
const ParentCompo = () => {
  const [counter, setCounter] = useState(citiesMore.length)
  const [citiesWithId, setCitiesWithId] = useState<DataType[]>([])
  const [moresWithId, setMoresWithId] = useState<DataType[]>([])
 
  const KEY_INDEX = "b-key-index-"
  const KEY_ID = "b-key-id-"
 
  useEffect(() => {
    setCitiesWithId(
      cities.map((item) => ({
        id: self.crypto.randomUUID(), ⭕ID付与
        name: item,
        color: "gray",
      }))
    )
    setMoresWithId(
      citiesMore.map((item) => ({
        id: self.crypto.randomUUID(), ⭕ID付与
        name: item,
        color: "Crimson",
      }))
    )
  }, [])

  const handleSetInitialValues = () => { 省略 }

  const handleAddItems = () => {
    if (!counter) return
    setCitiesWithId((prev) => [moresWithId[counter - 1], ...prev])
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
          {citiesWithId.map((city, index) => (
            <Row key={index}> 🚫key=index
              <Div>{city.name}</Div>
              <Input id={\`\${KEY_INDEX}\${index}\`} />
            </Row>
          ))}
        </Column>
      </Column>
      <Column>
        <Div> Key=UUID </Div>
        <Column>
          {citiesWithId.map((city, index) => (
            <Row key={city.id}> ⭕key=unique_id(uuidで生成)
              <Div>{city.name}</Div>
              <Input id={\`\${KEY_ID}\${index}\`} />
            </Row>
          ))}
        </Column>
      </Column>
    </Row>
  )
}`
