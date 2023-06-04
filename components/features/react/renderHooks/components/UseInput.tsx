import { ChangeEvent, useState } from "react"

type UseInput = { RenderInput: JSX.Element; inputValue: string }

export const useInput = (): UseInput => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const RenderInput = (
    <input type="text" onChange={handleChange} value={inputValue} />
  )

  return { RenderInput, inputValue }
}
