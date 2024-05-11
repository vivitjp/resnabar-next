import { useForm, UseFormProps, UseFormReturn } from "react-hook-form"

const useDefaultForm = <FORM_TYPE extends Record<string, unknown>>(
  props: UseFormProps<FORM_TYPE> & {
    defaultValues: FORM_TYPE
  }
): UseFormReturn<FORM_TYPE> => {
  return useForm(props)
}

export { useDefaultForm }
