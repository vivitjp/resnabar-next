"use client"

import { useRef, useState } from "react"
import { Container } from "./Container"
import styled from "styled-components"
import { UseReturnType } from "@/components/type/type"
import { Div } from "@/components/common/styleDiv"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"
import { Flex } from "@chakra-ui/react"

export function useIntersectionObserverFeature(): UseReturnType {
  const title = `Intersection Observer`
  const subTitle = ""

  const code = `const IntersectionContainer: FC<Props> = ({
  index,
  onIntersectCallback, //(index: number) => void
  threshold = 0.5,     //ターゲットのリアクショントリガー％
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const localRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {  //第1引数: コールバック関数(配列に分割代入が便利)
        if (entry.isIntersecting && onIntersectCallback)
          onIntersectCallback(index)
      },
      { threshold }   //第2引数: トリガー閾値
    )

    if (localRef === null) return
    observer.observe(localRef)   //Observe開始
    return ()=>{ if(localRef) observer.unobserve(localRef) } //Observe解除
  }, [index, onIntersectCallback, threshold])

  return <Section ref={ref}>{children}</Section>
}
 
const Component =()=>{
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const intersectCallback = (index: number) => { setProgress(index) }

  return (
    <Section>
      {items.map((i) => (
        <IntersectionContainer key={i} index={i} onIntersectCallback={intersectCallback}>
          <Flex flexFlow="column"  ref={ref}>
            {[...Array(10)].map((_, k) => ( <Div>{k + 1}</Div> ))}
          </Flex>
        </Container>
      ))}
    </Section>
  )
}`

  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const intersectCallback = (index: number) => {
    setProgress(index)
  }
  const items = [1, 2, 3, 4, 5]

  const jsx = (
    <Flex flexFlow="column" width="100%" borderColor="gray">
      <Flex
        flexFlow="row"
        fontSize="24px"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Div
          height="30px"
          color="red"
          justifyContent="center"
          alignItems="center"
        >
          {progress}
        </Div>
        <Div height="30px" justifyContent="center" alignItems="center">
          セクションまで移動
        </Div>
      </Flex>
      <Section>
        {items.map((i) => (
          <Container key={i} index={i} onIntersectCallback={intersectCallback}>
            <Flex flexFlow="column" ref={ref}>
              {[...Array(10)].fill("").map((_, k) => (
                <Div key={k} fontSize="18px" padding="2px">
                  {k + 1}
                </Div>
              ))}
            </Flex>
          </Container>
        ))}
      </Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-height: 300px;
  border: 1px solid #aaa;
  overflow-y: scroll;
`
