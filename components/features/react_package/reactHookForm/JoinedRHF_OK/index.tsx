import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Form, useForm, UseFormReturn } from "react-hook-form"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  HStack,
  Box,
} from "@chakra-ui/react"

export function JoinedRHF_OK(): UseReturnType {
  const title = `複数Methodsのタブ運用(OK)`
  const subTitle = ``
  const jsx = <Joined />
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

type GFieldType = Record<string, unknown>

type Person = {
  name: string
  id: string
}

const defaultValuesA: Person = {
  name: "",
  id: "0123",
}

const defaultValuesB: Person = {
  name: "John",
  id: "",
}

//Data 制約
const constrain: Record<keyof Person, GFieldType> = {
  name: {
    required: "必須項目",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  id: {
    required: "必須項目",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
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
    setTabIndex(0)
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()
    if (!methodsA.formState.isValid) return
    setTabIndex(1)
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
// Component A
//-------------------------------

const CompoA = ({ methods }: { methods: UseFormReturn<Person> }) => {
  const {
    register,
    formState: { errors },
  } = methods

  return (
    <>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">氏名(A)</FormLabel>
        <Input {...register("name", constrain.name)} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.id}>
        <FormLabel htmlFor="id">年齢(A)</FormLabel>
        <Input {...register("id", constrain.id)} />
        <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

//-------------------------------
// Component B
//-------------------------------

const CompoB = ({ methods }: { methods: UseFormReturn<Person> }) => {
  const {
    register,
    formState: { errors },
  } = methods

  return (
    <>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">氏名(B)</FormLabel>
        <Input {...register("name", constrain.name)} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.id}>
        <FormLabel htmlFor="id">ID(B)</FormLabel>
        <Input {...register("id", constrain.id)} />
        <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
      </FormControl>
    </>
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
    //タブ移動
    setTabIndex(0)
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()

    // methodsAの validity 確認
    if (!methodsA.formState.isValid) return

    //タブ移動
    setTabIndex(1)
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
  }

  useEffect(() => {
    if (Object.keys(payload?.A).length && Object.keys(payload?.B).length)
      setStored(payload)
  }, [payload])

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
}

const CompoA = ({ methods }: { methods: UseFormReturn<Person> }) => {
  const { register, formState: { errors } } = methods
  return (
    <>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">氏名(A)</FormLabel>
        <Input {...register("name", constrain.name)} />
        <FormErrorMessage> {errors.name && errors.name.message} </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.id}>
        <FormLabel htmlFor="id">年齢(A)</FormLabel>
        <Input {...register("id", constrain.id)} />
        <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}`
