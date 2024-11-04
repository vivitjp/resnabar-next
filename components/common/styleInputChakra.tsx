"use client"

import { FC } from "react"
import {
  InputProps,
  Input as ChakraInput,
  BoxProps,
  Box,
  TextareaProps,
  Textarea as ChakraTextarea,
  ButtonProps,
  Button as ChakraButton,
  Checkbox as ChakraCheckbox,
  forwardRef,
} from "@chakra-ui/react"

export const Input: FC<InputProps> = (props) => {
  return (
    <ChakraInput
      padding="0.2rem"
      width="100px"
      height="40px"
      color="grey"
      backgroundColor="white"
      border="1px solid #aaa"
      borderRadius="5px"
      textAlign="center"
      {...props}
    />
  )
}

export const Number: FC<InputProps> = (props) => {
  return <Input type="number" {...props} />
}

export const Submit: FC<InputProps & { disabled: boolean }> = ({
  disabled,
  ...props
}) => {
  return (
    <Input
      type="submit"
      _hover={{ backgroundColor: "#eee" }}
      _disabled={disabled ? { backgroundColor: "#aaa" } : {}}
      {...props}
    />
  )
}

// export const Submit = styled(Base).attrs<CSSProperties>({ type: "submit" })`
//   &:hover {
//     background-color: #eee;
//   }
//   box-shadow: 0 0 5px #bbb;
//   ${(props) =>
//     props.disabled &&
//     css`
//           background-color: #aaa;
//         `}
// `

export const ExcelInputGroup: FC<BoxProps> = (props) => {
  return (
    <Box
      width="100px"
      height="40px"
      backgroundColor="white"
      border="1px solid #aaa"
      {...props}
    />
  )
}

// 以下は v3 で forwardRef の型問題あり
export const ExcelInput = forwardRef<InputProps, "input">((props, ref) => {
  return (
    <ChakraInput
      padding="0"
      width="inherit"
      height="height"
      color="grey"
      textAlign="center"
      ref={ref}
      {...props}
    />
  )
})

export const ExcelDisplay = forwardRef<InputProps, "input">((props, ref) => {
  return <ExcelInput readOnly={true} left="200px" ref={ref} {...props} />
})

export const InputReadOnly: FC<InputProps> = (props) => {
  return <ExcelInput readOnly={true} {...props} />
}

export const TextArea: FC<TextareaProps> = (props) => {
  return (
    <ChakraTextarea
      width="500px"
      height="100%"
      padding="5px"
      border="1px solid #aaa"
      backgroundColor="white"
      borderRadius="5px"
      color="#777"
      fontSize="1.2rem"
      lineHeight="1.4rem"
      resize="none"
      {...props}
    />
  )
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <ChakraButton
      padding="10px"
      width="110px"
      height="40px"
      backgroundColor="white"
      border="1px solid #aaa"
      borderRadius="5px"
      textAlign="center"
      _hover={{ backgroundColor: "#eee" }}
      _disabled={{ backgroundColor: "#aaa" }}
      {...props}
    />
  )
}

//   `}
//   ${(props) =>
//     props.disabled &&
//     css`
//       background-color: #aaa;

export const Checkbox: FC<typeof ChakraCheckbox & { width?: number }> = ({
  width,
  ...props
}) => {
  return <ChakraCheckbox padding="0" width={width ?? "30px"} {...props} />
}

// export const Checkbox = styled.input.attrs<CSSProperties>({ type: "checkbox" })`
//   padding: 0;
//   width: 30px;
// `

// export const ErrorBox = styled.span<CSSProperties>`
//   color: red;
// `
