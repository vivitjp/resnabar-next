import React from "react"
import { UseFormReturn } from "react-hook-form"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react"
import { constrain, Person } from "./type"

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
