import { useState } from "react"
import {
  ProgrammingLanguage,
  programmingLanguage,
} from "../../mock/programmingLanguage"

type UseFetch = {
  id: number
}

type UseFetchReturn = {
  data: ProgrammingLanguage[] | undefined
  getCount: () => number
}

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

let count = 0

export const useFetch = ({ id }: UseFetch): UseFetchReturn => {
  const [data, setData] = useState<ProgrammingLanguage[]>([])

  const query = async () => {
    await sleep(500)

    console.log("useFetch")
    count += 1
    setData(programmingLanguage)
  }
  query()

  const getCount = () => count

  return { data, getCount }
}
