"use client"

import styled, { CSSProperties, css } from "styled-components"

const Base = styled.input<CSSProperties>`
  ${(props) => css`
    padding: 0.2rem;
    width: ${props.width ?? "100px"};
    height: ${props.height ?? "40px"};
    color: grey;
    background-color: white;
    border: 1px solid #aaa;
    border-radius: 5px;
    text-align: center;
  `}
`

export const Input = styled(Base)``
export const Number = styled(Base).attrs<CSSProperties>({ type: "number" })``

export const TextArea = styled.textarea<CSSProperties>`
  width: 500px;
  height: 100%;
  padding: 5px;
  border: 1px solid #aaa;
  background-color: white;
  border-radius: 5px;
  color: #777;
  font-size: 1.2rem;
  font-family: monospace;
  line-height: 1.4rem;
  resize: none;
`

export const Button = styled.button<CSSProperties>`
  ${(props) => css`
    width: ${props.width ?? "100px"};
    height: 40px;
    padding: 10px;
    border: none;
    border: 1px solid #aaa;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    &:hover {
      background-color: #eee;
    }
    box-shadow: 0 0 5px #bbb;
  `}
`

export const Checkbox = styled.input.attrs<CSSProperties>({ type: "checkbox" })`
  padding: 0;
  width: 30px;
`
