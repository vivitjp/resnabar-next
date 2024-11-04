import { Controller, Path, UseFormReturn } from "react-hook-form"
import { Box, Input as ChakraInput, Flex } from "@chakra-ui/react"
import { ErrorBox } from "../watch/Error"

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
      <Box width="60px">{title}</Box>
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
