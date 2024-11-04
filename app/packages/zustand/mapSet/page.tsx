"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandMap } from "@/components/features/react_package/zustand/basic/UseZustandMap"
import { UseZustandSet } from "@/components/features/react_package/zustand/basic/UseZustandSet"

const codes: (() => UseReturnType)[] = [UseZustandMap, UseZustandSet]

export default function PageZustandMapSet() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
