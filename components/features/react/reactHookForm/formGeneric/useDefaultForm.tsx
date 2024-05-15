import { useForm, UseFormProps, UseFormReturn } from "react-hook-form"

export type GFieldType = Record<string, unknown>

const useDefaultForm = <FormDataType extends GFieldType>(
  props: UseFormProps<FormDataType> & {
    defaultValues: FormDataType
  }
): UseFormReturn<FormDataType> => {
  return useForm({ ...props })
}

export { useDefaultForm }
