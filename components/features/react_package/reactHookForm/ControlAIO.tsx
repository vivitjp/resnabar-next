import React, { useMemo, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { DivPre, BorderBox } from "@/components/common/styleDivChakra"
import { Button } from "@/components/common/styleInputChakra"
import { useForm, SubmitHandler, useWatch, Controller } from "react-hook-form"
import {
  Input as ChakraInput,
  Checkbox as ChakraCheckbox,
  Flex,
  Box,
} from "@chakra-ui/react"

export function ControlAIO(): UseReturnType {
  const title = `ReactHookForm By Controller`
  const subTitle = ``

  const jsx = <ParentCompo />

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

//Data型
type Person = {
  name: string
  address: string
  age: number
  act: number //Chakra Checkbox 型
}

//Data デフォルト値
const defaultValues = {
  name: "佐藤",
  address: "大阪府",
  age: 55,
  act: 0,
}

//Data 制約
const constrain: Record<keyof Person, GFieldType> = {
  name: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  address: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  age: {
    required: "必須項目です",
    min: { value: 1, message: "1以上の数値です" },
    validate: (item: string) => !!Number(item),
    validateMessage: "数値のみです",
  },
  act: {},
}

const ParentCompo = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<Person>({ defaultValues, mode: "onBlur" })

  const [inputData, setInputData] = useState("")

  const onSubmit: SubmitHandler<Person> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }

  //watch は 非Reactive
  const [calcAgeMan, setCalcAgeMan] = useState(0)
  const handleWatch = () => {
    const age = Number(watch("age")) * 3 || 0
    setCalcAgeMan(age)
  }

  //useWatch の戻り値変数は Reactive(再描画に注意)
  const watchAge = useWatch({ control, name: "age" })
  const ageCalcAuto = useMemo(() => (Number(watchAge) || 0) * 2, [watchAge])

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            flexFlow="column"
            padding="10px"
            gap="4px"
            alignItems="flex-start"
            justifyContent="flex-start"
            boxShadow="2px 2px 10px #ddd"
          >
            {/* name */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">名前</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && <span>{error?.message}</span>}
                    </>
                  )
                }}
                name={"name"}
                control={control}
                rules={constrain.name}
              />
            </Flex>

            {/* address */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">住所</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && <span>{error?.message}</span>}
                    </>
                  )
                }}
                name={"address"}
                control={control}
                rules={constrain.address}
              />
            </Flex>

            {/* age */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">年齢</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && (
                        <span>
                          {error?.message ||
                            (constrain.age?.validateMessage as string) ||
                            "Error"}
                        </span>
                      )}
                    </>
                  )
                }}
                name={"age"}
                control={control}
                rules={constrain.age}
              />
            </Flex>

            <Flex flexFlow="row" width="100%" gap="10px" alignItems="center">
              <Box width="60px">年(自動)</Box>
              <BorderBox width="200px">{ageCalcAuto}</BorderBox>
            </Flex>

            <Flex flexFlow="row" width="100%" gap="10px" alignItems="center">
              <Button width="60px" onClick={handleWatch} padding="0px">
                年(手動)
              </Button>
              <BorderBox width="200px">{calcAgeMan}</BorderBox>
            </Flex>

            {/* act */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">有効</Box>
              <Controller
                render={({ field }) => {
                  return <ChakraCheckbox {...field} />
                }}
                name={"act"}
                control={control}
                rules={constrain.act}
              />
            </Flex>

            <Flex flexFlow="row" width="100%" justifyContent="flex-end">
              <Button type="submit" disabled={!isValid}>
                保存
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
      <DivPre fontSize="14px" padding="5px">
        {inputData}
      </DivPre>
    </Flex>
  )
}

const code = `import { useForm, SubmitHandler, useWatch, Controller } from "react-hook-form"
import { Input as ChakraInput, Checkbox as ChakraCheckbox } from "@chakra-ui/react"
 
type Person = {
  name: string
  address: string
  age: number
  act: number //Chakra Checkbox 型
}
 
const defaultValues = {
  name: "佐藤",
  address: "大阪府",
  age: 55,
  act: 0,
}
 
//Data 制約
const constrain: Record<keyof Person, GFieldType> = {
  name: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  address: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  age: {
    required: "必須項目です",
    min: { value: 1, message: "1以上の数値です" },
    validate: (item: string) => !!Number(item),
    validateMessage: "数値のみです",
  },
  act: {},
}
 
const ParentCompo = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<Person>({ defaultValues, mode: "onBlur" })
 
  const [inputData, setInputData] = useState("")
 
  const onSubmit: SubmitHandler<Person> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }
 
  //watch は 非Reactive
  const [calcAgeMan, setCalcAgeMan] = useState(0)
  const handleWatch = () => {
    const age = Number(watch("age")) * 3 || 0
    setCalcAgeMan(age)
  }
 
  //useWatch の戻り値変数は Reactive(再描画に注意)
  const watchAge = useWatch({ control, name: "age" })
  const ageCalcAuto = useMemo(() => (Number(watchAge) || 0) * 2, [watchAge])
 
  return (
    <Flex flexFlow="row" >
      <Flex flexFlow="column" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexFlow="column" >
            {/* name */}
            <Flex flexFlow="row" >
              <Box>名前</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && <span>{error?.message}</span>}
                    </>
                  )
                }}
                name={"name"}
                control={control}
                rules={constrain.name}
              />
            </Flex>
 
            {/* address */}
            <Flex flexFlow="row" >
              <Box>住所</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && <span>{error?.message}</span>}
                    </>
                  )
                }}
                name={"address"}
                control={control}
                rules={constrain.address}
              />
            </Flex>
 
            {/* age */}
            <Flex flexFlow="row" >
              <Box>年齢</Box>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <>
                      <ChakraInput {...field} />
                      {error && (
                        <span>
                          {error?.message ||
                            (constrain.age?.validateMessage as string) ||
                            "Error"}
                        </span>
                      )}
                    </>
                  )
                }}
                name={"age"}
                control={control}
                rules={constrain.age}
              />
            </Flex>
 
            <Flex flexFlow="row" >
              <Box>年(自動)</Box>
              <BorderBox>{ageCalcAuto}</BorderBox>
            </Flex>
 
            <Flex flexFlow="row" >
              <Button onClick={handleWatch}> 年(手動) </Button>
              <BorderBox>{calcAgeMan}</BorderBox>
            </Flex>
 
            {/* act */}
            <Flex flexFlow="row" >
              <Box>有効</Box>
              <Controller
                render={({ field }) => {
                  return <ChakraCheckbox {...field} />
                }}
                name={"act"}
                control={control}
                rules={constrain.act}
              />
            </Flex>
 
            <Flex flexFlow="row" >
              <Button type="submit" disabled={!isValid}> 保存 </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
      <DivPre>{inputData}</DivPre>
    </Flex>
  )
}`
