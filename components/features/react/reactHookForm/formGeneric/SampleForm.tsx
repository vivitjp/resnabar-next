import { SubmitHandler } from "react-hook-form"
import { MyInput } from "./SampleInput"
import { GFieldType, useDefaultForm } from "./useDefaultForm"
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
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Column width="200px" gap="4px">
          <Div>Name</Div>
          <MyInput<Person, string>
            method={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Column>
      </Row>
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Column width="200px" gap="4px">
          <Div>Age</Div>
          <MyInput<Person, number>
            method={method}
            target={"age"}
            constrain={constrain["age"]}
          />
        </Column>
      </Row>
      <Row padding="10px" gap="10px" justifyContent="space-between">
        <Submit value={"OK"} disabled={!isValid} />
      </Row>
    </form>
  )
}
