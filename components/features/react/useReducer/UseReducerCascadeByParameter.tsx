import { useReducer, MouseEvent, Dispatch } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Title } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { ActionItem, StateItem, reducerItem } from "./reducer"

export function UseReducerCascadeByParameter(): UseReturnType {
  const title = `NG: useReducer(親子コンポーネント by 引数)`
  const subTitle =
    "引数による分割は可能だが、再描画を防止することはできないので、意味無し"

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
  const [state, dispatch] = useReducer(reducerItem, initialState)

  return (
    <Row>
      <Column>
        <Title>useReducer(cascaded)</Title>
        <Row>
          <ChildCompoAdd dispatch={dispatch} />
          <ChildCompoSubtract dispatch={dispatch} />
          <ChildCompoReset dispatch={dispatch} />
          <ChildCompoState state={state} />
        </Row>
      </Column>
    </Row>
  )
}
 
type Reducer = {
  state?: StateItem
  dispatch?: Dispatch<ActionItem>
}
 
const initialState: StateItem = { item: 0 }
 
const ChildCompoAdd = ({ dispatch }: Reducer) => {
  const countAdd = () => {
    dispatch && dispatch({ type: "ADD", payload: { item: 1 } })
  }
  return <Button onClick={countAdd}> Add </Button>
  )
}
 
const ChildCompoSubtract = ({ dispatch }: Reducer) => {
  const countSubtract = () => {
    dispatch && dispatch({ type: "SUBTRACT", payload: { item: 1 } })
  }
  return <Button onClick={countSubtract}> Subtract </Button>
}
 
const ChildCompoReset = ({ dispatch }: Reducer) => {
  const countReset = () => {
    dispatch && dispatch({ type: "RESET" })
  }
  return <Button onClick={countReset}> Reset </Button>
}
 
const ChildCompoState = ({ state }: Reducer) => {
  return <Column> {state?.item ?? ""} </Column>
}
`

const initialState: StateItem = {
  item: 0,
}

const ParentCompo = () => {
  const [state, dispatch] = useReducer(reducerItem, initialState)

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="400px" gap="10px">
        <Title>useReducer(cascaded)</Title>
        <Row alignItems="center" gap="20px">
          <ChildCompoAdd dispatch={dispatch} />
          <ChildCompoSubtract dispatch={dispatch} />
          <ChildCompoReset dispatch={dispatch} />
          <ChildCompoState state={state} />
        </Row>
      </Column>
    </Row>
  )
}

type Reducer = {
  state?: StateItem
  dispatch?: Dispatch<ActionItem>
}

const ChildCompoAdd = ({ dispatch }: Reducer) => {
  const countAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch &&
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

const ChildCompoSubtract = ({ dispatch }: Reducer) => {
  const countSubtract = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch &&
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

const ChildCompoReset = ({ dispatch }: Reducer) => {
  const countReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch &&
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

const ChildCompoState = ({ state }: Reducer) => {
  return (
    <Column padding="10px" fontSize="24px">
      {state?.item ?? ""}
    </Column>
  )
}
