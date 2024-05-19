"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { RHFGenericComponents } from "@/components/features/react/reactHookForm/generic/Components"
import { RHFGenericSample } from "@/components/features/react/reactHookForm/generic/Index"

const codes: (() => UseReturnType)[] = [RHFGenericComponents, RHFGenericSample]

export default function Main() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
