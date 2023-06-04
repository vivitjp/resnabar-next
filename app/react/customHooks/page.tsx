"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon"
import { UseTable1Query } from "@/components/features/react/customHooks/UseTable1Query"
import { UseTable2QueryLazy } from "@/components/features/react/customHooks/UseTable2QueryLazy"

const codes: (() => UseReturnType)[] = [UseTable1Query, UseTable2QueryLazy]

export default function PageCustomHooks() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
