"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandStore } from "@/components/features/react/zustand/UseZustandStore"
import { UseZustandStoreSlice } from "@/components/features/react/zustand/UseZustandStoreSlice"

const codes: (() => UseReturnType)[] = [UseZustandStore, UseZustandStoreSlice]

export default function PageZustandStore() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
