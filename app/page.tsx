"use client"

import { chakra, Box } from "@chakra-ui/react"

const Section = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "500px",
    gap: "0.2rem",
    fontSize: "5rem",
    color: "var(--main-color)",
    transition: "all 1s",
    opacity: "0.3",
    _hover: {
      opacity: "0",
    },
  },
})

export default function Home() {
  return <Section>re:Snaber</Section>
}
