import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { DivPre, BorderBox } from "@/components/common/styleDivChakra"
import { Button, Submit } from "@/components/common/styleInputChakra"
import { ControlInput } from "./ControlInput"
import { useMemo, useState } from "react"
import { Box, Flex } from "@chakra-ui/react"

type GFieldType = Record<string, unknown>

//Data型
type Person = {
  name: string
  age: number
  act: number //Chakra Checkbox 型
}

//Data デフォルト値
const defaultValues = {
  name: "佐藤",
  age: 55,
  act: 0,
}

//Data 制約
const constrain: Record<keyof Person, GFieldType> = {
  name: {
    required: "必須項目です",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  age: {
    required: "必須項目です",
    min: { value: 1, message: "1以上の数値です" },
    validate: (item: string) => !!Number(item),
    validateMessage: "数値のみです",
  },
  act: {},
}

export const ControlForm = () => {
  const method = useForm<Person>({ defaultValues, mode: "onBlur" })

  const {
    watch,
    control,
    handleSubmit,
    formState: { isValid },
  } = method

  const [inputData, setInputData] = useState("")

  const onSubmit: SubmitHandler<Person> = (data) => {
    setInputData(JSON.stringify(data, undefined, 2))
  }

  //watch は 非Reactive
  const [calcAgeMan, setCalcAgeMan] = useState(0)
  const handleWatch = () => {
    const age = Number(watch("age")) * 3 || 0
    setCalcAgeMan(age)
  }

  //useWatch の戻り値変数は Reactive(再描画に注意)
  const watchAge = useWatch({ control, name: "age" })
  const ageCalcAuto = useMemo(() => (Number(watchAge) || 0) * 2, [watchAge])

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" padding="10px" gap="10px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            flexFlow="column"
            padding="10px"
            gap="4px"
            alignItems="flex-start"
            justifyContent="flex-start"
            boxShadow="2px 2px 10px #ddd"
          >
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <ControlInput
                method={method}
                target={"name"}
                title={"氏名"}
                constrain={constrain.name}
              />
            </Flex>

            {/* age */}
            <Flex
              flexFlow="row"
              width="100%"
              gap="10px"
              alignItems="flex-start"
            >
              <ControlInput
                method={method}
                target={"age"}
                title={"年齢"}
                constrain={constrain.age}
              />
            </Flex>

            <Flex flexFlow="row" width="100%" gap="10px" alignItems="center">
              <Box width="60px">年(自動)</Box>
              <BorderBox width="200px">{ageCalcAuto}</BorderBox>
            </Flex>

            <Flex flexFlow="row" width="100%" gap="10px" alignItems="center">
              <Button width="60px" onClick={handleWatch} padding="0px">
                年(手動)
              </Button>
              <BorderBox width="200px">{calcAgeMan}</BorderBox>
            </Flex>

            {/* act */}
            <Flex flexFlow="row" width="100%" gap="10px" alignItems="center">
              <ControlInput
                method={method}
                target={"act"}
                title={"有効"}
                constrain={constrain.act}
              />
            </Flex>
            <Flex flexFlow="row" width="100%" justifyContent="flex-end">
              <Submit value={"保存"} disabled={!isValid} />
            </Flex>
          </Flex>
        </form>
      </Flex>
      <DivPre fontSize="14px" padding="5px">
        {inputData}
      </DivPre>
    </Flex>
  )
}
