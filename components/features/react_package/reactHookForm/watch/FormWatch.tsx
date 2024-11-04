import { SubmitHandler } from "react-hook-form"
import { InputWatch } from "./InputWatch"
import { Submit } from "@/components/common/styleInputChakra"
import { GFieldType, useDefaultForm } from "../generic/useDefaultForm"
import { useEffect } from "react"
import { Box, Flex } from "@chakra-ui/react"

//Data型
export type Person = {
  name: string
  address: string
  auto_1?: string
  age: number
}

//Data デフォルト値
const defaultValues: Person = {
  name: "",
  address: "",
  auto_1: "",
  age: 0,
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
  auto_1: {},
  age: {
    required: "必須項目です",
    min: { value: 1, message: "1以上の数値です" },
    validate: (item: string) => !!Number(item),
    validateMessage: "数値のみです",
  },
}

export const FormWatch = () => {
  const method = useDefaultForm<Person>({
    defaultValues,
    mode: "onBlur",
  })

  const {
    watch,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = method

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      switch (name) {
        case "name":
        case "address":
          setValue("auto_1", `${value["name"]}::${value["address"]}`)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, setValue])

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.table(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexFlow="column"
        padding="10px"
        gap="10px"
        justifyContent="space-between"
      >
        <Flex flexFlow="row" width="600px" gap="4px">
          <Box width="100px">Name</Box>
          <InputWatch<Person, string>
            method={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Flex>
        <Flex flexFlow="row" width="600px" gap="4px">
          <Box width="100px">address</Box>
          <InputWatch<Person, string>
            method={method}
            target={"address"}
            constrain={constrain["address"]}
          />
        </Flex>
        <Flex flexFlow="row" width="600px" gap="4px">
          <Box width="100px">Name+address動的生成</Box>
          <InputWatch<Person, string>
            method={method}
            target={"auto_1"}
            constrain={constrain["auto_1"]}
          />
        </Flex>
        <Flex flexFlow="row" width="600px" gap="4px">
          <Box width="100px">Age</Box>
          <InputWatch<Person, number>
            method={method}
            target={"age"}
            constrain={constrain["age"]}
          />
        </Flex>
        <Flex
          flexFlow="row"
          padding="10px"
          gap="10px"
          justifyContent="space-between"
        >
          <Submit value={"OK"} disabled={!isValid} />
        </Flex>
      </Flex>
    </form>
  )
}
