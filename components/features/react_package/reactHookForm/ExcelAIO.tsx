import React, { ComponentProps, useEffect, useRef } from "react"
import { UseReturnType } from "@/components/type/type"
import { useForm, useWatch } from "react-hook-form"
import { Input as ChakraInput, Button, Flex, Box, Text } from "@chakra-ui/react"
import {
  ExcelDisplay,
  ExcelInput,
  ExcelInputGroup,
} from "@/components/common/styleInputChakra"
import { DivPre } from "@/components/common/styleDivChakra"

export function ExcelAIO(): UseReturnType {
  const title = `RHF & Normal Input Sample`
  const subTitle = ``

  const jsx = <InputSample />

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
  name: "田中太郎",
  age: 12.41654165,
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

function InputSample() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, mode: "onChange" })

  const [dataValues, setDataValues] = React.useState<string>("")

  //const refInput = useRef<HTMLInputElement>(null)
  const refDisplay = useRef<HTMLInputElement>(null)

  const regAge = register("age")
  const { ref } = regAge

  const ageWatch = useWatch({ control, name: "age" })
  const [displayValue, setDisplayValue] = React.useState<string>("")
  useEffect(() => {
    if (!ageWatch) setDisplayValue("0")
    setDisplayValue(Number(ageWatch).toFixed(2))
  }, [ageWatch])

  const onInputBlur = (value: React.FocusEvent<HTMLInputElement, Element>) => {
    console.log("onInputBlur")
    const stringValue = value.currentTarget.value || ""
    setDisplayValue(Number(stringValue).toFixed(2))
    refDisplay.current?.setAttribute("style", "hidden:false")
  }

  function onSubmit(values: Person) {
    setDataValues(JSON.stringify(values, null, 2))
  }

  const onDisplayFocus = () => {
    console.log("onDisplayFocus")
    refDisplay.current?.setAttribute("style", "hidden:true")
  }

  return (
    <Flex flexFlow="row">
      <Box width={"300px"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Text>氏名</Text>
            <ChakraInput
              id="name"
              placeholder="田中太郎"
              {...register("name", constrain.name)}
            />
            <Box>
              <>{errors.name && errors.name.message}</>
            </Box>
          </Box>

          <Box>
            <Text>年齢</Text>
            <ExcelInputGroup>
              {/* <ExcelInputRef {...(regAge, { onBlur: onInputBlur })} /> */}
              <ExcelDisplayRef
                value={displayValue}
                onFocus={onDisplayFocus}
                //ref={refDisplay}
              />
            </ExcelInputGroup>
            <Box>{errors.age && errors.age.message}</Box>
          </Box>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
      <DivPre fontSize="14px" padding="5px">
        {JSON.stringify(dataValues, undefined, 2)}
      </DivPre>
    </Flex>
  )
}

const code = ``

// type ExcelInputForward = {
//   width?: number
// } & ComponentProps<"input">

const ExcelInputRef = React.forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>(({ children }, ref) => {
  return <ExcelInput ref={ref}>{children}</ExcelInput>
})
ExcelInputRef.displayName = "ExcelInputRef"

const ExcelDisplayRef = React.forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>(({ children }, ref) => {
  return <ExcelDisplay ref={ref}>{children}</ExcelDisplay>
})
ExcelDisplayRef.displayName = "ExcelDisplayRef"
