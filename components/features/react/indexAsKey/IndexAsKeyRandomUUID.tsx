import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Button, Input } from "@/components/common/styleInputChakra"
import { Box, Flex } from "@chakra-ui/react"

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
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="100px" gap="4px">
        <Button onClick={handleSetInitialValues}>初期値設定</Button>
        <Button onClick={handleAddItems}>アイテム追加</Button>
      </Flex>
      <Flex flexFlow="column" width="300px" gap="5px" padding="5px">
        <Box fontSize="20px" color="gray" fontWeight="700">
          Key=Index
        </Box>
        <Flex flexFlow="column" width="100%" alignItems="flex-start" gap="5px">
          {citiesWithId.map((city, index) => (
            <Flex
              flexFlow="row"
              key={index}
              width="100%"
              fontSize="20px"
              color={city.color}
              justifyContent="space-between"
            >
              <Box>{city.name}</Box>
              <Input fontSize="12px" id={`${KEY_INDEX}${index}`} />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex flexFlow="column" width="300px" gap="5px" padding="5px">
        <Box fontSize="20px" color="gray" fontWeight="700">
          Key=UUID
        </Box>
        <Flex flexFlow="column" width="100%" alignItems="flex-start" gap="5px">
          {citiesWithId.map((city, index) => (
            <Flex
              flexFlow="row"
              key={city?.id ?? 0}
              width="100%"
              fontSize="20px"
              color={city.color}
              justifyContent="space-between"
            >
              <Box>{city.name}</Box>
              <Input fontSize="12px" id={`${KEY_ID}${index}`} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
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
    <Flex flexFlow="row" >
      <Flex flexFlow="column" >
        <Button onClick={handleSetInitialValues}>初期値設定</Button>
        <Button onClick={handleAddItems}>アイテム追加</Button>
      </Flex>
      <Flex flexFlow="column" >
        <Box> Key=Index </Box>
        <Flex flexFlow="column" >
          {citiesWithId.map((city, index) => (
            <Flex flexFlow="row"  key={index}> 🚫key=index
              <Box>{city.name}</Box>
              <Input id={\`\${KEY_INDEX}\${index}\`} />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex flexFlow="column" >
        <Box> Key=UUID </Box>
        <Flex flexFlow="column" >
          {citiesWithId.map((city, index) => (
            <Flex flexFlow="row"  key={city.id}> ⭕key=unique_id(uuidで生成)
              <Box>{city.name}</Box>
              <Input id={\`\${KEY_ID}\${index}\`} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}`
