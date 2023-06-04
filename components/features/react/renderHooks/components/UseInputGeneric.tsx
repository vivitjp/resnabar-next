import { ChangeEvent, useState } from "react"

type UseInput<T> = { RenderInput: JSX.Element; inputValue: T | undefined }

export const UseInputGeneric = <T,>({ id }: { id: number }): UseInput<T> => {
  const [inputValue, setInputValue] = useState<T>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value as T)
  }

  const RenderInput = (
    <input
      type="text"
      onChange={handleChange}
      value={inputValue as string}
      data-testId={`input-${id}`}
    />
  )

  return { RenderInput, inputValue }
}
