import { DivPre } from "@/components/common/styleDivChakra"
import { useAtom } from "jotai"
import { Button } from "@/components/common/styleInputChakra"
import { fetchUrlLazyAtom } from "./atoms"
import { UseReturnType } from "@/components/type/type"
import { Box, Flex } from "@chakra-ui/react"

export function AsyncFetchLazyFetch(): UseReturnType {
  const title = `非同期(Lazy) Atom`

  const jsx = <AsyncFetchLazy />
  return {
    title,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "Jotai",
  }
}

const AsyncFetchLazy = () => {
  const [data, fetch] = useAtom(fetchUrlLazyAtom)

  const handleFetch = () => {
    fetch()
  }

  return (
    <Flex
      flexFlow="row"
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
        <Box width="200px">非同期データ(要JsonSever起動)</Box>
        <Button onClick={handleFetch}>Lazy Fetch</Button>
      </Flex>
      <DivPre fontSize="14px" padding="5px">
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Flex>
  )
}

const code = `import { useAtom } from "jotai"
import { fetchUrlLazyAtom } from "../basic/atoms"
 
const AsyncFetchLazy = () => {
  const [data, fetch] = useAtom(fetchUrlLazyAtom)
 
  const handleFetch = () => { fetch() }
 
  return (
    <Flex flexFlow="row" >
      <Flex flexFlow="row" >
        <Box>非同期データ(要JsonSever起動)</Box>
        <Button onClick={handleFetch}>Lazy Fetch</Button>
      </Flex>
      <DivPre>
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Flex>
  )
}`
