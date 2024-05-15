import React from "react"
import { UseReturnType } from "@/components/type/type"
import { useForm } from "react-hook-form"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Button,
} from "@chakra-ui/react"

export function RHFChakraSample(): UseReturnType {
  const title = `RHF & Chakra Sample`
  const subTitle = ``

  const jsx = <RHFandChakra />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

type GFieldType = Record<string, unknown>

type Person = {
  name: string
  age: number
}

const defaultValues = {
  name: "田中",
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
    min: { value: 1, mssage: "4文字以上必須です" },
  },
}

function RHFandChakra() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, mode: "onChange" })

  const format = (val: string) => `$` + val
  const [value, setValue] = React.useState("1.53")

  function onSubmit(values: Person) {
    console.log(JSON.stringify(values, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">氏名</FormLabel>
        <Input
          id="name"
          placeholder="田中太郎"
          {...register("name", constrain.name)}
        />
        <FormErrorMessage>
          <>{errors.name && errors.name.message}</>
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">年齢</FormLabel>
        <NumberInput
          id="age"
          placeholder="19"
          //onChange={(valueString) => setValue(parse(valueString))}
          //value={format(value)}
          //{...register("age", constrain.age)}
        >
          <NumberInputField />
        </NumberInput>
        <FormErrorMessage>
          <>{errors.age && errors.age.message}</>
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

const code = ``
