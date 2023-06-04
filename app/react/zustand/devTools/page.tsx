"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandDevTools } from "@/components/features/react/zustandDevTools/UseZustandDevTools"

const codes: (() => UseReturnType)[] = [UseZustandDevTools]

export default function PageZustandDevTools() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
