// "use client"

// import styled, { CSSProperties, css } from "styled-components"

// const Base = styled.input<CSSProperties>`
//   ${(props) => css`
//     padding: 0.2rem;
//     width: ${props.width ?? "100px"};
//     height: ${props.height ?? "40px"};
//     color: grey;
//     background-color: white;
//     border: 1px solid #aaa;
//     border-radius: 5px;
//     text-align: center;
//   `}
// `
// export const Input = styled(Base)``
// export const Number = styled(Base).attrs<CSSProperties>({ type: "number" })``

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

// export const ExcelInputGroup = styled.div<CSSProperties>`
//   ${(props) => css`
//     width: ${props.width ?? "100px"};
//     height: ${props.height ?? "40px"};
//     background-color: white;
//     border: 1px solid #aaa;
//   `}
// `
// export const ExcelInput = styled.input<CSSProperties>`
//   //position: absolute;
//   padding: 0;
//   width: inherit;
//   height: inherit;
//   color: grey;
//   text-align: center;
// `
// export const ExcelDisplay = styled(ExcelInput).attrs<CSSProperties>({
//   readOnly: true,
// })`left: 200px`

// export const InputReadOnly = styled(Base).attrs<CSSProperties>({
//   readOnly: true,
// })``

// export const TextArea = styled.textarea<CSSProperties>`
//   width: 500px;
//   height: 100%;
//   padding: 5px;
//   border: 1px solid #aaa;
//   background-color: white;
//   border-radius: 5px;
//   color: #777;
//   font-size: 1.2rem;
//   //font-family: ui-monospace;
//   line-height: 1.4rem;
//   resize: none;
// `

// export const Button = styled.button<CSSProperties>`
//   ${(props) => css`
//     width: ${props.width ?? "110px"};
//     height: ${props.height ?? "40px"};
//     padding: ${props.padding ?? "10px"};
//     border: none;
//     border: 1px solid #aaa;
//     background-color: white;
//     border-radius: 5px;
//     text-align: ${props.textAlign ?? "center"};
//     box-shadow: 0 0 5px #bbb;
//     &:hover {
//       background-color: #eee;
//     }
//   `}
//   ${(props) =>
//     props.disabled &&
//     css`
//       background-color: #aaa;
//     `}
// `

// export const Checkbox = styled.input.attrs<CSSProperties>({ type: "checkbox" })`
//   padding: 0;
//   width: 30px;
// `

// export const ErrorBox = styled.span<CSSProperties>`
//   color: red;
// `
