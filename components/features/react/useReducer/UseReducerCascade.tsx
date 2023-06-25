import { useReducer, MouseEvent } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Title } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { StateItem, reducerItem } from "./reducer"

export function UseReducerCascade(): UseReturnType {
  const title = `NG: useReducer(親子コンポーネント)`
  const subTitle =
    "子コンポーネントへの分割宣言は無効。子コンポーネントごとに初期値で初期化されるので zustand のようなコンポーネント分割は不可"

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
    codeFold: true,
  }
}
const code = `const ParentCompo = () => {
  return (
    <Row>
      <Column>
        <Title>useReducer(cascaded)</Title>
        <Row>
          <ChildCompoAdd />
          <ChildCompoSubtract />
          <ChildCompoReset />
          <ChildCompoState />
        </Row>
      </Column>
    </Row>
  )
}
 
const initialState: StateItem = { item: 0 }
 
const ChildCompoAdd = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)
  const countAdd = () => {
    dispatch({ type: "ADD", payload: { item: 1 } })
  }
  return <Button onClick={countAdd}> Add </Button>
}
 
const ChildCompoSubtract = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)
  const countSubtract = () => {
    dispatch({ type: "SUBTRACT", payload: { item: 1 } })
  }
  return <Button onClick={countSubtract}> Subtract </Button>
}
 
const ChildCompoReset = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)
  const countReset = () => {
    dispatch({ type: "RESET" })
  }
  return <Button onClick={countReset}> Reset </Button>
}
 
const ChildCompoState = () => {
  const [state] = useReducer(reducerItem, initialState)
  return <Column> {state.item} </Column>
}
`

const initialState: StateItem = {
  item: 0,
}

const ParentCompo = () => {
  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="400px" gap="10px">
        <Title>useReducer(cascaded)</Title>
        <Row alignItems="center" gap="20px">
          <ChildCompoAdd />
          <ChildCompoSubtract />
          <ChildCompoReset />
          <ChildCompoState />
        </Row>
      </Column>
    </Row>
  )
}

const ChildCompoAdd = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)

  const countAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "ADD",
      payload: { item: 1 },
    })
  }

  return (
    <Button width="100px" onClick={countAdd}>
      Add
    </Button>
  )
}

const ChildCompoSubtract = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)

  const countSubtract = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "SUBTRACT",
      payload: { item: 1 },
    })
  }

  return (
    <Button width="100px" onClick={countSubtract}>
      Subtract
    </Button>
  )
}

const ChildCompoReset = () => {
  const [_, dispatch] = useReducer(reducerItem, initialState)

  const countReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "RESET",
    })
  }

  return (
    <Button width="100px" onClick={countReset}>
      Reset
    </Button>
  )
}

const ChildCompoState = () => {
  const [state] = useReducer(reducerItem, initialState)

  return (
    <Column padding="10px" fontSize="24px">
      {state.item}
    </Column>
  )
}
