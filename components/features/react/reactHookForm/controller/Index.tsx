import React from "react"
import { UseReturnType } from "@/components/type/type"
import { ControlForm } from "./ControlForm"

export function RHFControlPC(): UseReturnType {
  const title = `By Control`
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

const ParentCompo = () => {
  return <ControlForm />
}

const code = `import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { ControlInput } from "./ControlInput"
import { useMemo, useState } from "react"

type GFieldType = Record<string, unknown>

//Data型
type Person = {
  name: string
  age: number
  act: number //Chakra Checkbox 型
}

//Data デフォルト値
const defaultValues = {
  name: "佐藤",
  age: 55,
  act: 0,
}

//Data 制約
const constrain: Record<keyof Person, GFieldType> = {
  name: {
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

export const ControlForm = () => {
  const method = useForm<Person>({ defaultValues, mode: "onBlur" })

  const {
    watch,
    control,
    handleSubmit,
    formState: { isValid },
  } = method

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
            <Row>
              <ControlInput
                method={method}
                target={"name"}
                title={"氏名"}
                constrain={constrain.name}
              />
            </Row>
            <Row>
              <ControlInput
                method={method}
                target={"age"}
                title={"年齢"}
                constrain={constrain.age}
              />
            </Row>
            <Row>
              <Div>年(自動)</Div>
              <BorderDiv>{ageCalcAuto}</BorderDiv>
            </Row>
            <Row>
              <Button onClick={handleWatch}>
                年(手動)
              </Button>
              <BorderDiv>{calcAgeMan}</BorderDiv>
            </Row>
            <Row>
              <ControlInput
                method={method}
                target={"act"}
                title={"有効"}
                constrain={constrain.act}
              />
            </Row>
            <Row>
              <Submit value={"保存"} disabled={!isValid} />
            </Row>
          </Column>
        </form>
      </Column>
      <DivPre>{inputData}</DivPre>
    </Row>
  )
}
`
