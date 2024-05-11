import React from "react"
import { UseReturnType } from "@/components/type/type"
import { SampleForm } from "./formGeneric/SampleForm"

export function ReactHookForm2(): UseReturnType {
  const title = `useForm`
  const subTitle = ``

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const ParentCompo = () => {
  return <SampleForm />
}

const code = `■ サンプル Form
import { SubmitHandler } from "react-hook-form"
import { MyInput } from "./SampleInput"
import { useDefaultForm } from "./useDefaultForm"
 
//Data型
export type Person = {
  name: string
}
 
//Data デフォルト値
const defaultValues: Person = {
  name: "",
}
 
//Data 制約
const constrain: Record<keyof Person, Record<string, unknown>> = {
  name: {
    required: "This is required",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
}
 
export const SampleForm = () => {
  const method = useDefaultForm<Person>({ defaultValues })
  const { handleSubmit } = method
 
  const onSubmit: SubmitHandler<Person> = (data) => {
    console.table(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <Div>Name</Div>
          <MyInput<string>
            methods={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Column>
      </Row>
      <Row>
        <Submit value={"OK"} />
      </Row>
    </form>
  )
}`
