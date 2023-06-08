import { UseReturnType } from "@/components/common/type/type"
import { Row } from "@/components/common/styleDiv"
import { Input } from "@/components/common/styleInput"
import { useSubscribeStore } from "./UseZustandSubscribe"

export function UseZustandSubscribeComponent(): UseReturnType {
  return {
    title: `コンポーネント上の使用比較`,
    subTitle:
      "変数の取り出し方によって通常のストア変数にもなり、ノンリアクティブにもなる",
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandNonReactive />,
    codeKeyType: "JSTS",
  }
}

const code = `// ■ 通常のストアのように変数を取り出す(リアクティブ!!)
const ComponentInside = () => {
  const nameInside = useSubscribeStore((state) => state.name)
 
  return (
    <Row>
      リアクティブ
      <Row> {nameInside} </Row>
    </Row>
  )
}
  
// ■ getState()で取得(NonReactive)
const ComponentOutside = () => {
  const nameOutside = useSubscribeStore.getState().name
 
  const handleName = (e:...) => {
    useSubscribeStore.setState({ name: e.currentTarget.value }) //値上書きは可能だが...
  }
 
  return (
    <Row>
      Nonリアクティブ
      <Row>
        <Input onChange={handleName} value={nameOutside} />
        <Row> {nameOutside} </Row> //この値は不変(NonReactive)
      </Row>
    </Row>
  )
}`

const ZustandNonReactive = () => {
  return (
    <Row gap="10px">
      <ComponentOutside />
      <ComponentInside />
    </Row>
  )
}

// ■ 通常のストアのように変数を取り出す(リアクティブ!!)
const ComponentInside = () => {
  const nameInside = useSubscribeStore((state) => state.name)

  return (
    <Row fontSize="18px" padding="5px" gap="20px" alignItems="center">
      リアクティブ
      <Row fontSize="24px" padding="5px" border="1px solid #aaa">
        {nameInside}
      </Row>
    </Row>
  )
}

// ■ getState()で取得(NonReactive)
const ComponentOutside = () => {
  const nameOutside = useSubscribeStore.getState().name

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //値の上書きは可能
    useSubscribeStore.setState({ name: e.currentTarget.value })
  }

  return (
    <Row fontSize="18px" gap="10px" alignItems="center">
      Nonリアクティブ
      <Row fontSize="18px" padding="5px" gap="20px" border="1px solid #aaa">
        <Input onChange={handleName} value={nameOutside} width={"160px"} />
        <Row fontSize="24px" padding="5px">
          {nameOutside} {/* この値は不変(NonReactive)  */}
        </Row>
      </Row>
    </Row>
  )
}
