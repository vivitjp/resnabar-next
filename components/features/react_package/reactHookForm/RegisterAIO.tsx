import React, { useMemo, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import {
  Row,
  Column,
  Div,
  DivPre,
  BorderDiv,
} from "@/components/common/styleDiv"
import { Button, Checkbox, Input } from "@/components/common/styleInput"
import { useForm, SubmitHandler, useWatch } from "react-hook-form"

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
    <Row width="100%" padding="10px" gap="10px" justifyContent="space-between">
      <Column width="500px" padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column
            width="100%"
            padding="10px"
            gap="4px"
            alignItems="flex-start"
            justifyContent="flex-start"
            boxShadow="2px 2px 10px #ddd"
          >
            {/* name */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">名前</Div>
              <Input {...register("name", constrain.name)} />
              {errors.name && <span>{errors.name.message}</span>}
            </Row>

            {/* address */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">住所</Div>
              <Input {...register("address", constrain.address)} />
              {errors.address && <span>必須</span>}
            </Row>

            {/* age */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">年齢</Div>
              <Input {...register("age", constrain.age)} />
              {errors.age && <span>数値のみ</span>}
            </Row>

            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">年(自動)</Div>
              <BorderDiv>{ageCalcAuto}</BorderDiv>
            </Row>

            <Row width="100%" gap="10px" alignItems="flex-start">
              <Button onClick={handleWatch} padding="0px" width="60px">
                年(手動)
              </Button>
              <BorderDiv>{calcAgeMan}</BorderDiv>
            </Row>

            {/* act */}
            <Row width="100%" gap="10px" alignItems="flex-start">
              <Div width="60px">有効</Div>
              <BorderDiv>
                <Checkbox width="120px" {...register("act", constrain.act)} />
              </BorderDiv>
            </Row>
            <Row width="100%" justifyContent="flex-end">
              <Button type="submit" disabled={!isValid}>
                保存
              </Button>
            </Row>
          </Column>
        </form>
      </Column>
      <DivPre width="300px" fontSize="14px" padding="5px">
        {inputData}
      </DivPre>
    </Row>
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
    <Row>
      <Column>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column>
            {/* name */}
            <Row>
              <Div>名前</Div>
              <Input {...register("name", constrain.name)} />
              {errors.name && <span>{errors.name.message}</span>}
            </Row>

            {/* address */}
            <Row>
              <Div>住所</Div>
              <Input {...register("address", constrain.address)} />
              {errors.address && <span>必須</span>}
            </Row>

            {/* age */}
            <Row>
              <Div>年齢</Div>
              <Input {...register("age", constrain.age)} />
              {errors.age && <span>数値のみ</span>}
            </Row>

            <Row>
              <Div>年(自動)</Div>
              <BorderDiv>{ageCalcAuto}</BorderDiv>
            </Row>

            <Row>
              <Button onClick={handleWatch} >
                年(手動)
              </Button>
              <BorderDiv>{calcAgeMan}</BorderDiv>
            </Row>

            {/* act */}
            <Row>
              <Div>有効</Div>
              <BorderDiv>
                <Checkbox {...register("act", constrain.act)} />
              </BorderDiv>
            </Row>
            <Button type="submit" disabled={!isValid}>
              保存
            </Button>
          </Column>
        </form>
      </Column>
      <DivPre width="300px">{inputData}</DivPre>
    </Row>
  )
}`
