import { UseReturnType } from "@/components/type/type"
import { useState } from "react"
import { Button, Input } from "@/components/common/styleInput"
import { useAppDispatch, useAppSelector } from "@/store/reduxToolkit/hooks"
import {
  selectCity,
  isTokyo,
  setCity,
  capitalizeCity,
  setCityLower,
} from "@/store/reduxToolkit/slices/addressSlice"
import { Box, Flex } from "@chakra-ui/react"
import { BorderBox } from "@/components/common/styleDivChakra"

export function UseReduxCaseCity(): UseReturnType {
  const title = `Redux Toolkit`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { selectCity, setCity, setCityLower, isTokyo, capitalizeCity } from "@/redux/slices/addressSlice"

const Compo = () => {
  const dispatch = useAppDispatch()
  const city = useAppSelector(selectCity)
  const flagIsTokyo = useAppSelector(isTokyo)
  const [cityLocal, setCityLocal] = useState("Tokyo")
 
  return (
    <Flex flexFlow="row" >
      <Input aria-label="Set City" value={cityLocal}
      onChange={(e) => {
        setCityLocal(e.target.value)
        dispatch(setCity(e.target.value))
      }}
      <Button onClick={() => dispatch(capitalizeCity())}>Capitalize</Button>
      <BorderDiv> {city} </BorderDiv>
      <BorderDiv> {flagIsTokyo ? "Yes" : "No"} </BorderDiv>
    </Flex>
  )
}`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const city = useAppSelector(selectCity)
  const flagIsTokyo = useAppSelector(isTokyo)
  const [cityLocal, setCityLocal] = useState("Tokyo")

  return (
    <Flex
      flexFlow="row"
      padding="10px"
      gap="10px"
      justifyContent="space-between"
    >
      <Input
        aria-label="Set City"
        value={cityLocal}
        onChange={(e) => {
          setCityLocal(e.target.value)
          dispatch(setCity(e.target.value))
        }}
      />
      <Button onClick={() => dispatch(capitalizeCity())}>Capitalize</Button>
      <Button onClick={() => dispatch(setCityLower())}>Lower</Button>
      <BorderBox width="160px">{city}</BorderBox>
      <Flex flexFlow="column">
        Is Tokyo Flag
        <BorderBox width="160px">{flagIsTokyo ? "Yes" : "No"}</BorderBox>
      </Flex>
    </Flex>
  )
}
