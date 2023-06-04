import { UseReturnType } from "@/components/common/type/type"

export function UseBaseData(): UseReturnType {
  const title = `型とデータ`

  return {
    title,
    code,
    codeKeyType: "JSTS",
  }
}
const code = `type Data = {
  name: string
  age: number
  active: boolean
}

const data: Data = { name: "John Wick", age: 39, active: true }`
