"use client"

import { CSSProperties, FC, useCallback, useId, useState } from "react"
import { OptionsType } from "./type"
import {
  Checkbox as CheckboxChakra,
  CheckboxProps,
  Flex,
  FlexProps,
  Text,
  TextProps,
} from "@chakra-ui/react"

type Props = {
  title: string
  subTitle?: string
  extraNote?: string
  initValue: boolean
  width?: number
}

export const useCheck = ({
  initValue,
  title,
  subTitle,
  extraNote,
  width = 20,
}: Props): OptionsType<boolean> => {
  const id = useId()

  const [value, setValue] = useState<boolean>(initValue)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.checked
    setValue(value)
  }, [])

  return {
    value,
    subTitle: "",
    extraNote,
    title,
    JSX: (
      <Box>
        <Checkbox id={id} onChange={handle} width={width} checked={value}>
          {subTitle}
        </Checkbox>
      </Box>
    ),
  }
}

//----------------------------------------
// Styled
//----------------------------------------
export const Box: FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap="10px"
      padding={0}
      {...props}
    />
  )
}

// const Label = styled.label`
//   padding: 2px;
//   font-size: 1.2rem;
// `

// export const Label: FC<TextProps> = (props) => {
//   return <Text padding="2px" fontSize="1.2rem" {...props} />
// }

// const Input = styled.input.attrs({ type: "checkbox" })<CSSProperties>`
//   width: ${({ width = 20 }) => `${width}px`};
//   height: 36px;
//   padding: 8px;
//   border: 1px solid #aaa;
//   border-radius: 5px;
//   font-size: 1.2rem;
// `

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <CheckboxChakra
      width="20px"
      height="36px"
      padding="8px"
      border="1px solid #aaa"
      borderRadius="5px"
      fontSize="1.2rem"
      {...props}
    />
  )
}
