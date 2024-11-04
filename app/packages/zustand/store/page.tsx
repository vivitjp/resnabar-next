"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandStore } from "@/components/features/react_package/zustand/basic/UseZustandStore"
import { UseZustandStoreSlice } from "@/components/features/react_package/zustand/basic/UseZustandStoreSlice"

const codes: (() => UseReturnType)[] = [UseZustandStore, UseZustandStoreSlice]

export default function PageZustandStore() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
