import { UseReturnType } from "@/components/type/type"
import { BorderDiv, Column, Row } from "@/components/common/styleDiv"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCounter,
  setCounter,
  resetCounter,
  incrementAsync,
} from "@/redux/slices/counterSlice"
import { Button, Input } from "@/components/common/styleInput"
import { useState } from "react"

export function UseReduxAsyncThunk(): UseReturnType {
  const title = `同期・非同期値取得`

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
const [amount, setAmount] = useState<number>(0)
 
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
  const [amount, setAmount] = useState<number>(0)

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
      <Row padding="10px" gap="10px" justifyContent="flex-start">
        <Input
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <Button onClick={() => dispatch(incrementAsync(amount))}>
          非同期加算
        </Button>
      </Row>
    </Column>
  )
}
