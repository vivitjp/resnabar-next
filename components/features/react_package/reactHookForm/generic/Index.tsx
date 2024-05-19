import React from "react"
import { UseReturnType } from "@/components/type/type"
import { GenericForm } from "./GenericForm"

export function RHFGenericSample(): UseReturnType {
  const title = `Generic From & Input`
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
  return <GenericForm />
}

const code = `import { SubmitHandler } from "react-hook-form"
import { MyInput } from "./SampleInput"
import { GFieldType, useDefaultForm } from "./useDefaultForm"
 
//Data型
export type Person = {
  name: string
  age: number
}
 
//Data デフォルト値
const defaultValues: Person = {
  name: "",
  age: 0,
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
}
 
export const SampleForm = () => {
  const method = useDefaultForm<Person>({ defaultValues, mode: "onBlur" })
  const {
    handleSubmit,
    formState: { isValid },
  } = method
 
  const onSubmit: SubmitHandler<Person> = (data) => {
    console.table(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <Div>Name</Div>
          <MyInput<Person, string>
            methods={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Div>Age</Div>
          <MyInput<Person, number>
            methods={method}
            target={"age"}
            constrain={constrain["age"]}
          />
        </Column>
      </Row>
      <Row>
        <Submit value={"OK"} disabled={!isValid} />
      </Row>
    </form>
  )
}`
