import { UseReturnType } from "@/components/common/type/type"
import { CodeKeyType } from "@/library/syntaxHighlighter/syntaxHighlighter"

export function useRenderHooksUseInput(): UseReturnType {
  const title = `RenderHook: Input`

  const codeKeyType: CodeKeyType = "JSTS"
  return {
    title,
    code,
    options: [],
    codeKeyType: codeKeyType,
  }
}

const code = `export const useInput = () => {
  const [inputValue, setInputValue] = useState("")
  const handleChange = () => {}
 
  const RenderInput = (
    <input onChange={handleChange} value={inputValue} />
  )
  return { RenderInput, inputValue }
}`
