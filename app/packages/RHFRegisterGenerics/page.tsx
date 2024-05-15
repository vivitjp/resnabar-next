"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { RHFGenericSample } from "@/components/features/react/reactHookForm/RHFGenericSample"
import { RHFGenericComponents } from "@/components/features/react/reactHookForm/RHFGenericComponents"

const codes: (() => UseReturnType)[] = [RHFGenericComponents, RHFGenericSample]

export default function PageRHFRegisterGenerics() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
