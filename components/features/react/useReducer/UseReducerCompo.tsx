import { useReducer, MouseEvent } from "react"
import { UseReturnType } from "@/components/type/type"
import { Title } from "@/components/common/styleDivChakra"
import { Button } from "@/components/common/styleInputChakra"
import { reducerItem } from "./reducer"
import { Flex } from "@chakra-ui/react"

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
    <Flex flexFlow="row" >
      <Flex flexFlow="column" >
        <Title>useReducer</Title>
        <Flex flexFlow="row" >
          <Button onClick={countAdd}> Add </Button>
          <Button onClick={countSubtract}> Subtract </Button>
          <Button onClick={countReset}> Reset </Button>
          <Flex flexFlow="column" > {state.item} </Flex>
        </Flex>
      </Flex>
    </Flex>
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
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Flex flexFlow="column" width="400px" gap="10px">
        <Title>useReducer</Title>
        <Flex flexFlow="row" alignItems="center" gap="20px">
          <Button onClick={countAdd}>Add</Button>
          <Button onClick={countSubtract}>Subtract</Button>
          <Button onClick={countReset}>Reset</Button>
          <Flex flexFlow="column" padding="10px" fontSize="24px">
            {state.item}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
