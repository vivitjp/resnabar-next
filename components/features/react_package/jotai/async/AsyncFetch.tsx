import { DivPre, Div, Row } from "@/components/common/styleDiv"
import { useAtom } from "jotai"
import { fetchUrlAtom } from "../basic/atoms"
import { UseReturnType } from "@/components/type/type"

export function JotaiAsyncFetch(): UseReturnType {
  const title = `非同期 Atom`

  const jsx = <AsyncFetch />
  return {
    title,
    code,
    codeFold: true,
    options: [],
    jsx,
    codeKeyType: "Jotai",
  }
}

const AsyncFetch = () => {
  const [data] = useAtom(fetchUrlAtom)

  return (
    <Row
      padding="5px"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
    >
      <Row padding="5px" alignItems="center" gap="10px">
        <Div width="200px">非同期データ(要JsonSever起動)</Div>
      </Row>
      <DivPre fontSize="14px" padding="5px">
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Row>
  )
}

const code = `import { useAtom } from "jotai"
import { fetchUrlAtom } from "../basic/atoms"
 
const AsyncFetch = () => {
  const [data] = useAtom(fetchUrlAtom)
 
  return (
    <Row>
      <Div>非同期データ(要JsonSever起動)</Div>
      <DivPre>
        {JSON.stringify(data, undefined, 2)}
      </DivPre>
    </Row>
  )
}
`
