import { useState } from "react"

type UseFetchMock<T> = {
  id: number
  incomingData: T[]
}

type UseFetchReturn<T> = {
  data: T[] | undefined
  getCount: () => number
}

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

let count = 0

export const useFetchMock = <T>({
  id,
  incomingData,
}: UseFetchMock<T>): UseFetchReturn<T> => {
  const [data, setData] = useState<T[] | undefined>()

  const query = async () => {
    count += 1
    console.log("UseFetchMock", id)
    await sleep(500)
    setData(incomingData)
  }

  query()

  const getCount = () => count

  return { data, getCount }
}
