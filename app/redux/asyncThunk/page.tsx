"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxAsyncThunk } from "@/components/features/redux/cases/UseReduxAsyncThunk"
import { UseReduxAsyncThunkSlice } from "@/components/features/redux/basic/UseReduxAsyncThunkSlice"

const codes: (() => UseReturnType)[] = [
  UseReduxAsyncThunkSlice,
  UseReduxAsyncThunk,
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
