import {
  Control,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form"
import { DivPre } from "@/components/common/styleDivChakra"
import { Button, Submit } from "@/components/common/styleInputChakra"
import { useState } from "react"
import { Flex } from "@chakra-ui/react"

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
  people: [{ name: "", age: 1, act: 0 }],
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
  const { fields, append, remove, update } = useFieldArray({
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

  const handleAppend = () => {
    append(defaultValues.people)
  }

  const handleUpdate = () => {
    // const updateObject =
    //update(index, updateObject)
  }

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <Flex
                flexFlow="column"
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
                <Button onClick={handleUpdate} width="80px">
                  Update
                </Button>
                <Button onClick={() => remove(index)} width="80px">
                  Delete
                </Button>
              </Flex>
            )
          })}

          <Total control={control} />

          <Button onClick={handleAppend} width="80px">
            APPEND
          </Button>
          <Submit />
        </form>
      </Flex>
      <DivPre fontSize="14px" padding="5px">
        {inputData}
      </DivPre>
    </Flex>
  )
}
