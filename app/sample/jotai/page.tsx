"use client"

import { Flex } from "@chakra-ui/react"

type Props = {
  header: React.ReactNode
  body: React.ReactNode
}

const MyCompo = ({ header, body }: Props) => {
  return (
    <Flex flexFlow="column">
      {header}
      {body}
    </Flex>
  )
}

export default function Sample() {
  const name = "ABC"
  return <MyCompo header={<Flex flexFlow="row">{name}</Flex>} body={"ボディ"} />
}
