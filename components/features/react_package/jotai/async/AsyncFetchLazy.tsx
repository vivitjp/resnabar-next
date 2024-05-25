import { Div, DivPre, Row } from "@/components/common/styleDiv"
import { useAtom } from "jotai"
import { Button } from "@/components/common/styleInput"
import { fetchUrlLazyAtom } from "../basic/atoms"
import { UseReturnType } from "@/components/type/type"

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
    <Row
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <Row padding="5px" alignItems="center" gap="10px">
        <Div width="200px">非同期データ(要JsonSever起動)</Div>
        <Button onClick={handleFetch}>Lazy Fetch</Button>
      </Row>
      <DivPre fontSize="14px" padding="5px">
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Row>
  )
}

const code = `import { useAtom } from "jotai"
import { fetchUrlLazyAtom } from "../basic/atoms"
 
const AsyncFetchLazy = () => {
  const [data, fetch] = useAtom(fetchUrlLazyAtom)
 
  const handleFetch = () => { fetch() }
 
  return (
    <Row>
      <Row>
        <Div>非同期データ(要JsonSever起動)</Div>
        <Button onClick={handleFetch}>Lazy Fetch</Button>
      </Row>
      <DivPre>
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Row>
  )
}`
