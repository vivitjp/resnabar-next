import { UseReturnType } from "@/components/type/type"
import { BorderDiv } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "@/store/redux/actions/ItemActions"
import { StateItem } from "@/store/redux/reducers/itemReducer"
import { Flex } from "@chakra-ui/react"

export function UseReduxSample(): UseReturnType {
  const title = `Redux`
  const subTitle = `ReduxToolkitなしのオリジナル`

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `import { useDispatch, useSelector } from "react-redux"
import { actions } from "@/store/redux/actions/ItemActions"
import { StateItem } from "@/store/redux/reducers/itemReducer"
 
const Compo = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: { items: StateItem }) => {
    return state.items
  })
 
  return (
    <Flex flexFlow="column" >
      <Flex flexFlow="row" >
        <BorderDiv>{items.item}</BorderDiv>
        <Button onClick={() => dispatch(actions.increment(1))}>追加</Button>
        <Button onClick={() => dispatch(actions.decrement(1))}>削減</Button>
        <Button onClick={() => dispatch(actions.reset())}>Reset</Button>
      </Flex>
    </Flex>
  )
}
`

const ParentCompo = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: { items: StateItem }) => {
    return state.items
  })

  return (
    <Flex flexFlow="column" gap="10px">
      <Flex
        flexFlow="row"
        padding="10px"
        gap="10px"
        justifyContent="flex-start"
      >
        <BorderDiv width="160px">{items.item}</BorderDiv>
        <Button onClick={() => dispatch(actions.increment(1))}>追加</Button>
        <Button onClick={() => dispatch(actions.decrement(1))}>削減</Button>
        <Button onClick={() => dispatch(actions.reset())}>Reset</Button>
      </Flex>
    </Flex>
  )
}
