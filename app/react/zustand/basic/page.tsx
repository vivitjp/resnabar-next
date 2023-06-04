"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandCascaded } from "@/components/features/react/zustand/UseZustandCascaded"
import { UseZustandObject } from "@/components/features/react/zustand/UseZustandObject"
import { UseZustandObjectNamedShallow } from "@/components/features/react/zustand/UseZustandObjectNamedShallow"
import { UseZustandObjectNamedShallowNoState } from "@/components/features/react/zustand/UseZustandObjectNamedShallowNoState"
import { UseZustandObjectShallow } from "@/components/features/react/zustand/UseZustandObjectShallow"
import { UseZustandOneCompo } from "@/components/features/react/zustand/UseZustandOneCompo"

const codes: (() => UseReturnType)[] = [
  UseZustandOneCompo,
  UseZustandCascaded,
  UseZustandObject,
  UseZustandObjectShallow,
  UseZustandObjectNamedShallow,
  UseZustandObjectNamedShallowNoState,
]

export default function PageZustand() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
