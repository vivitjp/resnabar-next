import { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Div } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"

//以下のような primitive な変数を import することはNG
//import { valueInLib } from "@/library/libs/variables"

//以下のような 参照のみ import することはOK
import { valueArrayInLib } from "@/library/libs/variables"
import { Flex } from "@chakra-ui/react"

export function UseVariables(): UseReturnType {
  const title = `React: Variables`
  const subTitle = `React コンポーネント内外の定義変数の値について。
同じモジュールを違うコンポーネントから呼び出した場合、useState管理下の変数は再描画の度に値が初期化されるが、コンポーネント外に定義された let系変数は値が「static」な動きをする。
変数static1 と 変数static2 を切り替えながら変数値の変化を観察すること`

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
const code = `【library\\libs\\variables.ts】
export const valueArrayInLib: number[] = []
// eslint-disable-next-line prefer-const
// import 先で変更が不可のため、let の意味がない
export let valueInLib = 0

// 定数の export は問題なし
export const MAX_NUMBER = 100
 
【以下呼び出し側コード】
//primitive な変数を値変更目的で import することはNG
//import { valueInLib } from "@/library/libs/variables"
 
//参照変数を import することはOK
//■ 外部のライブラリで宣言、importされた変数
import { valueArrayInLib } from "@/library/libs/variables"
 
//■ コンポーネント外に宣言された変数
let valueOutside = 0
 
const ParentCompo = () => {
  //■ useStateで宣言された変数
  const [valueInside, setValueInside] = useState<number>(0)
 
  useEffect(() => {
    valueOutside++
    setValueInside((prev) => prev + 1)
    //[NG] valueInLib++
    valueArrayInLib[0] = valueArrayInLib[0]+1
  }, [])
 
  const handleCountUp = () => {
    valueOutside++
    setValueInside((prev) => prev + 1)
    //[NG] valueInLib++
    valueArrayInLib[0] = valueArrayInLib[0]+1
  }
 
  return (
    <Button onClick={handleCountUp}>Count Up</Button>
    <Div> コンポ外(let変数): {valueOutside} </Div>
    <Div> コンポ内(useState変数): {valueInside} </Div>
    <Div> Lib内変数: {valueArrayInLib[0]} </Div>
  )
}`

let valueOutside = 0

const ParentCompo = () => {
  const [valueInside, setValueInside] = useState<number>(0)

  useEffect(() => {
    valueOutside++
    setValueInside((prev) => prev + 1)
    valueArrayInLib[0] = valueArrayInLib[0] + 1
  }, [])

  const handleCountUp = () => {
    valueOutside++
    setValueInside((prev) => prev + 1)
    valueArrayInLib[0] = valueArrayInLib[0] + 1
  }

  return (
    <Flex flexFlow="row" padding="10px" gap="10px" justifyContent="flex-start">
      <Flex flexFlow="row">
        <Flex flexFlow="row" width="150px" alignItems="center">
          <Button onClick={handleCountUp}>Count Up</Button>
        </Flex>
        <Flex flexFlow="column" gap="10px">
          <Flex flexFlow="row" fontSize="18px">
            <Div width="400px">■ コンポーネント外に宣言された変数:</Div>
            <Div>{valueOutside}</Div>
          </Flex>

          <Flex flexFlow="row" fontSize="18px">
            <Div width="400px">■ useStateで宣言された変数:</Div>
            <Div>{valueInside}</Div>
          </Flex>

          <Flex flexFlow="row" fontSize="18px">
            <Div width="400px">■ 外部のライブラリで宣言、importされた変数:</Div>
            <Div>{valueArrayInLib[0]}</Div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
