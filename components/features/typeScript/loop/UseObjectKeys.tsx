import { useCallback } from "react"
import { UseReturnType } from "@/components/type/type"
import { Flex } from "@chakra-ui/react"
import { Table } from "@/components/common/Table"
import { Data, data } from "./baseData"

export function UseObjectKeys(): UseReturnType {
  const title = `TypeScript: Object.keys()`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}
const code = `type Keys = keyof Data
const keys = (Object.keys(data) as Keys[]).map((item) => item)`

const ParentCompo = () => {
  type Keys = keyof Data
  const keys = (Object.keys(data) as Keys[]).map((item) => item)

  const displayDataArray = useCallback((item: Keys) => {
    return <>{item}</>
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
          <Table<Keys> data={keys} callback={displayDataArray} />
        </Flex>
      </Flex>
    </Flex>
  )
}
