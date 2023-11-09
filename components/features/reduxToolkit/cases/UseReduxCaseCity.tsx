import { UseReturnType } from "@/components/type/type"
import { BorderDiv, Column, Row } from "@/components/common/styleDiv"
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
    <Row>
      <Input aria-label="Set City" value={cityLocal}
      onChange={(e) => {
        setCityLocal(e.target.value)
        dispatch(setCity(e.target.value))
      }}
      <Button onClick={() => dispatch(capitalizeCity())}>Capitalize</Button>
      <BorderDiv> {city} </BorderDiv>
      <BorderDiv> {flagIsTokyo ? "Yes" : "No"} </BorderDiv>
    </Row>
  )
}`

const ParentCompo = () => {
  const dispatch = useAppDispatch()
  const city = useAppSelector(selectCity)
  const flagIsTokyo = useAppSelector(isTokyo)
  const [cityLocal, setCityLocal] = useState("Tokyo")

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
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
      <BorderDiv width="160px">{city}</BorderDiv>
      <Column>
        Is Tokyo Flag
        <BorderDiv width="160px"> {flagIsTokyo ? "Yes" : "No"} </BorderDiv>
      </Column>
    </Row>
  )
}
