"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxAsyncThunkSlice } from "@/components/features/reduxToolkit/basic/UseReduxAsyncThunkSlice"
import { UseReduxAsyncThunk } from "@/components/features/reduxToolkit/cases/UseReduxAsyncThunk"

const codes: (() => UseReturnType)[] = [
  UseReduxAsyncThunk,
  UseReduxAsyncThunkSlice,
]

export default function PageReduxAsyncThunk() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
