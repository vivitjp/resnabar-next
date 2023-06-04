"use client"

import { useCallback, useState } from "react"
import { OptionsType } from "./type"
import { SelectSet } from "@/components/common/SelectSet"

type KV<T> = {
  K: string
  V: T
}

type Props<T> = {
  title: string
  subTitle?: string
  extraNote?: string
  initValue: T
  values: T[] | KV<T>[]
  width?: number
}

function isKV<T>(arg: any): arg is KV<T> {
  return arg.K !== undefined
}

export const useSelect = <T,>({
  title,
  subTitle,
  initValue,
  extraNote,
  values,
  width = 240,
}: Props<T>): OptionsType<T> => {
  const [value, setValue] = useState<T>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value as T)
  }, [])

  const options = isKV<T>(values[0])
    ? (values as KV<T>[]).map((item) => ({ title: item.K, value: item.V }))
    : (values as T[]).map((item) => ({ title: item as string, value: item }))

  return {
    title,
    subTitle,
    extraNote,
    value,
    JSX: (
      <SelectSet
        width={width}
        onChange={handle}
        options={options}
        defaultValue={initValue}
      />
    ),
  }
}
