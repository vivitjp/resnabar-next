import { KeyDef } from "../syntaxHighlighter"

export const keysRHF: KeyDef[] = [
  // ■ Main(赤)
  {
    color: "IndianRed",
    keys: [
      "useForm",
      "SubmitHandler",
      "FormProvider",
      "UseFormReturn",
      "useFormContext",
      "UseFormProps",
      "Path",
      "useWatch",
    ],
  },
  // ■ Sub(青)
  {
    color: "RoyalBlue",
    keys: [
      "method",
      "control",
      "watch",
      "register",
      "handleSubmit",
      "formState",
      "shouldUnregister",
      "Controller",
    ],
  },
  // ■ オレンジ
  {
    color: "darkOrange",
    keys: ["react-hook-form", "MyInput", "useDefaultForm"],
  },
  // ■ 緑
  {
    color: "ForestGreen",
    keys: [
      "errors",
      "isValid",
      "required",
      "message",
      "defaultValues",
      "mode",
      "maxLength",
      "minLength",
      "min",
      "max",
      "validate",
      "value",
      "onBlur",
      "valueAsNumber",
      "fieldState",
      "field",
      "error",
    ],
  },
  // ■ グレー
  {
    color: "#555",
    keys: ["extends"],
  },
  {
    color: "Goldenrod",
    keys: ["SimpleType", "type", "GFieldType", "FormDataType", "Person"],
  },
]
