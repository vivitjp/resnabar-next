"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandCascaded } from "@/components/features/react_package/zustand/basic/UseZustandCascaded"
import { UseZustandObject } from "@/components/features/react_package/zustand/basic/UseZustandObject"
import { UseZustandObjectNamedShallow } from "@/components/features/react_package/zustand/basic/UseZustandObjectNamedShallow"
import { UseZustandObjectNamedShallowNoState } from "@/components/features/react_package/zustand/basic/UseZustandObjectNamedShallowNoState"
import { UseZustandObjectShallow } from "@/components/features/react_package/zustand/basic/UseZustandObjectShallow"
import { UseZustandOneCompo } from "@/components/features/react_package/zustand/basic/UseZustandOneCompo"

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
