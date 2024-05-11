"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { ReactHookForm2 } from "@/components/features/react/reactHookForm/ReactHookForm2"
import { ReactHookFormGeneric } from "@/components/features/react/reactHookForm/ReactHookFormGeneric"

const codes: (() => UseReturnType)[] = [ReactHookFormGeneric, ReactHookForm2]

export default function PageReactHookForm2() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
