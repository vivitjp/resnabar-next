"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReducerCompo } from "@/components/features/react/useReducer/UseReducerCompo"
import { UseReducerCascade } from "@/components/features/react/useReducer/UseReducerCascade"
import { UseReducerCascadeByParameter } from "@/components/features/react/useReducer/UseReducerCascadeByParameter"
import { UseReducer } from "@/components/features/react/useReducer/UseReducer"

const codes: (() => UseReturnType)[] = [
  UseReducer,
  UseReducerCompo,
  UseReducerCascade,
  UseReducerCascadeByParameter,
]

export default function PageUseReducer() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
