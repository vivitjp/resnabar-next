import { useAtom } from "jotai"
import { citiesAtom, citySelectedAtom } from "../atoms"
import { useSelect } from "@/library/hooks/useSelect"
import { Button } from "@/components/common/styleInputChakra"
import { Box, Flex } from "@chakra-ui/react"

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
      <Box width="100px">都市</Box>
      {SnippetsStyleSelection}
      <Button onClick={handleSetValue}>セット</Button>
    </Flex>
  )
}
