import { UseReturnType } from "@/components/type/type"
import { Input } from "@/components/common/styleInput"
import { useSubscribeStore } from "./UseZustandSubscribe"
import { Flex } from "@chakra-ui/react"

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
    <Flex flexFlow="row" >
      リアクティブ
      <Flex flexFlow="row" > {nameInside} </Flex>
    </Flex>
  )
}
  
// ■ getState()で取得(NonReactive)
const ComponentOutside = () => {
  const nameOutside = useSubscribeStore.getState().name
 
  const handleName = (e:...) => {
    useSubscribeStore.setState({ name: e.currentTarget.value }) //値上書きは可能だが...
  }
 
  return (
    <Flex flexFlow="row" >
      Nonリアクティブ
      <Flex flexFlow="row" >
        <Input onChange={handleName} value={nameOutside} />
        <Flex flexFlow="row" > {nameOutside} </Flex> //この値は不変(NonReactive)
      </Flex>
    </Flex>
  )
}`

const ZustandNonReactive = () => {
  return (
    <Flex flexFlow="row" gap="10px">
      <ComponentOutside />
      <ComponentInside />
    </Flex>
  )
}

// ■ 通常のストアのように変数を取り出す(リアクティブ!!)
const ComponentInside = () => {
  const nameInside = useSubscribeStore((state) => state.name)

  return (
    <Flex
      flexFlow="row"
      fontSize="18px"
      padding="5px"
      gap="20px"
      alignItems="center"
    >
      リアクティブ
      <Flex
        flexFlow="row"
        fontSize="24px"
        padding="5px"
        border="1px solid #aaa"
      >
        {nameInside}
      </Flex>
    </Flex>
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
    <Flex flexFlow="row" fontSize="18px" gap="10px" alignItems="center">
      Nonリアクティブ
      <Flex
        flexFlow="row"
        fontSize="18px"
        padding="5px"
        gap="20px"
        border="1px solid #aaa"
      >
        <Input onChange={handleName} value={nameOutside} width={"160px"} />
        <Flex flexFlow="row" fontSize="24px" padding="5px">
          {nameOutside} {/* この値は不変(NonReactive)  */}
        </Flex>
      </Flex>
    </Flex>
  )
}
