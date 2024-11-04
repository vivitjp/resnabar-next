"use client"

import { Box, BoxProps, Flex } from "@chakra-ui/react"
import { FC } from "react"

export const BorderBox: FC<BoxProps> = (props) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width="160px"
      height="40px"
      border="1px solid #aaa"
      padding="0.2rem"
      color="grey"
      backgroundColor="#f5f5f5"
      borderRadius="5px"
      {...props}
    />
  )
}

export const SlideWidth: FC<BoxProps> = (Props) => {
  return (
    <Box
      position="fixed"
      display="flex"
      flexFlow="column"
      boxShadow="2px 2px 10px #0004"
      overflow="hidden"
      {...Props}
    />
  )
}

export const Title: FC<BoxProps> = (Props) => {
  return (
    <Box
      _before={{
        content: `■`,
        marginRight: "5px",
        color: "var(--main-color)",
      }}
      {...Props}
    />
  )
}

export const DivPre: FC<BoxProps> = (Props) => {
  return <Box fontSize="16px" overflow="auto" whiteSpace="pre" {...Props} />
}

export const Span: FC<BoxProps> = (Props) => {
  return (
    <Box
      as="span"
      margin="0"
      padding="0"
      fontSize="inherit"
      fontFamily="Consolas, monospace"
      {...Props}
    />
  )
}

export const SpanRed: FC<BoxProps> = (Props) => {
  return (
    <Box
      as="span"
      margin="0"
      padding="0"
      color="var(--main-color)"
      fontSize="inherit"
      fontFamily="Consolas, monospace"
      {...Props}
    />
  )
}
