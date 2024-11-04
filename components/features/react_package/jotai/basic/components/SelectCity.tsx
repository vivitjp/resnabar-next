import { Div } from "@/components/common/styleDiv"
import { useAtom } from "jotai"
import { citiesAtom, citySelectedAtom } from "../atoms"
import { useSelect } from "@/library/hooks/useSelect"
import { Button } from "@/components/common/styleInput"
import { Flex } from "@chakra-ui/react"

export const SelectCity = () => {
  const [cities] = useAtom(citiesAtom)
  const [_, setCitySelected] = useAtom(citySelectedAtom)

  const { JSX: SnippetsStyleSelection, value } = useSelect({
    title: "都市",
    initValue: "",
    values: [...cities],
    width: 100,
  })

  const handleSetValue = () => {
    setCitySelected(value)
  }

  return (
    <Flex flexFlow="row" padding="5px" alignItems="center" gap="10px">
      <Div width="100px">都市</Div>
      {SnippetsStyleSelection}
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}
