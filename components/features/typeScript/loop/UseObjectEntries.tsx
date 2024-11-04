import { useCallback } from "react"
import { UseReturnType } from "@/components/type/type"
import { Flex } from "@chakra-ui/react"
import { Data, data } from "./baseData"
import { Table } from "@/components/common/Table"

export function UseObjectEntries(): UseReturnType {
  const title = `TypeScript: Object.entries()`
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
const code = `type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>
type Entries = [keyof Data, Values]

const entries = (Object.entries(data) as Entries[]).map((item) => ({
  ...item,
}))
`

type GetValues<T> = T extends { [K in keyof T]: infer U } ? U : never
type Values = GetValues<Data>
type Entries = [keyof Data, Values]

const ParentCompo = () => {
  const entries = (Object.entries(data) as Entries[]).map((item) => ({
    ...item,
  }))

  const displayDataArray = useCallback((item: Entries) => {
    return (
      <>
        {item[0]} : {item[1]}
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
      <Flex flexFlow="column" width="fit-content" gap="10px" padding="10px">
        <Flex
          flexFlow="row"
          width="400px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Table<Entries> data={entries} callback={displayDataArray} />
        </Flex>
      </Flex>
    </Flex>
  )
}
