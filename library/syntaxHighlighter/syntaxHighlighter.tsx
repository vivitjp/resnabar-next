import { keysJotai } from "./keys/Jotai"
import { keysJSTS } from "./keys/JSTS"
import { keysRedux } from "./keys/REDUX"
import { keysRHF } from "./keys/RHF"
import { keysSVG } from "./keys/SVG"

const codeKeyType = {
  JSTS: "JSTS",
  Redux: "Redux",
  SVG: "SVG",
  RHF: "RHF",
  Jotai: "Jotai",
} as const

const KeySelector = (codeKeyType: string) => {
  switch (codeKeyType) {
    case "Redux":
      return keysRedux
    case "SVG":
      return keysSVG
    case "RHF":
      return keysRHF
    case "Jotai":
      return [...keysJSTS, ...keysJotai]
    default:
      return keysJSTS
  }
}

export type CodeKeyType = (typeof codeKeyType)[keyof typeof codeKeyType]

export type KeyDef = {
  name?: string
  color: string
  keys: string[]
}

type SyntaxHighlight = {
  code: string
  codeKeyType?: CodeKeyType | undefined
}

export const syntaxHighlight = ({
  code,
  codeKeyType = "SVG",
}: SyntaxHighlight) => {
  let keyDef: KeyDef[] = []
  keyDef = KeySelector(codeKeyType)

  const escaped = escapeHtml(code) ?? ""

  const rebuilt: JSX.Element[] = []

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    //Quotation("")
    result = result.replaceAll(
      /&quot;(.+?)&quot;/g,
      '<span class="syntaxQ">&quot;$1&quot;</span>'
    )

    // //Quotation({})
    // result = result.replaceAll(
    //   /\{(.+?)\}/g,
    //   '<span class="syntaxQ">{$1}</span>'
    // )

    //Keywords
    keyDef.forEach(({ color, keys }) => {
      keys.forEach((key) => {
        const re = new RegExp(`\\b${key}\\b`, "g")
        result = result.replaceAll(
          re,
          `<span class="syntax" style="color:${color}">${key}</span>`
        )
      })
    })

    rebuilt.push(
      <pre
        key={idx}
        dangerouslySetInnerHTML={{
          __html: result,
        }}
      />
    )
  })
  return rebuilt
}

const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g
const HTML_REPLACEMENTS: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
}
function replaceUnsafeChar(ch: string): string {
  return HTML_REPLACEMENTS[ch]
}

export function escapeHtml(str: string): string {
  if (HTML_ESCAPE_REPLACE_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
  }
  return str
}
