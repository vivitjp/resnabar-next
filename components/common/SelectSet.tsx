"use client"

import { FC } from "react"
import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react"

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

export type SelectSet<T> = Omit<
  SelectProps,
  "translate" | "SelectProps" | "defaultValue"
> & {
  options: Options<T>[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  withBlanc?: boolean
  defaultValue?: T
}

export const SelectSet = <T,>({
  options,
  onChange,
  withBlanc,
  gridAutoColumns,
  gridAutoRows,
  defaultValue = options[0].value,
  ...args
}: SelectSet<T>) => {
  const revOptions = withBlanc
    ? [{ title: "", value: "" as T }, ...options]
    : [...options]

  return (
    <Select onChange={onChange} defaultValue={defaultValue as string} {...args}>
      {!!options.length &&
        revOptions.map((n, index) => (
          <option key={index} value={n.value as string}>
            {n.title}
          </option>
        ))}
    </Select>
  )
}

const Select: FC<SelectProps> = (props) => {
  return (
    <ChakraSelect
      width="160px"
      height="40px"
      padding="0"
      paddingLeft="10px"
      border="1px solid #aaa"
      backgroundColor="white"
      borderRadius="5px"
      boxShadow="0 0 5px #eee"
      fontSize="inherit"
      {...props}
    />
  )
}
