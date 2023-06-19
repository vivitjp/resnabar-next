import { UseReturnType } from "@/components/type/type"
import { BorderDiv, Row } from "@/components/common/styleDiv"
import { useState } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCity,
  setCity,
  setCityLower,
  isTokyo,
  capitalizeCity,
} from "@/redux/slices/addressSlice"
import { Button, Input } from "@/components/common/styleInput"

export function UseReduxCaseCity(): UseReturnType {
  const title = `コンポーネント利用`

  const jsx = <ParentCompo />

  return {
    title,
    code,
    options: [],
    jsx,
    codeKeyType: "Redux",
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
        onChange={(e) => setCityLocal(e.target.value)} />
      <Button onClick={() => dispatch(setCity(cityLocal))}>Set City</Button>
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
        onChange={(e) => setCityLocal(e.target.value)}
      />
      <Button onClick={() => dispatch(setCity(cityLocal))}>Set City</Button>
      <Button onClick={() => dispatch(capitalizeCity())}>Capitalize</Button>
      <Button onClick={() => dispatch(setCityLower())}>Lower</Button>
      <BorderDiv width="160px">{city}</BorderDiv>
      <BorderDiv width="160px"> {flagIsTokyo ? "Yes" : "No"} </BorderDiv>
    </Row>
  )
}
