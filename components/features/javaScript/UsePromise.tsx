import { useEffect, useState } from "react"
import { UseReturnType } from "@/components/type/type"
import { Column, Row } from "@/components/common/styleDiv"

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export function UsePromise(): UseReturnType {
  const title = `JavaScript: Promise`
  const subTitle = `非同期のTry & Catch`

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
const code = `const query1 = async () => {
  await sleep(500)
}

const query2 = async () => {
  await sleep(500)
  throw Error("Q2 Throw Error")
}

const query3 = async () => {
  await sleep(500)
  throw Error("Q3 Throw Error")
}

async () => {
  try {
    await query1()
      .then(() => {
        setResults((prev) => [...prev, "Q1 OK"])
      })
      .catch((e) => {
        setErrors((prev) => [...prev, e.message])
      })

    await query2()
      .then(() => {
        console.log("OK Log 2")
      })
      .catch((e) => {
        setErrors((prev) => [...prev, e.message])
        //throw e //これを投げると method は終了
      })

    try {
      await query3().then(() => {
        console.log("OK Log 3")
      })
    } catch (e) {
      setErrors((prev) => [...prev, (e as any).message as string])
      throw e //これを投げると method は終了
    }
  } catch (e) {
    setThrows((prev) => [...prev, (e as any).message as string])
  }
}`

const ParentCompo = () => {
  const [results, setResults] = useState<string[]>([])
  const [errors, setErrors] = useState<string[]>([])
  const [throws, setThrows] = useState<string[]>([])

  const query1 = async () => {
    await sleep(500)
  }

  const query2 = async () => {
    await sleep(500)
    throw Error("Q2 Throw Error")
  }

  const query3 = async () => {
    await sleep(500)
    throw Error("Q3 Throw Error")
  }

  useEffect(() => {
    mainExec()
  }, [])

  const mainExec = async () => {
    try {
      await query1()
        .then(() => {
          setResults((prev) => [...prev, "Q1 OK"])
        })
        .catch((e) => {
          setErrors((prev) => [...prev, e.message])
        })

      await query2()
        .then(() => {
          console.log("OK Log 2")
        })
        .catch((e) => {
          setErrors((prev) => [...prev, e.message])
          //throw e //これを投げると method は終了
        })

      try {
        await query3().then(() => {
          console.log("OK Log 3")
        })
      } catch (e) {
        setErrors((prev) => [...prev, (e as any).message as string])
        throw e //これを投げると method は終了
      }
    } catch (e) {
      setThrows((prev) => [...prev, (e as any).message as string])
    }
  }

  return (
    <Row padding="10px" gap="10px" justifyContent="space-between">
      <Column width="fit-content" gap="10px" padding="10px">
        <Row width="400px" justifyContent="space-between" alignItems="center">
          Results: {JSON.stringify(results, undefined, 2)}
        </Row>
        <Row width="400px" justifyContent="space-between" alignItems="center">
          Errors: {JSON.stringify(errors, undefined, 2)}
        </Row>
        <Row width="400px" justifyContent="space-between" alignItems="center">
          Throws: {JSON.stringify(throws, undefined, 2)}
        </Row>
      </Column>
    </Row>
  )
}
