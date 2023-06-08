import { useCallback, useMemo, useState } from "react"
import { useCount2 } from "@/store/zustand/storeBasic"
import { UseReturnType } from "@/components/common/type/type"
import { Row, Column, Title, Div } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { Table } from "@/components/common/Table"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "../../mock/programmingLanguage"
import { useFetchMock } from "../components/UseFetchMock"
import { useInputForMemo } from "./components/useInputForMemo"

export function UseMemo(): UseReturnType {
  const title = `useMemo`
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
const code = `■ Zustand
const countUp = useCount((state) => state.countUp)
const count = useCount((state) => state.count)
 
■ RenderHooks
const { RenderInput } = useInputForMemo()
 
■ fetch
const { data } = useFetchMock({ id: 1 })
 
■ useMemo1
const reData1 = useMemo(() => {
  countUndefined1++
  if (!data) return undefined
  countWithData1++
  return data.map((item) => ({ ...item }))
}, [data]) <-- 依存配列がオブジェクト
 
■ useMemo2
const reData2 = useMemo(() => {
  countUndefined2++
  if (!data) return undefined
  countWithData2++
  return data.map((item) => ({ ...item }))
}, [data?.[0].id]) <--依存配列に最下層の変数を入れても同じ`

let countUndefined1 = 0
let countWithData1 = 0
let countUndefined2 = 0
let countWithData2 = 0

const ParentCompo = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])
  const [fetchCounter, setFetchCounters] = useState<number>(0)

  const countUp = useCount2((state) => state.countUp)
  const count = useCount2((state) => state.count)

  const { RenderInput } = useInputForMemo()

  const { data, getCount } = useFetchMock<ProgrammingLanguage>({
    id: 1,
    incomingData: programmingLanguage,
  })

  const reData1 = useMemo(() => {
    console.log("reData1")

    countUndefined1++
    if (!data) return undefined
    countWithData1++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
  }, [data])

  const reData2 = useMemo(() => {
    console.log("reData2")

    countUndefined2++
    if (!data) return undefined
    countWithData2++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.[0].id])

  const handle = () => {
    setFetchCounters(getCount())
    setCounters([
      countUndefined1,
      countWithData1,
      countUndefined2,
      countWithData2,
    ])
  }

  const displayCB = useCallback((item: ProgrammingLanguage) => {
    return (
      <>
        {item.id} : {item.name} : {item.difficulty}
      </>
    )
  }, [])

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="400px" gap="10px">
        <Column>
          <Button onClick={handle}>回数表示</Button>
        </Column>

        <Title>fetch コール回数</Title>
        <Column>
          <Div fontSize="18px">Fetch回数: {fetchCounter}</Div>
        </Column>

        <Title>renderHooks Input</Title>
        <Column width="200px">{RenderInput}</Column>
        <Column width="160px" gap="10px">
          <Title>zustand</Title>
          <Row alignItems="center" gap="20px">
            <Button width="100px" onClick={countUp}>
              Count
            </Button>
            <Column padding="10px" fontSize="24px">
              {count}
            </Column>
          </Row>
        </Column>
      </Column>
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Table<ProgrammingLanguage> data={reData1} callback={displayCB} />
          <Column>
            <Div fontSize="18px">countUndefined1: {counters[0]}</Div>
            <Div fontSize="18px">countWithData1: {counters[1]}</Div>
          </Column>
        </Row>
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Table<ProgrammingLanguage> data={reData2} callback={displayCB} />
          <Column>
            <Div fontSize="18px">countUndefined2: {counters[2]}</Div>
            <Div fontSize="18px">countWithData2: {counters[3]}</Div>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}
