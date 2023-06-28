"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxStore } from "@/components/features/reduxToolkit/basic/UseReduxStore"
import { UseReduxProvider } from "@/components/features/reduxToolkit/basic/UseReduxProvider"
import { UseReduxSlice } from "@/components/features/reduxToolkit/basic/UseReduxSlice"
import { UseReduxCaseCity } from "@/components/features/reduxToolkit/cases/UseReduxCaseCity"

const codes: (() => UseReturnType)[] = [
  UseReduxCaseCity,
  UseReduxStore,
  UseReduxProvider,
  UseReduxSlice,
]

export default function PageReduxBasic() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
