"use client"

import { useState } from "react"

import { OptionsType } from "./type"
import { Box, Flex } from "@chakra-ui/react"

type Props = {
  title?: string
  subTitle?: string
  extraNote?: string
  initValue: [number, number]
}

export const useCoordinate = ({
  initValue,
  title,
  subTitle,
  extraNote,
}: Props): OptionsType<[number, number]> => {
  const [value, setValue] = useState<[number, number]>(initValue)

  const handleClick = (e: React.PointerEvent<SVGElement>) => {
    const target = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - target.left
    const y = e.clientY - target.top
    setValue([x, y])
  }

  return {
    title,
    subTitle,
    extraNote,
    value,
    handleClick,
    JSX: (
      <Flex flexFlow="row">
        <Box width={300} fontSize={18}>
          x: {value[0]}, y: {value[1]}
        </Box>
      </Flex>
    ),
  }
}
