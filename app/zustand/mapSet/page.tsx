"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandMap } from "@/components/features/zustand/basic/UseZustandMap"
import { UseZustandSet } from "@/components/features/zustand/basic/UseZustandSet"

const codes: (() => UseReturnType)[] = [UseZustandMap, UseZustandSet]

export default function PageZustandMapSet() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}