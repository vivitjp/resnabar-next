"use client"

import { useCallback, useState } from "react"
import { Div, Row, Range } from "@/components/common/styleDiv"
import { OptionsType } from "./type"

type Props = {
  title?: string
  subTitle?: string
  extraNote?: string
  initValue: number
  range: [number, number]
  step: number
  width?: number
}

export const useRange = ({
  initValue,
  title,
  subTitle,
  extraNote,
  range,
  step = 1,
  width = 240,
}: Props): OptionsType<number> => {
  const [value, setValue] = useState<number>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.currentTarget.value))
  }, [])

  return {
    title,
    subTitle,
    extraNote,
    value,
    JSX: (
      <Row>
        <Range
          width={width - 50}
          onChange={handle}
          value={value}
          range={range}
          step={step}
        />
        <Div width={50} fontSize={18} justifyContent="center">
          {value}
        </Div>
      </Row>
    ),
  }
}
