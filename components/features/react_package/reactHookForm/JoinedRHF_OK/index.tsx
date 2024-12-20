import React, { useState } from "react"
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

export function JoinedRHF_OK(): UseReturnType {
  const title = `複数Methodのタブ運用(by isValid)`
  const subTitle = `各viewはそれぞれの method で制御するパターン。
1回目の submit では isValid が正常に動作する(isValid=false)が、2回目は空があっても動作しない(isValid=true)場合がある(このサンプルでは動作するが...)
バージョンに依存？isValid が proxy を使用するため？`

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
  async function onSubmit() {
    //Set Tab A
    setTabIndex(0)
    //Submit A
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()
    //Check A
    if (!methodsA.formState.isValid) return

    //Set Tab B
    setTabIndex(1)
    //Submit B
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
    //Check B
    if (!methodsB.formState.isValid) return
    //Store Data
    setStored(payload)
  }

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
    
  async function onSubmit() {
    //Set Tab A
    setTabIndex(0)
    //Submit A
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()
    //Check A
    if (!methodsA.formState.isValid) return ⛔ここが問題(2回目は無条件で true になる)

    //Set Tab B
    setTabIndex(1)
    //Submit B
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
    //Check B
    if (!methodsB.formState.isValid) return ⛔ここが問題(2回目は無条件で true になる)
    //Store Data
    setStored(payload)
  }

  return (
    <>
      <Tabs index={tabIndex} onChange={onChange}>
        <TabList>
          <Tab>A</Tab>
          <Tab>B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form control={methodsA.control}> 🔵複数 form による管理
              <CompoA methods={methodsA} />
            </Form>
          </TabPanel>
          <TabPanel>
            <Form control={methodsB.control}> 🔵複数 form による管理
              <CompoB methods={methodsB} />
            </Form>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button onClick={onSubmit}> Submit </Button>
    </>
  )
}
`
