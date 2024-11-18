import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { useForm } from "react-hook-form"
import {
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  HStack,
  Box,
} from "@chakra-ui/react"
import { CompoA } from "../JoinedRHF_common/CompoA"
import { CompoB } from "../JoinedRHF_common/CompoB"
import { Person } from "../JoinedRHF_common/type"

export function JoinedRHF_NG(): UseReturnType {
  const title = `複数Methodsのタブ運用(NG)`
  const subTitle = `ダミーmethodsで囲うパターンだが、ここのタブ移動を同期させられない欠点がある。`

  const jsx = <Joined />

  return {
    title,
    subTitle,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

const defaultValuesA: Person = {
  name: "",
  id: "0123",
}

const defaultValuesB: Person = {
  name: "John",
  id: "",
}

//-------------------------------
// Joined
//-------------------------------
function Joined() {
  const methodsJoin = useForm({ defaultValues: {}, mode: "onSubmit" })
  const methodsA = useForm({ defaultValues: defaultValuesA, mode: "onChange" })
  const methodsB = useForm({ defaultValues: defaultValuesB, mode: "onChange" })

  const [payload, setPayload] = useState({ A: {}, B: {} })
  const [stored, setStored] = useState({ A: {}, B: {} })

  async function onSubmit() {
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
  }

  useEffect(() => {
    if (Object.keys(payload?.A).length && Object.keys(payload?.B).length)
      setStored(payload)
  }, [payload])

  return (
    <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
      <Box border="1px solid #aaa" width="50%" p={5}>
        <form onSubmit={methodsJoin.handleSubmit(onSubmit)}>
          <Tabs>
            <TabList>
              <Tab>A</Tab>
              <Tab>B</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CompoA methods={methodsA} />
              </TabPanel>
              <TabPanel>
                <CompoB methods={methodsB} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
      <Box border="1px solid #aaa" width="50%" p={5}>
        {JSON.stringify(stored)}
      </Box>
    </HStack>
  )
}

//-------------------------------
// Code
//-------------------------------
const code = `
const methodsCompo =()=>{ 
  const methodsJoin = useForm({ defaultValues: {}, mode: "onSubmit" })
  const methodsA = useForm({ defaultValues: defaultValuesA, mode: "onChange" })
  const methodsB = useForm({ defaultValues: defaultValuesB, mode: "onChange" })
  ...

  async function onSubmit() {
    ⛔これではタブが自動で切り替わらない
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()

    ⛔これではタブが自動で切り替わらない
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
  }
  return (
    <form onSubmit={methodsJoin.handleSubmit(onSubmit)}> 🔵ダミー form による管理
      <Tabs>
        <TabList>
          <Tab>A</Tab>
          <Tab>B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CompoA methods={methodsA} /> 🔵コンポーネントA
          </TabPanel>
          <TabPanel>
            <CompoB methods={methodsB} /> 🔵コンポーネントA
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button type="submit"> Submit </Button>
    </form>
  )
}
`
