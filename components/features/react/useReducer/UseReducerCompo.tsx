import { useReducer, MouseEvent } from "react"
import { UseReturnType } from "@/components/type/type"
import { Row, Column, Title } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { reducerItem } from "./reducer"

export function UseReducerCompo(): UseReturnType {
  const title = `useReducer(基本サンプル)`
  const subTitle =
    "コンポーネントを超えて値を保存することはできない。必要なら redux を導入する必要がある"

  const jsx = <ParentCompo />

  return {
    title,
    code,
    subTitle,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}
const code = `const initialState = { item: 0, age: 1 }
 
const ParentCompo = () => {
  const [state, dispatch] = useReducer(reducerItem, initialState)
 
  const countAdd = (e) => {
    dispatch({ type: "ADD", payload: { item: 1 } })
  }
  const countSubtract = (e) => {
    dispatch({ type: "SUBTRACT", payload: { item: 1 } })
  }
  const countReset = (e) => {
    dispatch({ type: "RESET" })
  }
 
  return (
    <Row>
      <Column>
        <Title>useReducer</Title>
        <Row>
          <Button onClick={countAdd}> Add </Button>
          <Button onClick={countSubtract}> Subtract </Button>
          <Button onClick={countReset}> Reset </Button>
          <Column> {state.item} </Column>
        </Row>
      </Column>
    </Row>
  )
}
`

const initialState = {
  item: 0,
}

const ParentCompo = () => {
  const [state, dispatch] = useReducer(reducerItem, initialState)

  const countAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "ADD",
      payload: { item: 1 },
    })
  }
  const countSubtract = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "SUBTRACT",
      payload: { item: 1 },
    })
  }
  const countReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "RESET",
    })
  }

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="400px" gap="10px">
        <Title>useReducer</Title>
        <Row alignItems="center" gap="20px">
          <Button onClick={countAdd}>Add</Button>
          <Button onClick={countSubtract}>Subtract</Button>
          <Button onClick={countReset}>Reset</Button>
          <Column padding="10px" fontSize="24px">
            {state.item}
          </Column>
        </Row>
      </Column>
    </Row>
  )
}
