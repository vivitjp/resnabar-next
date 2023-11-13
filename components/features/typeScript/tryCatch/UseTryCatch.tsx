import { UseReturnType } from "@/components/type/type"
import { Div, Row } from "@/components/common/styleDiv"
import { useState } from "react"
import { Button } from "@/components/common/styleInput"

export function UseTryCatch(): UseReturnType {
  const title = `TypeScript: Try Catch & Error Types`
  const subTitle = ``

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}
const code = `class ErrorA extends Error {
  message = "ErrorA"
}
 
class ErrorB extends Error {
  message = "ErrorB"
}
 
const ParentCompo = () => {
  try {
    if (Math.floor(Math.random() * 10) > 5) {
      throw new ErrorA()
    } else {
      throw new ErrorB()
    }
  } catch (e: any) {
    //e: unknown ? バージョンによって e の型が違う?
    if (e instanceof ErrorA) {
      const msg = e.message
      setMessages((prev) => [...prev, msg])
    }
    if (e instanceof ErrorB) {
      const msg = e.message
      setMessages((prev) => [...prev, msg])
    }
  }
}`

class ErrorA extends Error {
  message = "ErrorA"
}

class ErrorB extends Error {
  message = "ErrorB"
}

const ParentCompo = () => {
  const [messages, setMessages] = useState<string[]>([])
  const handler = () => {
    try {
      if (Math.floor(Math.random() * 10) > 5) {
        throw new ErrorA()
      } else {
        throw new ErrorB()
      }
    } catch (e: any) {
      //e: unknown ?
      if (e instanceof ErrorA) {
        const msg = e.message
        setMessages((prev) => [...prev, msg])
      }
      if (e instanceof ErrorB) {
        const msg = e.message
        setMessages((prev) => [...prev, msg])
      }
    }
  }

  return (
    <Row padding="10px" gap="10px">
      <Button width="160px" onClick={handler}>
        Get Errors
      </Button>
      <Row
        width="fit-width"
        justifyContent="flex-start"
        alignItems="center"
        gap="8px"
        flexFlow="row wrap"
      >
        {messages.map((val, idx) => (
          <Div key={idx}>{val}</Div>
        ))}
      </Row>
    </Row>
  )
}
