import React, { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { useForm, UseFormReturn } from "react-hook-form"
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

export function JoinedRHF_NG(): UseReturnType {
  const title = `複数Methodsのタブ運用(NG)`
  const subTitle = ``

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
const methodsCompo =()=>{ 
  const methodsJoin = useForm({ defaultValues: {}, mode: "onSubmit" })
  const methodsA = useForm({ defaultValues: defaultValuesA, mode: "onChange" })
  const methodsB = useForm({ defaultValues: defaultValuesB, mode: "onChange" })
  ...
  async function onSubmit() {
    await methodsA.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, A: { ...data } }))
    })()
    await methodsB.handleSubmit((data) => {
      setPayload((prev) => ({ ...prev, B: { ...data } }))
    })()
  }
  return (
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
      <Button type="submit"> Submit </Button>
    </form>
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
}
`
