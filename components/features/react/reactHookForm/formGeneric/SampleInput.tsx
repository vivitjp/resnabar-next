import { UseFormReturn } from "react-hook-form"
import { Person } from "./SampleForm"
import { Row } from "@/components/common/styleDiv"
import { ErrorBox, Input } from "@/components/common/styleInput"

type MyInput<R> = {
  methods: UseFormReturn<Person, R>
  target: keyof Person
  constrain: Record<string, unknown>
}

export const MyInput = <R extends string | number>({
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
        <ErrorBox>{`${errors[target].message}`}</ErrorBox>
      )}
    </Row>
  )
}
