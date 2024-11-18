import React from "react"
import { UseFormReturn } from "react-hook-form"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react"
import { constrain, Person } from "./type"

export const CompoB = ({ methods }: { methods: UseFormReturn<Person> }) => {
  const {
    register,
    formState: { errors },
  } = methods

  return (
    <>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">氏名(B)</FormLabel>
        <Input {...register("name", constrain.name)} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.id}>
        <FormLabel htmlFor="id">ID(B)</FormLabel>
        <Input {...register("id", constrain.id)} />
        <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}
