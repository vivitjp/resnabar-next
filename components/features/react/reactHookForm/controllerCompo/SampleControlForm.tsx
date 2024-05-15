import { SubmitHandler, useForm } from "react-hook-form"
import { Row, Column, Div, DivPre } from "@/components/common/styleDiv"
import { Button, Submit } from "@/components/common/styleInput"
import { SampleControlInput } from "./SampleControlInput"
import { useState } from "react"

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

export const SampleControlForm = () => {
  const method = useForm<Person>({ defaultValues, mode: "onBlur" })

  const {
    handleSubmit,
    formState: { isValid },
  } = method

  const [inputData, setInputData] = useState<Person>()

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data.name)

    //setInputData(data)
  }

  //watch は 非Reactive
  // const [calcAgeMan, setCalcAgeMan] = useState(0)
  // const handleWatch = () => {
  //   const age = Number(watch("age")) * 3 || 0
  //   setCalcAgeMan(age)
  // }

  //useWatch の戻り値変数は Reactive(再描画に注意)
  // const watchAge = useWatch({ control, name: "age" })
  // const ageCalcAuto = useMemo(() => (Number(watchAge) || 0) * 2, [watchAge])

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
            <Row width="100%" gap="10px" alignItems="flex-start">
              <SampleControlInput
                method={method}
                target={"name"}
                constrain={constrain.name}
              />
            </Row>

            <Row width="100%" justifyContent="flex-end">
              <Submit value={"保存"} disabled={!isValid} />
            </Row>
          </Column>
        </form>
      </Column>
      {/* <DivPre>{inputData}</DivPre> */}
    </Row>
  )
}
