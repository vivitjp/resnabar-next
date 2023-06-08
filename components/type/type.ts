import { OptionsType } from "@/library/hooks/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"
import { Dispatch, ReactNode, SetStateAction } from "react"

export type UseReturnType<EX = unknown> = {
  height?: number
  visible?: [boolean, Dispatch<SetStateAction<boolean>>]
  title?: string
  subTitle?: string
  extraNote?: string
  code?: string
  codeFold?: boolean //コードを折りたたみにする
  codeKeyType?: CodeKeyType
  options?: OptionsType<string | number | boolean | [number, number] | EX>[]
  jsx?: ReactNode
}
