"use client"

import { FC } from "react"
import { OptionsType } from "@/library/hooks/type"
import {
  CodeKeyType,
  syntaxHighlight,
} from "@/library/syntaxHighlighter/syntaxHighlighter"
import { UseReturnType } from "@/components/type/type"
import { Span, Title } from "@/components/common/styleDivChakra"
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react"

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
  const [isVisible, setIsVisible] = visible ?? [null, () => null]

  return (
    <Flex
      flexFlow="column"
      gap="24px"
      width="100%"
      minWidth="700px"
      padding="0 10px"
    >
      {/* タイトル */}
      {title && <MainTitle>{title}</MainTitle>}

      {/* サブタイトル */}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      {/* 操作オプション */}
      {!!options?.length && (
        <Flex flexFlow="column" gap={"0"} paddingLeft={"20px"}>
          {options.map((option, id) => (
            <Option key={id} option={option} />
          ))}
        </Flex>
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
        <Box width="100%" height={height} shadow="10px" padding="10px">
          {jsx}
        </Box>
      )}

      {/* コード  ------------ codeFold ----------*/}
      {code && (
        <>
          <Details open={!codeFold}>
            <Summary>Code</Summary>
            <Flex
              flexFlow="row"
              padding={10}
              width={"100%"}
              backgroundColor={"#FDFDFD"}
              boxShadow="0 0 10px #ddd;"
            >
              <CodeBox code={code} codeKeyType={codeKeyType} />
            </Flex>
          </Details>
        </>
      )}
    </Flex>
  )
}

const Option = ({
  option: { title, JSX, subTitle, extraNote },
}: {
  option: OptionsType<unknown>
}) => (
  <Flex flexFlow="column" padding={0} gap={0}>
    <Flex flexFlow="row" padding={"3px"}>
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
      <Box width={"250px"}>{JSX}</Box>
    </Flex>

    {/* ExtraNote */}
    {extraNote && (
      <Flex flexFlow="row" padding={"0 30px"}>
        <Span color="#999">{extraNote}</Span>
      </Flex>
    )}
  </Flex>
)

//----------------------------------------
// タイトル
//----------------------------------------
// const TitleWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0;
//   margin: 0;
//   width: 400px;
// `

const TitleWrapper: FC<FlexProps> = (props) => {
  return (
    <Flex
      justifyContent="space-between"
      padding="0"
      margin="0"
      width="400px"
      {...props}
    />
  )
}

// const MainTitle = styled.div`
//   font-size: 20px;
//   font-weight: 300;
//   font-family: 'Times New Roman', Times, serif;
//   color: var(--main-color);
//   :before {
//     content: "■";
//     margin-right: 5px;
//     color: var(--main-color);
//   }
// `

const MainTitle: FC<BoxProps> = (props) => {
  return (
    <Box
      fontSize="20px"
      fontWeight="300"
      fontFamily="'Times New Roman', Times, serif"
      color="var(--main-color)"
      _before={{
        content: "■",
        margiRright: "5px",
        color: "var(--main-color)",
      }}
      {...props}
    />
  )
}

// const SubTitle = styled.pre`
//   font-size: 14px;
//   color: #666;
//   padding: 0 30px;
//   width: 100%;
//   white-space: pre-wrap;
//   word-wrap: break-word;
// `

const SubTitle: FC<BoxProps> = (props) => {
  return (
    <Box
      as="pre"
      fontSize="14px"
      color="#666"
      padding="0 30px"
      width="100%"
      whiteSpace="pre-wrap"
      wordWrap="break-word"
      {...props}
    />
  )
}

// const OptionSubTitle = styled(Box)`
//   :after {
//     content: ":";
//     margin: 0 3px;
//     color: #666;
//   }
// `

const OptionSubTitle: FC<BoxProps> = (props) => {
  return (
    <Box
      _after={{
        content: ":",
        margi: "0 3px",
        color: "#666",
      }}
      {...props}
    />
  )
}

// const Details = styled.details`
//   width: 100%;
//   cursor: text;
//   border: #ddd;
// `

const Details: FC<BoxProps & { open?: boolean }> = (props) => {
  return (
    <Box as="details" width="100%" cursor="text" border="#ddd" {...props} />
  )
}

// const Summary = styled.summary`
//   font-size: 14px;
//   color: #666;
//   padding: 0;
//   width: 100%;
//   text-align: right;
//   cursor: pointer;
// `
const Summary: FC<BoxProps> = (props) => {
  return (
    <Box
      as="summary"
      fontSize="14px"
      color="#666"
      padding="0"
      width="100%"
      textAlign="right"
      cursor="pointer"
      {...props}
    />
  )
}

//----------------------------------------
// コード
//----------------------------------------
type CodeBox = { code: string; codeKeyType?: CodeKeyType }

const CodeBox: FC<CodeBox> = ({ code, codeKeyType }) => {
  const result = syntaxHighlight({ code, codeKeyType })
  return (
    <Flex
      flexFlow="column"
      gap={"2px"}
      padding={"16px"}
      width={"100%"}
      cursor="text"
    >
      {result}
    </Flex>
  )
}

//----------------------------------------
// 表示ボタン
//----------------------------------------
// const Input = styled.input.attrs({ type: "button" })`
//   width: 160px;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1.2rem;
//   text-align: center;
// `

const Input: FC<InputProps> = (props) => {
  return (
    <ChakraInput
      type="button"
      width="160px"
      padding="8px"
      border="1px solid #ccc"
      borderRadius="5px"
      fontSize="1.2rem"
      textAlign="center"
      {...props}
    />
  )
}
