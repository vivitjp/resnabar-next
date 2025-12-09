import { UseReturnType } from "@/components/type/type"
import { BorderBox } from "@/components/common/styleDivChakra"

import { Button, Input } from "@/components/common/styleInputChakra"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  selectCounter,
  resetCounter,
  setCounter,
  incrementAsync,
} from "@/store/reduxToolkit/slices/counterSlice"
import { Flex } from "@chakra-ui/react"

export function UseReduxAsyncThunk(): UseReturnType {
  const title = `Redux Toolkit AsyncThunk 同期・非同期値取得`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
  }
}
const code = `
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  selectCounter,
  resetCounter,
  setCounter,
  incrementAsync,
} from "@/store/reduxToolkit/slices/counterSlice"

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(selectCounter)
  const [amount, setAmount] = useState<number>(2)
  
  return (
    <Flex flexFlow="column" >
      <Flex flexFlow="row" >
        {counter}
        <Button onClick={() => dispatch(resetCounter())}>リセット</Button>
      </Flex>
      <Flex flexFlow="row" >
        <Button onClick={() => dispatch(setCounter(counter + 1))}>
          同期加算
        </Button>
      </Flex>
      <Flex flexFlow="row" >
        <Input value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <Button onClick={() => dispatch(incrementAsync(amount))}>
          非同期加算
        </Button>
      </Flex>
    </Flex>
  )
}`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(selectCounter)
  const [amount, setAmount] = useState<number>(2)

  return (
    <Flex flexFlow="column" gap="10px">
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="flex-start"
      >
        <BorderBox width="160px">{counter}</BorderBox>
        <Button onClick={() => dispatch(resetCounter())}>リセット</Button>
      </Flex>
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="flex-start"
      >
        <Button onClick={() => dispatch(setCounter(counter + 1))}>
          同期加算
        </Button>
      </Flex>
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Button onClick={() => dispatch(incrementAsync(amount))}>
          非同期加算
        </Button>
        加算値入力：
        <Input
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </Flex>
    </Flex>
  )
}
