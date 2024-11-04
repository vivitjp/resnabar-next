"use client"

import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxAsyncThunkSlice } from "@/components/features/reduxToolkit/basic/UseReduxAsyncThunkSlice"
import { UseReduxAsyncThunk } from "@/components/features/reduxToolkit/cases/UseReduxAsyncThunk"
import { Flex } from "@chakra-ui/react"

const codes: (() => UseReturnType)[] = [
  UseReduxAsyncThunk,
  UseReduxAsyncThunkSlice,
]

export default function PageReduxAsyncThunk() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}

// test
