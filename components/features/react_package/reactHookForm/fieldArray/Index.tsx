import React from "react"
import { UseReturnType } from "@/components/type/type"
import { FieldArrayForm } from "./ControlForm"

export function FieldArrayPC(): UseReturnType {
  const title = `useFieldArray`
  const subTitle = ``

  const jsx = <ParentCompo />

  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "RHF",
  }
}

const ParentCompo = () => {
  return <FieldArrayForm />
}

const code = `
`
