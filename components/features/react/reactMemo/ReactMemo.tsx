import React, { useState } from "react"
import { useFetch } from "../components/UseFetch"
import { ProgrammingLanguage } from "../../mock/programmingLanguage"
import { UseReturnType } from "@/components/type/type"
import { Div } from "@/components/common/styleDiv"
import { Button, Input } from "@/components/common/styleInput"
import { Flex } from "@chakra-ui/react"

let Count = 0
let CounterMemo = 0
let CounterParamPrimitive = 0
let CounterParamPrimitiveMemo = 0
let CounterParamArray = 0
let CounterParamArrayMemo = 0

export function UseReactMemo(): UseReturnType {
  const title = `React.Memo`
  const subTitle = `コンポーネントをmemo化することで再描画を抑制する。
1) 非memo化とmemo化の違い
2) 引数の有無、引数型の比較(PrimitiveとObject)
* 特にObjectは CustomHooks から返されるオブジェクトの参照であるにも関わらず、再描画抑制の効果がある点に注目すべし`

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

const ParentCompo = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0, 0])

  const [id, setId] = useState(7)

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value
    setId(value)
  }

  const { data } = useFetch({ id: 1 })

  const handle = () => {
    setCounters([
      Count,
      CounterMemo,
      CounterParamPrimitive,
      CounterParamPrimitiveMemo,
      CounterParamArray,
      CounterParamArrayMemo,
    ])
  }

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="200px" gap="4px">
        <Div>回数表示</Div>
        <Button onClick={handle}>Add</Button>
        <Div>Primitive引数(id)</Div>
        <Input onChange={handleChangeText} value={id} />
      </Flex>
      <Flex flexFlow="column" width="fit-content" gap="10px" padding="10px">
        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildNoParam />
          <Div fontSize="20px" color="lightGray">
            コール回数: {counters[0]}
          </Div>
        </Flex>
        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildNoParamMemo />
          <Div fontSize="20px" color="CadetBlue">
            コール回数: {counters[1]}
          </Div>
        </Flex>

        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildParamPrimitive id={id} />
          <Div fontSize="20px" color="lightGray">
            コール回数: {counters[2]}
          </Div>
        </Flex>
        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildParamPrimitiveMemo id={id} />
          <Div fontSize="20px" color="CadetBlue">
            コール回数: {counters[3]}
          </Div>
        </Flex>

        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildParamArray data={data} />
          <Div fontSize="20px" color="lightGray">
            コール回数: {counters[4]}
          </Div>
        </Flex>
        <Flex
          flexFlow="row"
          width="600px"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChildParamArrayMemo data={data} />
          <Div fontSize="20px" color="CadetBlue">
            コール回数: {counters[5]}
          </Div>
        </Flex>
      </Flex>
    </Flex>
  )
}

const code = `
const ParentCompo = () => {
  const { data } = useFetch({ id: 1 })  //Dummy Fetch

  return (
    <Flex flexFlow="column" >
      <ChildNoParam />
      <ChildNoParamMemo />
      <ChildParamPrimitive id={7} />
      <ChildParamPrimitiveMemo id={7} />
      <ChildParamArray data={data} />
      <ChildParamArrayMemo data={data} />
    </Flex>
  )
}
  
const ChildNoParam = () => {
  Count += 1
  return <Flex flexFlow="row" > 引数なし </Flex>
}
 
const ChildNoParamMemo = React.memo(() => {
  CounterMemo += 1
  return <Flex flexFlow="row" > 引数なし、Memo化 </Flex>
})
 
const ChildParamPrimitive = ({ id }: { id: number }) => {
  CounterParamPrimitive += 1
  return <Flex flexFlow="row" > 引数あり(id)、id:{id} </Flex>
}
 
const ChildParamPrimitiveMemo = React.memo(({ id }: { id: number }) => {
  CounterParamPrimitiveMemo += 1
  return <Flex flexFlow="row" > 引数あり(id)、Memo化、id:{id} </Flex>
})
 
const ChildParamArray = ({ data }: Props) => {
  CounterParamArray += 1
  return <Flex flexFlow="row" > 引数あり(配列)、Data数:{data.length} </Flex>
}
 
const ChildParamArrayMemo = React.memo(({ data }: Props) => {
  CounterParamArrayMemo += 1
  return <Flex flexFlow="row" > 引数あり(配列)、Memoあり、Data数:{data.length} </Flex>
})`

const ChildNoParam = () => {
  Count += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数なし
    </Flex>
  )
}

const ChildNoParamMemo = React.memo(() => {
  CounterMemo += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数なし、Memo化
    </Flex>
  )
})
ChildNoParamMemo.displayName = "ChildNoParamMemo"

type PropsPrimitive = { id: number | undefined }

const ChildParamPrimitive = ({ id }: PropsPrimitive) => {
  CounterParamPrimitive += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数あり(id)、id:{id}
    </Flex>
  )
}

const ChildParamPrimitiveMemo = React.memo(({ id }: PropsPrimitive) => {
  CounterParamPrimitiveMemo += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数あり(id)、Memo化、id:{id}
    </Flex>
  )
})
ChildParamPrimitiveMemo.displayName = "ChildParamPrimitiveMemo"

type PropsArray = { data: ProgrammingLanguage[] | undefined }

const ChildParamArray = ({ data }: PropsArray) => {
  CounterParamArray += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数あり(配列)、Data数:{data?.length ?? 0}
    </Flex>
  )
}

const ChildParamArrayMemo = React.memo(({ data }: PropsArray) => {
  CounterParamArrayMemo += 1

  return (
    <Flex
      flexFlow="row"
      width="350px"
      padding="10px"
      fontSize="18px"
      border="1px solid #aaa"
    >
      引数あり(配列)、Memo化、Data数:{data?.length ?? 0}
    </Flex>
  )
})
ChildParamArrayMemo.displayName = "ChildParamArrayMemo"
