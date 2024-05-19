import {
  Control,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form"
import {
  Row,
  Column,
  Div,
  DivPre,
  BorderDiv,
} from "@/components/common/styleDiv"
import { Button, Submit } from "@/components/common/styleInput"
import { ControlInput } from "./ControlInput"
import { useMemo, useState } from "react"

type GFieldType = Record<string, unknown>

//Data型
type Person = {
  name: string
  age: number
  act: number //Chakra Checkbox 型
}

type People = {
  people: Person[]
}

//Data デフォルト値
const defaultValues = {
  people: [{ name: "佐藤", age: 55, act: 0 }],
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

export const FieldArrayForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<People>({ defaultValues, mode: "onBlur" })
  const { fields, append, remove } = useFieldArray({
    name: "people",
    control,
  })

  const [inputData, setInputData] = useState("")

  const onSubmit: SubmitHandler<People> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }

  const Total = ({ control }: { control: Control<People> }) => {
    const formValues = useWatch({
      name: "people",
      control,
    })
    const total = formValues.reduce(
      (acc, current) => acc + (current.age || 0),
      0
    )
    return <p>Total Amount: {total}</p>
  }

  const appendHandler = () => {
    append({
      name: "",
      age: 0,
      act: 0,
    })
  }

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <Column
                key={field.id}
                padding="10px"
                gap="4px"
                alignItems="flex-start"
                justifyContent="flex-start"
                boxShadow="2px 2px 10px #ddd"
              >
                <input
                  placeholder="name"
                  {...register(`people.${index}.name` as const, constrain.name)}
                  className={errors?.people?.[index]?.name ? "error" : ""}
                />
                <input
                  placeholder="quantity"
                  type="number"
                  {...register(`people.${index}.age` as const, constrain.age)}
                  className={errors?.people?.[index]?.age ? "error" : ""}
                />
                <input
                  placeholder="value"
                  type="number"
                  {...register(`people.${index}.act` as const, constrain.act)}
                  className={errors?.people?.[index]?.act ? "error" : ""}
                />
                <Button onClick={() => remove(index)}>DELETE</Button>
              </Column>
            )
          })}

          <Total control={control} />

          <Button onClick={appendHandler}>APPEND</Button>
          <Submit />
        </form>
      </Column>
      <DivPre>{inputData}</DivPre>
    </Row>
  )
}
