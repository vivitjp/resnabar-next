import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Form, useForm } from "react-hook-form"
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
import { Person } from "../JoinedRHF_common/type"
import { CompoA } from "../JoinedRHF_common/CompoA"
import { CompoB } from "../JoinedRHF_common/CompoB"

export function JoinedRHF_OK2(): UseReturnType {
  const title = `複数Methodsのタブ運用(by useEffect)`
  const subTitle = ``
  const jsx = <Joined />
  return {
    title,
    subTitle,
    code,
    options: [],
    codeFold: true,
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
  const methodsA = useForm({ defaultValues: defaultValuesA, mode: "onChange" })
  const methodsB = useForm({ defaultValues: defaultValuesB, mode: "onChange" })
  const [payload, setPayload] = useState({ A: {}, B: {} })
  const [stored, setStored] = useState({ A: {}, B: {} })

  const [tabIndex, setTabIndex] = useState(0)
  const onChange = (tab: number) => {
    setTabIndex(tab)
  }

  const [isValid_A, setIsValid_A] = useState(false)
  const [isValid_B, setIsValid_B] = useState(false)

  function onSubmit() {
    setIsValid_A(false)
    setIsValid_B(false)

    setTabIndex(0)
    methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
      setIsValid_A(true)
    })()
  }

  useEffect(() => {
    if (!isValid_A) return

    setTabIndex(1)
    methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
      setIsValid_B(true)
    })()
  }, [isValid_A])

  useEffect(() => {
    if (!isValid_B) return

    setStored(payload)
  }, [isValid_B])

  return (
    <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
      <Box border="1px solid #aaa" width="50%" p={5}>
        <Tabs index={tabIndex} onChange={onChange}>
          <TabList>
            <Tab>A</Tab>
            <Tab>B</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Form control={methodsA.control}>
                <CompoA methods={methodsA} />
              </Form>
            </TabPanel>
            <TabPanel>
              <Form control={methodsB.control}>
                <CompoB methods={methodsB} />
              </Form>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button mt={4} colorScheme="teal" onClick={onSubmit}>
          Submit
        </Button>
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
function Joined() {
  const methodsA = useForm({ defaultValues: defaultValuesA, mode: "onChange" })
  const methodsB = useForm({ defaultValues: defaultValuesB, mode: "onChange" })
  const [payload, setPayload] = useState({ A: {}, B: {} })
  const [stored, setStored] = useState({ A: {}, B: {} })
   
  const [tabIndex, setTabIndex] = useState(0)
  const onChange = (tab: number) => {
    setTabIndex(tab)
  }
  
  🔵isValid を state で管理
  const [isValid_A, setIsValid_A] = useState(false)
  const [isValid_B, setIsValid_B] = useState(false)
  
  🔵 state と useEffect で管理するので async 不要
  function onSubmit() {
    setIsValid_A(false) 🔵isValid 初期化
    setIsValid_B(false)
  
    setTabIndex(0)
    methodsA.handleSubmit((data) => {
      🔵callback関数が呼ばれた時点で valid が保証される
      setPayload((prev) => ({ ...prev, A: { ...data } }))
      setIsValid_A(true) 🔵isValid=true
    })()
  }
  
  useEffect(() => {
    if (!isValid_A) return

    setTabIndex(1)
    methodsB.handleSubmit((data) => {
      🔵callback関数が呼ばれた時点で valid が保証される
      setPayload((prev) => ({ ...prev, B: { ...data } }))
      setIsValid_B(true) 🔵isValid=true
    })()
  }, [isValid_A])
  
  useEffect(() => {
    if (!isValid_B) return

    setStored(payload)
  }, [isValid_B])
  
  return (
    <>
      <Tabs index={tabIndex} onChange={onChange}>
        <TabList>
          <Tab>A</Tab>
          <Tab>B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form control={methodsA.control}>
              <CompoA methods={methodsA} />
            </Form>
          </TabPanel>
          <TabPanel>
            <Form control={methodsB.control}>
              <CompoB methods={methodsB} />
            </Form>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button onClick={onSubmit}> Submit </Button>
    </>
  )
}`
