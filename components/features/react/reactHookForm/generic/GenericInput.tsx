import { Path, UseFormReturn } from "react-hook-form"
import { Row } from "@/components/common/styleDiv"
import { ErrorBox, Input } from "@/components/common/styleInput"
import { GFieldType } from "./useDefaultForm"

type GenericInput<T extends GFieldType, R> = {
  method: UseFormReturn<T>
  target: Path<T>
  constrain: GFieldType
}

export const GenericInput = <T extends GFieldType, R extends string | number>({
  method,
  target,
  constrain,
}: GenericInput<T, R>) => {
  const {
    register,
    formState: { errors },
  } = method

  return (
    <Row width="400px" gap="10px">
      <Input {...register(target, constrain)} />
      {errors?.[target] && (
        <ErrorBox>
          {(errors?.[target]?.type as string) === "validate"
            ? (constrain.validateMessage as string) || "Error..."
            : (errors?.[target]?.message as string)}
        </ErrorBox>
      )}
    </Row>
  )
}
