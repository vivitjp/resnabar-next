import React, { useState } from "react"
import { useFetch } from "../components/UseFetch"
import { ProgrammingLanguage } from "../../mock/programmingLanguage"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Div } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"
import { useForm, SubmitHandler } from "react-hook-form"

export function HookForm(): UseReturnType {
  const title = `React.Memo`
  const subTitle = ``

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const Count = 0
type Inputs = {
  example: string
  exampleRequired: string
}

const ParentCompo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="200px" gap="4px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </Column>
    </Row>
  )
}

const code = ``
