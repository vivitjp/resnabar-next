"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { JotaiDerivedCounter } from "@/components/features/react_package/jotai/basic/DerivedCounter"
import { JotaiDerivedCounterReducer } from "@/components/features/react_package/jotai/basic/DerivedCounterReducer"
import { JotaiCounter } from "@/components/features/react_package/jotai/basic/Counter"
import { JotaiSelector } from "@/components/features/react_package/jotai/basic/Selector"

const codes: (() => UseReturnType)[] = [
  JotaiCounter,
  JotaiSelector,
  JotaiDerivedCounter,
  JotaiDerivedCounterReducer,
]

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
