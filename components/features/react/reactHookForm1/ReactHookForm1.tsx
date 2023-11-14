import React, { useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Div, DivPre } from "@/components/common/styleDiv"
import { Button, Checkbox, Input } from "@/components/common/styleInput"
import { useForm, SubmitHandler, useWatch } from "react-hook-form"

export function ReactHookForm1(): UseReturnType {
  const title = `ReactHookForm: useForm`
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

let count = 0

type Inputs = {
  name: string
  address: string
  age: number
  act: boolean
}

const ParentCompo = () => {
  count++
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const [inputData, setInputData] = useState("")

  const watchName = useWatch({ control, name: "name" })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }

  const handleWatch = () => {
    //この watch は全体を再描画する
    console.log("name", watch("name"))
  }

  console.log("watchName", watchName)

  console.log("count", count)

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column gap="4px">
          <Row padding="5px" gap="10px" alignItems="center">
            <Div>名前</Div>
            <Input width="200px" defaultValue="田中" {...register("name")} />
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Div>住所</Div>
            <Input
              width="200px"
              defaultValue="東京"
              {...register("address", { required: true })}
            />
            {errors.address && <span>必須</span>}
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Div>年齢</Div>
            <Input width="200px" defaultValue="20" {...register("age")} />
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Div>有効</Div>
            <Checkbox width="200px" defaultValue="true" {...register("act")} />
          </Row>
          <Row padding="5px" gap="10px" alignItems="center">
            <Button type="submit">保存</Button>
            <Button onClick={handleWatch}>Watch</Button>
          </Row>
        </Column>
      </form>
      <DivPre>{inputData}</DivPre>
    </Row>
  )
}

const code = ``
