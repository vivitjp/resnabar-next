"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandMap } from "@/components/features/react_package/zustand/basic/UseZustandMap"
import { UseZustandSet } from "@/components/features/react_package/zustand/basic/UseZustandSet"

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
