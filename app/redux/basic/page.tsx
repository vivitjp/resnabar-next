"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxProvider } from "@/components/features/redux/basic/UseReduxProvider"
import { UseReduxSlice } from "@/components/features/redux/basic/UseReduxSlice"
import { UseReduxStore } from "@/components/features/redux/basic/UseReduxStore"
import { UseReduxCaseCity } from "@/components/features/redux/cases/UseReduxCaseCity"

const codes: (() => UseReturnType)[] = [
  UseReduxStore,
  UseReduxProvider,
  UseReduxSlice,
  UseReduxCaseCity,
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
