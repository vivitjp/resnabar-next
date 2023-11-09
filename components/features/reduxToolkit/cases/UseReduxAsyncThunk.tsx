import { UseReturnType } from "@/components/type/type"
import { BorderDiv, Column, Row } from "@/components/common/styleDiv"

import { Button, Input } from "@/components/common/styleInput"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  selectCounter,
  resetCounter,
  setCounter,
  incrementAsync,
} from "@/store/reduxToolkit/slices/counterSlice"

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
const code = `const dispatch = useAppDispatch()
const counter = useAppSelector(selectCounter)
const [amount, setAmount] = useState<number>(2)
 
return (
  <Column>
    <Row>
      {counter}
      <Button onClick={() => dispatch(resetCounter())}>リセット</Button>
    </Row>
    <Row>
      <Button onClick={() => dispatch(setCounter(counter + 1))}>
        同期加算
      </Button>
    </Row>
    <Row>
      <Input value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <Button onClick={() => dispatch(incrementAsync(amount))}>
        非同期加算
      </Button>
    </Row>
  </Column>
)`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(selectCounter)
  const [amount, setAmount] = useState<number>(2)

  return (
    <Column gap="10px">
      <Row padding="10px" gap="10px" justifyContent="flex-start">
        <BorderDiv width="160px">{counter}</BorderDiv>
        <Button onClick={() => dispatch(resetCounter())}>リセット</Button>
      </Row>
      <Row padding="10px" gap="10px" justifyContent="flex-start">
        <Button onClick={() => dispatch(setCounter(counter + 1))}>
          同期加算
        </Button>
      </Row>
      <Row
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
      </Row>
    </Column>
  )
}
