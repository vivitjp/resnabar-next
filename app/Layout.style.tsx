"use client"

import { Box, Flex, FlexProps, Link, LinkProps } from "@chakra-ui/react"
import { FC, PropsWithChildren } from "react"

export const Header: FC<FlexProps> = (props) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="50px"
      paddingLeft="20px"
      backgroundColor="var(--main-color)"
      fontSize="1.8rem"
      fontWeight="300"
      color="#fff"
      {...props}
    />
  )
}

export const Body: FC<FlexProps> = (props) => {
  return <Flex height="100%" minHeight="calc(100vh - 50px)" {...props} />
}

export const MenuNav: FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="5px"
      minWidth="140px; // <---- Side Menu "
      maxWidth="140px; // <---- Side Menu "
      padding="5px"
      paddingBottom="50px"
      backgroundColor="#f3eed5"
      fontFamily="Consolas, monospace"
      {...props}
    />
  )
}

// export const Group = ({ children, ...props }: PropsWithChildren) => {
//   return (
//     <details css={cssGroup} {...props}>
//       {children}
//     </details>
//   )
// }

//DetailsHTMLAttributes<HTMLDetailsElement>.open?: boolean | undefined

export const Group = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Box
      as={"details"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "5px",
        width: "100%",
      }}
      {...props}
      open
    >
      {children}
    </Box>
  )
}

export const GroupTitle: FC<FlexProps> = (props) => {
  return (
    <Flex
      as="summary"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="4px"
      width="100%"
      color="#777"
      backgroundColor="white"
      border="1px solid white"
      borderLeft="5px solid var(--main-color)"
      borderBottom="1px solid var(--main-color)"
      cursor="pointer"
      _hover={{
        borderRight: "1px solid var(--main-color)",
        borderTop: "1px solid var(--main-color)",
      }}
      fontWeight="600"
      userSelect="none"
      {...props}
    />
  )
}

export const GroupBody: FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      paddingLeft="5px"
      {...props}
    />
  )
}

export const Playground: FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      flexGrow="2"
      padding="10px"
      marginBottom="100px"
      width="100%"
      overflow="hidden"
      {...props}
    />
  )
}

export const MenuItem = ({
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      flexDirection="column"
      flexGrow="2"
      padding="5px"
      textDecoration="none"
      fontSize="0.8rem"
      _hover={{
        color: "var(--main-color)",
      }}
      userSelect="none"
      {...props}
    >
      {children}
    </Link>
  )
}
