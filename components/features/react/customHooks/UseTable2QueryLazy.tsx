import { useEffect, useState } from "react"
import { ProgrammingLanguage } from "../../mock/programmingLanguage"
import { useFetchLazy } from "../components/UseFetchLazy"
import { UseReturnType } from "@/components/type/type"
import { Div } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { Flex } from "@chakra-ui/react"

export function UseTable2QueryLazy(): UseReturnType {
  const title = `CustomHooks: Fetch Lazy`
  const subTitle = ``

  const jsx = <CustomFetch />
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const CustomFetch = () => {
  return (
    <Flex flexFlow="column" padding="10px">
      <TableFromQueryLazy />
    </Flex>
  )
}

const code = `export const useFetchLazy = () => {
  const [data, setData] = useState([])
  const getData = ({ id }: UseFetch) => {
    const query = async () => {
      setData(programmingLanguage)
    }
    query()
  }
  return [getData, { data }]
}
 
const TableFromQueryLazy = () => {
  const [getData, { data }] = useFetchLazy()

  useEffect(() => {
    getData({ id: 1 })
  }, [getData])

  return <Table data={data} />
}`

const TableFromQueryLazy = () => {
  const [count, setCount] = useState(0)
  const [getData, { data, getCount }] = useFetchLazy()

  useEffect(() => {
    getData({ id: 1 })
  }, [getData])

  const handleCount = () => {
    setCount(getCount())
  }

  return (
    <Flex
      flexFlow="row"
      width="100%"
      padding="10px"
      justifyContent="space-between"
    >
      <Flex
        flexFlow="row"
        width="200px"
        padding="10px"
        gap="30px"
        alignItems="center"
      >
        <Button onClick={handleCount}>カウント</Button>
        <Div fontSize="24px">{count}</Div>
      </Flex>
      <Table data={data} />
    </Flex>
  )
}

const Table = ({ data }: { data: ProgrammingLanguage[] | undefined }) => {
  console.log("UseFetch2Lazy: Table", data !== undefined)

  return (
    <>
      {!!data?.length && (
        <Flex
          flexFlow="column"
          width="300px"
          border="1px solid #aaa"
          padding="10px"
        >
          {data.map((item, index) => (
            <Flex flexFlow="row" key={index} borderBottom="1px solid #aaa">
              {item.name} : {item.difficulty}
            </Flex>
          ))}
        </Flex>
      )}
    </>
  )
}
