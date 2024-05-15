"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { RHFRegisterAIOWatch } from "@/components/features/react/reactHookForm/RHFRegisterAIOWatch"

const codes: (() => UseReturnType)[] = [RHFRegisterAIOWatch]

export default function PageRHFRegisterAIOWatch() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
