"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandCascaded } from "@/components/features/react_package/zustand/basic/UseZustandCascaded"
import { UseZustandObject } from "@/components/features/react_package/zustand/basic/UseZustandObject"
import { UseZustandObjectNamedShallow } from "@/components/features/react_package/zustand/basic/UseZustandObjectNamedShallow"
import { UseZustandObjectNamedShallowNoState } from "@/components/features/react_package/zustand/basic/UseZustandObjectNamedShallowNoState"
import { UseZustandObjectShallow } from "@/components/features/react_package/zustand/basic/UseZustandObjectShallow"
import { UseZustandOneCompo } from "@/components/features/react_package/zustand/basic/UseZustandOneCompo"
import { UseZustandUseShallow } from "@/components/features/react_package/zustand/basic/UseZustandUseShallow"

const codes: (() => UseReturnType)[] = [
  UseZustandOneCompo,
  UseZustandCascaded,
  UseZustandObject,
  UseZustandUseShallow,
  UseZustandObjectShallow,
  UseZustandObjectNamedShallow,
  UseZustandObjectNamedShallowNoState,
]

export default function PageZustand() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
