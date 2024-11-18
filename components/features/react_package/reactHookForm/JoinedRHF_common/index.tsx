import { UseReturnType } from "@/components/type/type"

export function JoinedRHF_Common(): UseReturnType {
  const title = `複数Methodsのタブ運用 コンポーネントAB`
  const subTitle = ``

  return {
    title,
    subTitle,
    code,
    codeFold: true,
    options: [],
    jsx: undefined,
    codeKeyType: "RHF",
  }
}
//-------------------------------
// Code
//-------------------------------
const code = `
  export const CompoA = ({ methods }: { methods: UseFormReturn<Person> }) => {
    const {
      register,
      formState: { errors },
    } = methods

    return (
      <>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">氏名(A)</FormLabel>
          <Input {...register("name", constrain.name)} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.id}>
          <FormLabel htmlFor="id">年齢(A)</FormLabel>
          <Input {...register("id", constrain.id)} />
          <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
        </FormControl>
      </>
    )
  }
`
