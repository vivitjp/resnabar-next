"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandSubscribe } from "@/components/features/react_package/zustand/subscribe/UseZustandSubscribe"
import { UseZustandSubscribeComponent } from "@/components/features/react_package/zustand/subscribe/UseZustandSubscribeCompo"
import { UseZustandSubscribeCompoTransient } from "@/components/features/react_package/zustand/subscribe/UseZustandSubscribeCompoTransient"

const codes: (() => UseReturnType)[] = [
  UseZustandSubscribe,
  UseZustandSubscribeComponent,
  UseZustandSubscribeCompoTransient,
]

export default function PageZustandSubscribe() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
