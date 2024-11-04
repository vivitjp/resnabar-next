import { useCallback, useMemo, useState } from "react"
import { useCount2 } from "@/store/zustand/storeBasic"
import { UseReturnType } from "@/components/type/type"
import { Title } from "@/components/common/styleDivChakra"
import { Button } from "@/components/common/styleInputChakra"
import { Table } from "@/components/common/Table"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "../../mock/programmingLanguage"
import { useFetchMock } from "../components/UseFetchMock"
import { useInputForMemo } from "./components/useInputForMemo"
import { Box, Flex } from "@chakra-ui/react"

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
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="400px" gap="10px">
        <Flex flexFlow="row" gap="10px" alignItems="center">
          <Button onClick={handle}>Fetchデータ</Button>
          <Box fontSize="18px">Fetch回数: {fetchCounter}</Box>
        </Flex>

        <Flex
          flexFlow="column"
          width="300px"
          gap="10px"
          border="1px solid #aaa"
          padding="10px"
        >
          <Title>再描画チェック用入力: renderHooks Input</Title>
          <Flex flexFlow="column" width="200px">
            {RenderInput}
          </Flex>
          <Flex flexFlow="column" width="160px" gap="10px">
            <Title>再描画チェック: zustand</Title>
            <Flex flexFlow="row" alignItems="center" gap="20px">
              <Button width="100px" onClick={countUp}>
                Count
              </Button>
              <Flex flexFlow="column" padding="10px" fontSize="24px">
                {count}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexFlow="column" width="fit-content" gap="10px" padding="10px">
        <Flex
          flexFlow="row"
          width="400px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexFlow="column" gap="4px">
            useMemo1: 依存配列 [data]
            <Table<ProgrammingLanguage>
              data={memorizedData1}
              callback={displayCB}
            />
          </Flex>
          <Flex flexFlow="column">
            <Box fontSize="18px">データ生成回数: {counters[0]}</Box>
          </Flex>
        </Flex>
        <Flex
          flexFlow="row"
          width="400px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexFlow="column" gap="4px">
            useMemo2: 依存配列 [data?.[0].id]
            <Table<ProgrammingLanguage>
              data={memorizedData2}
              callback={displayCB}
            />
          </Flex>
          <Flex flexFlow="column">
            <Box fontSize="18px">データ生成回数: {counters[1]}</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
