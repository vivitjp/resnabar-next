import React from "react"
import { UseReturnType } from "@/components/type/type"
import { FormWatch } from "./FormWatch"

export function WatchIndex(): UseReturnType {
  const title = `ReactHookForm Watchによる再描画`
  const subTitle = `DevToolで再描画を確認`

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

const ParentCompo = () => {
  return <FormWatch />
}

const code = `■ Form
export const FormWatch = () => {
  const method = useDefaultForm<Person>({
    defaultValues,
    mode: "onBlur",
  })

  const {
    watch,
    handleSubmit,
    formState: { isValid },
  } = method

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.table(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Column>
        <Row>
          <Div>Name</Div>
          <InputWatch<Person, string>
            method={method}
            target={"name"}
            constrain={constrain["name"]}
          />
        </Row>
        ... その他
        <Submit value={"OK"} disabled={!isValid} />
      </Column>
    </form>
  )
}
 
■ Input Component
export const InputWatch = <T extends GFieldType, R extends string | number>
  ({ method, target, constrain }: CompareWatchInput<T, R>) => {
  const { register, formState: { errors } } = method
 
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
