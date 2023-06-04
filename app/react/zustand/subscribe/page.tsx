"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandSubscribe } from "@/components/features/react/zustandSubscribe/UseZustandSubscribe"
import { UseZustandSubscribeComponent } from "@/components/features/react/zustandSubscribe/UseZustandSubscribeCompo"
import { UseZustandSubscribeCompoTransient } from "@/components/features/react/zustandSubscribe/UseZustandSubscribeCompoTransient"

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
