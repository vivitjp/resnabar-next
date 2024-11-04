import { useState } from "react"
import { ProgrammingLanguage } from "../../mock/programmingLanguage"
import { useFetch } from "../components/UseFetch"
import { UseReturnType } from "@/components/type/type"
import { Div } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { Flex } from "@chakra-ui/react"

export function UseTable1Query(): UseReturnType {
  const title = `CustomHooks`
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
      <TableFromQuery />
    </Flex>
  )
}

const code = `export const useFetch = ({ id }: UseFetch) => {
  const [data, setData] = useState([])
  const query = async () => {
    setData(programmingLanguage)
  }
  query()
}
 
const TableFromQuery = () => {
  const { data, getCount } = useFetch()
  return <Table data={data} />
}`

const TableFromQuery = () => {
  const [count, setCount] = useState(0)
  const { data, getCount } = useFetch({ id: 1 })

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
  console.log("Query 1 Table called")

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
