"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseTable1Query } from "@/components/features/react/customHooks/UseTable1Query"
import { UseTable2QueryLazy } from "@/components/features/react/customHooks/UseTable2QueryLazy"

const codes: (() => UseReturnType)[] = [UseTable1Query, UseTable2QueryLazy]

export default function PageCustomHooks() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
