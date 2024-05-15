import React from "react"
import { UseReturnType } from "@/components/type/type"
import { SampleControlForm } from "./controllerCompo/SampleControlForm"

export function RHFControlPC(): UseReturnType {
  const title = `By Control`
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
  return <SampleControlForm />
}

const code = ``
