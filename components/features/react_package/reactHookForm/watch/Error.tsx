"use client"

import { Box, BoxProps } from "@chakra-ui/react"
import { FC } from "react"

type ErrorMessage = {
  errorMessage?: string | undefined
}

export const ErrorMessage = ({ errorMessage = "" }: ErrorMessage) => {
  return (
    <ErrorBox>{errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}</ErrorBox>
  )
}

// const ErrorBox = styled.span<CSSProperties>`
//   color: red;
// `

export const ErrorBox: FC<BoxProps> = (props) => {
  return <Box as="span" color="red" {...props} />
}
