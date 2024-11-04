import { SubmitHandler } from "react-hook-form"
import { GenericInput } from "./GenericInput"
import { GFieldType, useDefaultForm } from "./useDefaultForm"
import { Submit } from "@/components/common/styleInputChakra"
import { Box, Flex } from "@chakra-ui/react"

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

export const GenericForm = () => {
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
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="space-between"
      >
        <Flex flexFlow="column" width="200px" gap="4px">
          <Box>Name</Box>
          <GenericInput<Person, string>
            method={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Flex>
      </Flex>
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="space-between"
      >
        <Flex flexFlow="column" width="200px" gap="4px">
          <Box>Age</Box>
          <GenericInput<Person, number>
            method={method}
            target={"age"}
            constrain={constrain["age"]}
          />
        </Flex>
      </Flex>
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="space-between"
      >
        <Submit value={"OK"} disabled={!isValid} />
      </Flex>
    </form>
  )
}
