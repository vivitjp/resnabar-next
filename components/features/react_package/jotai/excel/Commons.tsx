import { Box, BoxProps, Flex } from "@chakra-ui/react"

export const BoxT = (props: BoxProps) => (
  <Box
    padding="5px"
    width="30px"
    fontSize="16px"
    textAlign="center"
    {...props}
  />
)

export const BoxX = (props: BoxProps) => (
  <Box
    border="1px solid #999"
    padding="5px"
    width="120px"
    fontSize="16px"
    textAlign="center"
    {...props}
  />
)

export const FlexX = (props: BoxProps) => (
  <Flex padding="0px" gap="0" {...props} />
)
