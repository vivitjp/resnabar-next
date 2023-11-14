import { useCallback, useMemo, useState } from "react"
import { useCount2 } from "@/store/zustand/storeBasic"
import { UseReturnType } from "@/components/type/type"
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
  const subTitle = `依存配列がObjectか、Objectの内部のPremitiveかに関わらず、再描画を抑制する効果がある。
1) 回数表示カウンタをクリック
2) さらに回数表示カウンタをクリックしつづけても再描画は行われない。`

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
const code = `const Component = () => {
  //■ Zustand
  const countUp = useCount((state) => state.countUp)
  const count = useCount((state) => state.count)
  
  //■ RenderHooks
  const { RenderInput } = useInputForMemo()
  
  //■ fetch
  const { data } = useFetchMock({ id: 1 })
  
  //■ useMemo1
  const memorizedData1 = useMemo(() => {
    if (!data) return undefined
    countOutside1++
    return data.map((item) => ({ ...item }))
  }, [data]) <-- 依存配列がオブジェクト
  
  //■ useMemo2
  const memorizedData2 = useMemo(() => {
    if (!data) return undefined
    countOutside2++
    return data.map((item) => ({ ...item }))
  }, [data?.[0].id]) <--依存配列に最下層の変数を入れても同じ
}`

let countOutside1 = 0
let countOutside2 = 0

const ParentCompo = () => {
  const [counters, setCounters] = useState<number[]>([0, 0])
  const [fetchCounter, setFetchCounters] = useState<number>(0)

  const countUp = useCount2((state) => state.countUp)
  const count = useCount2((state) => state.count)

  const { RenderInput } = useInputForMemo()

  const { data, getCount } = useFetchMock<ProgrammingLanguage>({
    id: 1,
    incomingData: programmingLanguage,
  })

  const memorizedData1 = useMemo(() => {
    if (!data) return undefined
    countOutside1++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
  }, [data])

  const memorizedData2 = useMemo(() => {
    if (!data) return undefined
    countOutside2++
    return data.map((item) => ({ ...item, id: item.id * 2 }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.[0].id])

  const handle = () => {
    setFetchCounters(getCount())
    setCounters([countOutside1, countOutside2])
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
        <Row gap="10px" alignItems="center">
          <Button onClick={handle}>Fetchデータ</Button>
          <Div fontSize="18px">Fetch回数: {fetchCounter}</Div>
        </Row>

        <Column width="300px" gap="10px" border="1px solid #aaa" padding="10px">
          <Title>再描画チェック用入力: renderHooks Input</Title>
          <Column width="200px">{RenderInput}</Column>
          <Column width="160px" gap="10px">
            <Title>再描画チェック: zustand</Title>
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
      </Column>
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Column gap="4px">
            useMemo1: 依存配列 [data]
            <Table<ProgrammingLanguage>
              data={memorizedData1}
              callback={displayCB}
            />
          </Column>
          <Column>
            <Div fontSize="18px">データ生成回数: {counters[0]}</Div>
          </Column>
        </Row>
        <Row width="400px" justifyContent="space-between" alignItems="center">
          <Column gap="4px">
            useMemo2: 依存配列 [data?.[0].id]
            <Table<ProgrammingLanguage>
              data={memorizedData2}
              callback={displayCB}
            />
          </Column>
          <Column>
            <Div fontSize="18px">データ生成回数: {counters[1]}</Div>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}
