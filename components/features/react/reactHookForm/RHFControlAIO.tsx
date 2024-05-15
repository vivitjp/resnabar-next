import React, { useMemo, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import {
  Row,
  Column,
  Div,
  DivPre,
  BorderDiv,
} from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { useForm, SubmitHandler, useWatch, Controller } from "react-hook-form"
import {
  Input as ChakraInput,
  Checkbox as ChakraCheckbox,
} from "@chakra-ui/react"

export function RHFControlAIO(): UseReturnType {
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
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column
            padding="10px"
            gap="4px"
            alignItems="flex-start"
            justifyContent="flex-start"
            boxShadow="2px 2px 10px #ddd"
          >
            {/* name */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">名前</Div>
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
            </Row>

            {/* address */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">住所</Div>
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
            </Row>

            {/* age */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">年齢</Div>
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
            </Row>

            <Row width="100%" gap="10px" alignItems="center">
              <Div width="60px">年(自動)</Div>
              <BorderDiv width="200px">{ageCalcAuto}</BorderDiv>
            </Row>

            <Row width="100%" gap="10px" alignItems="center">
              <Button width="60px" onClick={handleWatch} padding="0px">
                年(手動)
              </Button>
              <BorderDiv width="200px">{calcAgeMan}</BorderDiv>
            </Row>

            {/* act */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">有効</Div>
              <Controller
                render={({ field }) => {
                  return <ChakraCheckbox {...field} />
                }}
                name={"act"}
                control={control}
                rules={constrain.act}
              />
            </Row>

            <Row width="100%" justifyContent="flex-end">
              <Button type="submit" disabled={!isValid}>
                保存
              </Button>
            </Row>
          </Column>
        </form>
      </Column>
      <DivPre>{inputData}</DivPre>
    </Row>
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
    <Row>
      <Column>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column>
            {/* name */}
            <Row>
              <Div>名前</Div>
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
            </Row>
 
            {/* address */}
            <Row>
              <Div>住所</Div>
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
            </Row>
 
            {/* age */}
            <Row>
              <Div>年齢</Div>
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
            </Row>
 
            <Row>
              <Div>年(自動)</Div>
              <BorderDiv>{ageCalcAuto}</BorderDiv>
            </Row>
 
            <Row>
              <Button onClick={handleWatch}> 年(手動) </Button>
              <BorderDiv>{calcAgeMan}</BorderDiv>
            </Row>
 
            {/* act */}
            <Row>
              <Div>有効</Div>
              <Controller
                render={({ field }) => {
                  return <ChakraCheckbox {...field} />
                }}
                name={"act"}
                control={control}
                rules={constrain.act}
              />
            </Row>
 
            <Row>
              <Button type="submit" disabled={!isValid}> 保存 </Button>
            </Row>
          </Column>
        </form>
      </Column>
      <DivPre>{inputData}</DivPre>
    </Row>
  )
}`
