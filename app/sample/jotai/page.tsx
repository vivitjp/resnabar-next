"use client"

import { Column, Row } from "@/components/common/styleDiv"

type Props = {
  header: React.ReactNode
  body: React.ReactNode
}

const MyCompo = ({ header, body }: Props) => {
  return (
    <Column>
      {header}
      {body}
    </Column>
  )
}

export default function Sample() {
  const name = "ABC"
  return <MyCompo header={<Row>{name}</Row>} body={"ボディ"} />
}
