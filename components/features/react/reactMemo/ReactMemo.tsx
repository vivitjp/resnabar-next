import React, { useState } from "react"
import { useFetch } from "../components/UseFetch"
import { ProgrammingLanguage } from "../../mock/programmingLanguage"
import { UseReturnType } from "@/components/common/type/type"
import { Row, Column, Div } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"

let Count: number = 0
let CounterMemo: number = 0
let CounterParamPrimitive: number = 0
let CounterParamPrimitiveMemo: number = 0
let CounterParamArray: number = 0
let CounterParamArrayMemo: number = 0

export function UseReactMemo(): UseReturnType {
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

const ParentCompo = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0, 0])

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
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="200px"></Column>
      <Column width="200px">
        <Button onClick={handle}>回数表示</Button>
      </Column>
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildNoParam />
          <Div fontSize="20px">コール回数: {counters[0]}</Div>
        </Row>
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildNoParamMemo />
          <Div fontSize="20px">コール回数: {counters[1]}</Div>
        </Row>

        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildParamPrimitive id={7} />
          <Div fontSize="20px">コール回数: {counters[2]}</Div>
        </Row>
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildParamPrimitiveMemo id={7} />
          <Div fontSize="20px">コール回数: {counters[3]}</Div>
        </Row>

        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildParamArray data={data} />
          <Div fontSize="20px">コール回数: {counters[4]}</Div>
        </Row>
        <Row width="500px" justifyContent="space-between" alignItems="center">
          <ChildParamArrayMemo data={data} />
          <Div fontSize="20px">コール回数: {counters[5]}</Div>
        </Row>
      </Column>
    </Row>
  )
}

const code = `
const ParentCompo = () => {
  const { data } = useFetch({ id: 1 }) //Dummy Fetch

  return (
    <Column>
      <ChildNoParam />
      <ChildNoParamMemo />
    </Column>
  )
}
  
const ChildNoParam = () => {
  Count += 1
  return <Row> 引数なし </Row>
}
 
const ChildNoParamMemo = React.memo(() => {
  CounterMemo += 1
  return <Row> 引数なし、Memo化 </Row>
})
 
const ChildParamPrimitive = ({ id }: { id: number }) => {
  CounterParamPrimitive += 1
  return <Row> 引数あり(id)、id:{id} </Row>
}
 
const ChildParamPrimitiveMemo = React.memo(({ id }: { id: number }) => {
  CounterParamPrimitiveMemo += 1
  return <Row> 引数あり(id)、Memo化、id:{id} </Row>
})
 
const ChildParamArray = ({ data }: Props) => {
  CounterParamArray += 1
  return <Row> 引数あり(配列)、Data数:{data.length} </Row>
}
 
const ChildParamArrayMemo = React.memo(({ data }: Props) => {
  CounterParamArrayMemo += 1
  return <Row> 引数あり(配列)、Memoあり、Data数:{data.length} </Row>
})`

const ChildNoParam = () => {
  Count += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数なし
    </Row>
  )
}

const ChildNoParamMemo = React.memo(() => {
  CounterMemo += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数なし、Memo化
    </Row>
  )
})
ChildNoParamMemo.displayName = "ChildNoParamMemo"

type PropsPrimitive = { id: number | undefined }

const ChildParamPrimitive = ({ id }: PropsPrimitive) => {
  CounterParamPrimitive += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数あり(id)、id:{id}
    </Row>
  )
}

const ChildParamPrimitiveMemo = React.memo(({ id }: PropsPrimitive) => {
  CounterParamPrimitiveMemo += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数あり(id)、Memo化、id:{id}
    </Row>
  )
})
ChildParamPrimitiveMemo.displayName = "ChildParamPrimitiveMemo"

type PropsArray = { data: ProgrammingLanguage[] | undefined }

const ChildParamArray = ({ data }: PropsArray) => {
  CounterParamArray += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数あり(配列)、Data数:{data?.length ?? 0}
    </Row>
  )
}

const ChildParamArrayMemo = React.memo(({ data }: PropsArray) => {
  CounterParamArrayMemo += 1

  return (
    <Row width="350px" padding="10px" fontSize="18px" border="1px solid #aaa">
      引数あり(配列)、Memo化、Data数:{data?.length ?? 0}
    </Row>
  )
})
ChildParamArrayMemo.displayName = "ChildParamArrayMemo"
