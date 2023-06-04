"use client"

import { CSSProperties, useCallback, useId, useState } from "react"
import styled from "styled-components"
import { OptionsType } from "./type"

type Props = {
  title: string
  subTitle?: string
  extraNote?: string
  initValue: boolean
  width?: number
}

export const useCheck = ({
  initValue,
  title,
  subTitle,
  extraNote,
  width = 20,
}: Props): OptionsType<boolean> => {
  const id = useId()

  const [value, setValue] = useState<boolean>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.checked
    setValue(value)
  }, [])

  return {
    value,
    subTitle: "",
    extraNote,
    title,
    JSX: (
      <Div>
        <Input id={id} onChange={handle} width={width} checked={value} />
        <Label htmlFor={id}>{subTitle}</Label>
      </Div>
    ),
  }
}

//----------------------------------------
// Styled
//----------------------------------------
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0;
`

const Label = styled.label`
  padding: 2px;
  font-size: 1.2rem;
`

const Input = styled.input.attrs({ type: "checkbox" })<CSSProperties>`
  width: ${({ width = 20 }) => `${width}px`};
  height: 36px;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 1.2rem;
`
