export type Person = {
  name: string
  id: string
}

type GFieldType = Record<string, unknown>

//Data 制約
export const constrain: Record<keyof Person, GFieldType> = {
  name: {
    required: "必須項目",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
  id: {
    required: "必須項目",
    minLength: { value: 4, message: "4文字以上必須です" },
  },
}
