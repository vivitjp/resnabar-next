import React, { useEffect, useState } from "react"
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

type Inputs = {
  name: string
  address: string
  age: number
  act: boolean
}

const ParentCompo = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Inputs>()

  const [inputData, setInputData] = useState("")

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }

  //watch は 非Reactive
  //ゆえに input への入力に反応しないが、一度でもコールするとその後は反応する
  const handleWatch = () => {
    console.log("name(watch:NonReactive)", watch("name"))
  }

  //useWatch の戻り値変数は Reactive!!
  //ゆえに input への入力に反応して全体を再描画
  const watchName = useWatch({ control, name: "name", defaultValue: "田中" })
  const handleUseWatch = () => {
    console.log("name(useWatch:Reactive)", watchName)
  }

  useEffect(() => {
    console.log("useWatch", watchName)
    setValue("address", watchName + "X")
  }, [setValue, watchName])

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column
            padding="10px"
            gap="4px"
            alignItems="flex-start"
            justifyContent="flex-start"
            boxShadow="2px 2px 10px #ddd"
          >
            {/* name */}
            <Row width="100%" gap="10px" alignItems="center">
              <Div>名前</Div>
              <Input
                width="200px"
                defaultValue="田中"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                  pattern: /[^\s]*/,
                  validate: {
                    some: (item) => {
                      return item.length > 1 && item.at(0) === "A"
                    },
                  },
                })}
              />
              {errors.name && <span>{errors.name.message || "Error"}</span>}
            </Row>

            {/* address */}
            <Row width="100%" gap="10px" alignItems="center">
              <Div>住所</Div>
              <Input
                width="200px"
                defaultValue="東京"
                {...register("address", { required: true })}
              />
              {errors.address && <span>必須</span>}
            </Row>

            {/* age */}
            <Row width="100%" gap="10px" alignItems="center">
              <Div>年齢</Div>
              <Input width="200px" defaultValue="20" {...register("age")} />
            </Row>

            {/* act */}
            <Row width="100%" gap="10px" alignItems="center">
              <Div>有効</Div>
              <Checkbox
                width="200px"
                defaultValue="true"
                {...register("act")}
              />
            </Row>
            <Row width="100%" justifyContent="flex-end">
              <Button type="submit">保存</Button>
            </Row>
          </Column>
        </form>
        {/* handlers */}
        <Row gap="10px" alignItems="center">
          <Button onClick={handleWatch}>Watch</Button>
          <Button onClick={handleUseWatch}>UseWatch</Button>
        </Row>
      </Column>
      <DivPre>{inputData}</DivPre>
    </Row>
  )
}

const code = ``
