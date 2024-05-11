import { SubmitHandler } from "react-hook-form"
import { MyInput } from "./SampleInput"
import { useDefaultForm } from "./useDefaultForm"
import { Row, Column, Div } from "@/components/common/styleDiv"
import { Submit } from "@/components/common/styleInput"

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
const constrain: Record<keyof Person, Record<string, unknown>> = {
  name: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  age: {
    required: "必須項目です",
    min: { value: 1, message: "1以上の数値です" },
    valueAsNumber: { message: "数値のみです" },
    pattern: {
      value: /^(0|[1-9]\d*)(\.\d+)?$/,
      message: "数値のみです",
    },
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
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Column width="200px" gap="4px">
          <Div>Name</Div>
          <MyInput<string>
            methods={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Column>
      </Row>
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Column width="200px" gap="4px">
          <Div>Age</Div>
          <MyInput<number>
            methods={method}
            target={"age"}
            constrain={constrain["age"]}
          />
        </Column>
      </Row>
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Submit value={"OK"} />
      </Row>
    </form>
  )
}
