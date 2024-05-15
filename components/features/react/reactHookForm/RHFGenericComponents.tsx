import { UseReturnType } from "@/components/type/type"

export function RHFGenericComponents(): UseReturnType {
  const title = `ReactHookForm ジェネリックコンポーネント`

  const jsx = undefined

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

const code = `■ ジェネリック Form(親) 定義
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form"
 
export type GFieldType = Record<string, unknown>
 
const useDefaultForm = <FormDataType extends GFieldType>(
  props: UseFormProps<FormDataType> & {
    defaultValues: FormDataType
  }
): UseFormReturn<FormDataType> => {
  return useForm(props)
}
 
export { useDefaultForm }
  
■ ジェネリック Input(子) 定義
import { Path, UseFormReturn } from "react-hook-form"
import { Row } from "@/components/common/styleDiv"
import { ErrorBox, Input } from "@/components/common/styleInput"
import { GFieldType } from "./useDefaultForm"
 
type MyInput<T extends GFieldType, R> = {
  method: UseFormReturn<T>
  target: Path<T>
  constrain: GFieldType
}
 
export const MyInput = <T extends GFieldType, R extends string | number>({
  method,
  target,
  constrain,
}: MyInput<T, R>) => {
  const {
    register,
    formState: { errors },
  } = method
 
  return (
    <Row>
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
}`
