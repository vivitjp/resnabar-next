import { SlideWidth } from "@/components/common/styleDivChakra"
import { UseReturnType } from "@/components/type/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"
import { Box, Flex } from "@chakra-ui/react"

export function useAnimationSlide(): UseReturnType {
  const title = `Animation: Slide`
  const subTitle = ""

  const mockItems = [...Array(50)]
    .fill("")
    .map((_, index) => `Menu ${index + 1}`)

  const code = `rightSlide {
  position: "fixed";
  top: 0;
  right: 0;
  width: 300px;
  transition: width 0.3s ease-in-out 250ms;
  &:hover {
    width: 20px;
  }
}`

  const jsx = (
    <Flex flexFlow="column" width="100%" border="gray">
      <Box>Mock Div</Box>
      <SlideWidth
        top="0px"
        right="0px"
        transition="width 0.3s ease-in-out 250ms"
        _hover={{ width: "300px" }}
        width="20px"
        height="100%"
      >
        <Flex
          flexFlow="column"
          width="300px"
          padding="10px"
          paddingLeft="20px"
          height="100%"
          backgroundColor="#fffd"
        >
          {mockItems.map((menu, index) => (
            <div key={index}>{menu}</div>
          ))}
        </Flex>
      </SlideWidth>

      <SlideWidth
        top="0px"
        left="0px"
        transition="width 0.3s ease-in-out 250ms"
        _hover={{ width: "300px" }}
        width="20px"
        height="100%"
      >
        <Flex
          flexFlow="column"
          width="300px"
          padding="10px"
          paddingLeft="20px"
          height="100%"
          backgroundColor="#fffd"
        >
          {mockItems.map((menu, index) => (
            <div key={index}>{menu}</div>
          ))}
        </Flex>
      </SlideWidth>
    </Flex>
  )

  const codeKeyType: CodeKeyType = "JSTS"

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: codeKeyType,
  }
}
