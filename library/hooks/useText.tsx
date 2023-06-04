"use client"

import { CSSProperties, useCallback, useState } from "react"
import styled from "styled-components"
import { OptionsType } from "./type"

type Props<T> = {
  title: string
  subTitle?: string
  extraNote?: string
  initValue: T
  width?: number
}

export const useText = <T,>({
  initValue,
  title,
  subTitle,
  extraNote,
  width = 240,
}: Props<T>): OptionsType<T> => {
  const [value, setValue] = useState<T>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const newValue = typeof value === "string" ? value : parseInt(value)
    setValue(newValue as T)
  }, [])

  return {
    value,
    subTitle,
    extraNote,
    title,
    JSX: <Input onChange={handle} width={width} value={value as string} />,
  }
}

//----------------------------------------
// Styled
//----------------------------------------
const Input = styled.input.attrs({ type: "text" })<CSSProperties>`
  width: ${({ width = 160 }) => `${width}px`};
  height: 36px;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  ::placeholder {
    color: grey;
  }
`
