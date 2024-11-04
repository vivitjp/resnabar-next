import { Controller, Path, UseFormReturn } from "react-hook-form"
import { Div } from "@/components/common/styleDiv"
import { ErrorBox } from "@/components/common/styleInput"
import { Input as ChakraInput, Flex } from "@chakra-ui/react"

type GFieldType = Record<string, unknown>

type MyInput<T extends GFieldType, R> = {
  method: UseFormReturn<T>
  target: Path<T>
  title: string
  constrain: GFieldType
}

export const ControlInput = <T extends GFieldType, R extends string | number>({
  method,
  target,
  title,
  constrain,
}: MyInput<T, R>) => {
  const { control } = method

  return (
    <Flex flexFlow="row" width="100%" gap="10px" alignItems="flex-start">
      <Div width="60px">{title}</Div>
      <Controller
        render={({ field, fieldState: { error } }) => {
          const { value, ...other } = field
          return (
            <>
              <ChakraInput {...{ ...other, value: value as R }} />
              {error && <ErrorBox>{error?.message}</ErrorBox>}
            </>
          )
        }}
        name={target}
        control={control}
        rules={constrain}
      />
    </Flex>
  )
}
