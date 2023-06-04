import { useState } from "react"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "../../mock/programmingLanguage"

type UseFetch = {
  id: number
}

type UseFetchLazyReturn = [
  getData: ({ id }: UseFetch) => void,
  answer: {
    data: ProgrammingLanguage[] | undefined
    getCount: () => number
  }
]

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

let count = 0

export const useFetchLazy = (): UseFetchLazyReturn => {
  const [data, setData] = useState<ProgrammingLanguage[]>([])

  const getData = ({ id }: UseFetch) => {
    const query = async () => {
      await sleep(500)

      console.log("useFetchLazy")
      count += 1
      setData(programmingLanguage)
    }
    query()
  }

  const getCount = () => count

  return [getData, { data, getCount }]
}
