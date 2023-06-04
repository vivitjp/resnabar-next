"use client"

import styled from "styled-components"
import { FC } from "react"
import { OptionsType } from "@/library/hooks/type"
import {
  CodeKeyType,
  syntaxHighlight,
} from "@/library/syntaxHighlighter/syntaxHighlighter"
import { UseReturnType } from "@/components/common/type/type"
import { Column, Div, Row, Span, Title } from "@/components/common/styleDiv"

type UseCode = {
  useCode: () => UseReturnType
}

export const FeaturePresenter: FC<UseCode> = ({ useCode }) => {
  const {
    code,
    codeKeyType,
    title,
    subTitle,
    options,
    codeFold,
    jsx,
    height,
    visible,
  } = useCode()
  const [isVisible, setIsVisible] = visible ?? [null, () => {}]

  return (
    <Column gap="24px" width="100%" minWidth="700px" padding="0 10px">
      {/* タイトル */}
      {title && <MainTitle>{title}</MainTitle>}

      {/* サブタイトル */}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      {/* 操作オプション */}
      {!!options?.length && (
        <Column gap={"0"} paddingLeft={"20px"}>
          {options.map((option, id) => (
            <Option key={id} option={option} />
          ))}
        </Column>
      )}

      {/* 表示ボタン */}
      {visible && (
        <Input
          onClick={() => {
            setIsVisible((prev) => !prev)
          }}
          value={isVisible ? "Stop" : "Start"}
        />
      )}

      {/* JSX */}
      {jsx && (
        <Div width="100%" height={height} shadow="10px" padding="10px">
          {jsx}
        </Div>
      )}

      {/* コード  ------------ codeFold ----------*/}
      {code && (
        <>
          <Details open={!codeFold}>
            <Summary>Code</Summary>
            <Row padding={10} width={"100%"} backgroundColor={"ivory"}>
              <CodeBox code={code} codeKeyType={codeKeyType} />
            </Row>
          </Details>
        </>
      )}
    </Column>
  )
}

const Option = ({
  option: { title, JSX, subTitle, extraNote },
}: {
  option: OptionsType<any>
}) => (
  <Column padding={0} gap={0}>
    <Row padding={"3px"}>
      {/* Title */}
      <TitleWrapper>
        {title && (
          <Title width={"250px"} color={"#666"}>
            {title}
          </Title>
        )}
        {!title && <div />}
        {subTitle && (
          <OptionSubTitle
            fontSize={"16px"}
            fontFamily={"monospace"}
            color="#666"
          >
            {subTitle}
          </OptionSubTitle>
        )}
      </TitleWrapper>

      {/* JSX */}
      <Div width={"250px"}>{JSX}</Div>
    </Row>

    {/* ExtraNote */}
    {extraNote && (
      <Row padding={"0 30px"}>
        <Span color="#999">{extraNote}</Span>
      </Row>
    )}
  </Column>
)

//----------------------------------------
// タイトル
//----------------------------------------
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 400px;
`

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: var(--main-color);
  :before {
    content: "■";
    margin-right: 5px;
    color: var(--main-color);
  }
`
const SubTitle = styled.div`
  font-size: 14px;
  color: #666;
  padding: 0 30px;
  width: 100%;
`

const OptionSubTitle = styled(Div)`
  :after {
    content: ":";
    margin: 0 3px;
    color: #666;
  }
`

const Details = styled.details`
  width: 100%;
  cursor: text;
  border: #ddd;
`

const Summary = styled.summary`
  font-size: 14px;
  color: #666;
  padding: 0;
  width: 100%;
  text-align: right;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`

//----------------------------------------
// コード
//----------------------------------------
type CodeBox = { code: string; codeKeyType?: CodeKeyType }

const CodeBox: FC<CodeBox> = ({ code, codeKeyType }) => {
  const result = syntaxHighlight({ code, codeKeyType })
  return (
    <Column gap={"2px"} padding={"16px"} width={"100%"} cursor="text">
      {result}
    </Column>
  )
}

//----------------------------------------
// 表示ボタン
//----------------------------------------
const Input = styled.input.attrs({ type: "button" })`
  width: 160px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
`
