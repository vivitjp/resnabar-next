import { CSSProperties, styled } from "styled-components"

type ErrorMessage = {
  errorMessage?: string | undefined
}

export const ErrorMessage = ({ errorMessage = "" }: ErrorMessage) => {
  return (
    <ErrorBox>{errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}</ErrorBox>
  )
}

const ErrorBox = styled.span<CSSProperties>`
  color: red;
`
