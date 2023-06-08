import { Column, Div, SlideWidth } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"

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
    <Column width="100%" borderGray>
      <Div>Mock Div</Div>
      <SlideWidth
        top="0px"
        right="0px"
        openedWidth="300px"
        closedWidth="20px"
        duration="0.3s"
        height="100%"
      >
        <Column
          width="300px"
          padding="10px"
          paddingLeft="20px"
          height="100%"
          backgroundColor="#fffd"
        >
          {mockItems.map((menu, index) => (
            <div key={index}>{menu}</div>
          ))}
        </Column>
      </SlideWidth>

      <SlideWidth
        top="0px"
        left="0px"
        openedWidth="300px"
        closedWidth="20px"
        duration="0.3s"
        height="100%"
      >
        <Column
          width="300px"
          padding="10px"
          paddingLeft="20px"
          height="100%"
          backgroundColor="#fffd"
        >
          {mockItems.map((menu, index) => (
            <div key={index}>{menu}</div>
          ))}
        </Column>
      </SlideWidth>
    </Column>
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
