"use client"

import { useState } from "react"
import styled from "styled-components"
import { ContainerHidden } from "./ContainerHide"
import { UseReturnType } from "@/components/type/type"
import { Row } from "@/components/common/styleDiv"
import { Button } from "@/components/common/styleInput"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"

export function useIntersectionObserverHideFeature(): UseReturnType {
  const title = `Intersection Observer`
  const subTitle = ""

  const code = `const ContainerHidden: FC<Props> = ({
    onIntersect, threshold, children
  }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const localRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {  //第1引数: コールバック関数(配列に分割代入が便利)
        if (entry.isIntersecting)  onIntersect("Shown")
        if (!entry.isIntersecting) onIntersect("Hidden")
      },
      { threshold }   //第2引数: トリガー閾値
    )

    if (localRef === null) return
    observer.observe(localRef)   //Observe開始
    return ()=>{ if(localRef) observer.unobserve(localRef) } //Observe解除
  }, [onIntersect, threshold])
 
  return <Section ref={ref}>{children}</Section>
}
 
const Component =()=>{
  const [isOpened, setIsOpened] = useState(false)
  const intersectCallback = (status: "Shown" | "Hidden") => {
    setIsOpened(status === "Hidden")
  }
 
  const jsx = (
    <>
      <>
        <ContainerHidden onIntersect={intersectCallback}>
          Hello World
        </ContainerHidden>
        ...

        <FunctionArea isOpened={isOpened} zIndex={101}> //fixed at bottom
          <Button>A</Button>
        </FunctionArea>
      </>
      <Row zIndex={100}> //fixed at bottom
        <Button onClick={someHandler}>Back A</Button>
        ...
      </Row>
    </>
  )
 
  // FunctionArea の CSS に以下設定(例: StyledComponent)
  const FunctionArea = styled.section<{ isOpened?: boolean, zIndex?: number }>\`
    transition: opacity 1s ease-in-out;
    opacity: \${({ isOpened }) => (!isOpened ? "0" : "1")};
    //これによって、zIndex上位のコンポーネントの mouse イベントをそのまま下に移譲
    pointer-events: \${({ isOpened }) => (!isOpened ? "none" : "fill")};
    transition: all 0.2s;
    ...
  \`
}`

  const [isOpened, setIsOpened] = useState(false)
  const intersectCallback = (status: "Shown" | "Hidden") => {
    console.log(status === "Hidden")
    setIsOpened(status === "Hidden")
  }

  const handleBackButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleBackButton Clicked")

    e.stopPropagation()
  }

  const jsx = (
    <>
      <SectionWrapper>
        <Section>
          <ContainerHidden onIntersect={intersectCallback}>
            {/* <ContainerHidden> */}
            <Div>Hello World</Div>
          </ContainerHidden>
        </Section>

        <Section>
          <Div>このコンポーネントがボトムメニューのトリガー</Div>
        </Section>

        <FunctionArea isOpened={isOpened} zIndex={101}>
          <Button>A</Button>
          <Button>B</Button>
        </FunctionArea>
      </SectionWrapper>
      <Row
        position="fixed"
        zIndex="100"
        bottom="0"
        right="0"
        width="100%"
        height="50px"
        gap="10px"
        padding="5px"
        justifyContent="center"
        backgroundColor="beige"
      >
        <Button onClick={handleBackButton}>Back A</Button>
        <Button onClick={handleBackButton}>Back B</Button>
        <Button onClick={handleBackButton}>Back C</Button>
      </Row>
    </>
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

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 200px;
  border: 1px solid #aaa;
  overflow-y: scroll;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 500px;
  border: 1px solid #aaa;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 200px;
`

const FunctionArea = styled.section<{
  isOpened?: boolean
  zIndex?: number
}>`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50px;
  border: 1px solid #aaa;
  background-color: #fff;
  z-index: ${({ zIndex = 1 }) => zIndex};
  transition: opacity 1s ease-in-out;
  opacity: ${({ isOpened }) => (!isOpened ? "0" : "1")};
  pointer-events: ${({ isOpened }) => (!isOpened ? "none" : "fill")};
  transition: all 0.2s;
`
