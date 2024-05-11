import { UseReturnType } from "@/components/type/type"

export function ReactHookFormGeneric(): UseReturnType {
  const title = `ReactHookForm<G>`
  const subTitle = `ジェネリックReactHookForm`

  const jsx = undefined

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const code = `■ ジェネリック Form 定義
const useDefaultForm = <FORM_TYPE extends Record<string, unknown>>(
  props: UseFormProps<FORM_TYPE> & {
    defaultValues: FORM_TYPE
  }
): UseFormReturn<FORM_TYPE> => {
  return useForm(props)
}
  
export { useDefaultForm }
  
■ ジェネリック Input 定義
import { UseFormReturn } from "react-hook-form"
import { Person } from "./SampleForm"
import { ErrorBox, Input } from "@/components/common/styleInput"

type MyInput<R> = {
  methods: UseFormReturn<Person, R>
  target: keyof Person
  constrain: Record<string, unknown>
}
 
export const MyInput = <R extends string>({
  methods,
  target,
  constrain,
}: MyInput<R>) => {
  const {
    register,
    formState: { errors },
  } = methods
 
  return (
    <Row width="400px" gap="10px">
      <Input {...register(target, constrain)} />
      {errors?.[target]?.message && (
        <ErrorBox>{\`\${errors[target].message}\`}</ErrorBox>
      )}
    </Row>
  )
}`
