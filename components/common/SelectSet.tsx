"use client"

import styled, { CSSProperties } from "styled-components"

export const makeOptions = <T,>(items: T[]) => {
  return items.map((item) => ({
    title: item as string,
    value: item,
  }))
}

export type Options<T> = {
  title: string
  value: T
}

export type SelectSet<T> = {
  options: Options<T>[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  withBlanc?: boolean
  defaultValue?: T
} & Omit<CSSProperties, "translate">

export const SelectSet = <T,>({
  options,
  onChange,
  withBlanc,
  defaultValue = options[0].value,
  ...args
}: SelectSet<T>) => {
  const revOptions = withBlanc
    ? [{ title: "", value: "" as T }, ...options]
    : [...options]

  return (
    <Select {...args} onChange={onChange} defaultValue={defaultValue as string}>
      {!!options.length &&
        revOptions.map((n, index) => (
          <option key={index} value={n.value as string}>
            {n.title}
          </option>
        ))}
    </Select>
  )
}

const Select = styled.select<CSSProperties>`
  width: ${({ width = 160 }) => `${width}px`};
  height: ${({ height = 40 }) => `${height}px`};
  padding: 0;
  padding-left: 10px;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px #eee;
  font-size: ${({ fontSize }) => `${fontSize ? `${fontSize}px` : "inherit"}`};
`
