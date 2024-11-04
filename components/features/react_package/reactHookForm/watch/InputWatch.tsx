import { Path, UseFormReturn } from "react-hook-form"
import { Input } from "@/components/common/styleInput"
import { GFieldType } from "../generic/useDefaultForm"
import { ErrorMessage } from "./Error"
import { Flex } from "@chakra-ui/react"

type CompareWatchInput<T extends GFieldType, R> = {
  method: UseFormReturn<T>
  target: Path<T>
  constrain: GFieldType
}

export const InputWatch = <T extends GFieldType, R extends string | number>({
  method,
  target,
  constrain,
}: CompareWatchInput<T, R>) => {
  const {
    register,
    formState: { errors },
  } = method

  return (
    <Flex flexFlow="row" width="400px" gap="10px">
      <Input {...register(target, constrain)} width={"200px"} />
      {errors?.[target] && (
        <ErrorMessage errorMessage={errors?.[target]?.message as string} />
      )}
    </Flex>
  )
}
