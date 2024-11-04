import React, { useMemo, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { DivPre, BorderBox } from "@/components/common/styleDivChakra"
import { Button, Checkbox, Input } from "@/components/common/styleInputChakra"
import { useForm, SubmitHandler, useWatch } from "react-hook-form"
import { Box, Flex } from "@chakra-ui/react"

export function RegisterAIO(): UseReturnType {
  const title = `ReactHookForm By Register`
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
  act: boolean
}

//Data デフォルト値
const defaultValues = {
  name: "田中",
  address: "東京都",
  age: 10,
  act: true,
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
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
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
      width="100%"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="500px" padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            flexFlow="column"
            width="100%"
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
              <Input {...register("name", constrain.name)} />
              {errors.name && <span>{errors.name.message}</span>}
            </Flex>

            {/* address */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">住所</Box>
              <Input {...register("address", constrain.address)} />
              {errors.address && <span>必須</span>}
            </Flex>

            {/* age */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">年齢</Box>
              <Input {...register("age", constrain.age)} />
              {errors.age && <span>数値のみ</span>}
            </Flex>

            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">年(自動)</Box>
              <BorderBox>{ageCalcAuto}</BorderBox>
            </Flex>

            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Button onClick={handleWatch} padding="0px" width="60px">
                年(手動)
              </Button>
              <BorderBox>{calcAgeMan}</BorderBox>
            </Flex>

            {/* act */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <Box width="60px">有効</Box>
              <BorderBox>
                <Checkbox width="120px" {...register("act", constrain.act)} />
              </BorderBox>
            </Flex>
            <Flex flexFlow="row" width="100%" justifyContent="flex-end">
              <Button type="submit" disabled={!isValid}>
                保存
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
      <DivPre width="300px" fontSize="14px" padding="5px">
        {inputData}
      </DivPre>
    </Flex>
  )
}

const code = `import { useForm, SubmitHandler, useWatch } from "react-hook-form"
 
■ データ型
type Person = {
  name: string
  address: string
  age: number
  act: boolean
}
 
■ データ初期値
const defaultValues = {
  name: "田中",
  address: "東京都",
  age: 10,
  act: true,
}
 
■ 制約
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
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
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
              <Input {...register("name", constrain.name)} />
              {errors.name && <span>{errors.name.message}</span>}
            </Flex>

            {/* address */}
            <Flex flexFlow="row" >
              <Box>住所</Box>
              <Input {...register("address", constrain.address)} />
              {errors.address && <span>必須</span>}
            </Flex>

            {/* age */}
            <Flex flexFlow="row" >
              <Box>年齢</Box>
              <Input {...register("age", constrain.age)} />
              {errors.age && <span>数値のみ</span>}
            </Flex>

            <Flex flexFlow="row" >
              <Box>年(自動)</Box>
              <BorderBox>{ageCalcAuto}</BorderBox>
            </Flex>

            <Flex flexFlow="row" >
              <Button onClick={handleWatch} >
                年(手動)
              </Button>
              <BorderBox>{calcAgeMan}</BorderBox>
            </Flex>

            {/* act */}
            <Flex flexFlow="row" >
              <Box>有効</Box>
              <BorderBox>
                <Checkbox {...register("act", constrain.act)} />
              </BorderBox>
            </Flex>
            <Button type="submit" disabled={!isValid}>
              保存
            </Button>
          </Flex>
        </form>
      </Flex>
      <DivPre width="300px">{inputData}</DivPre>
    </Flex>
  )
}`
