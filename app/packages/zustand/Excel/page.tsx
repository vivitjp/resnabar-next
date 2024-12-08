"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandExcel1 } from "@/components/features/react_package/zustand/excel/UseZustandExcel1"
import { UseZustandExcel2 } from "@/components/features/react_package/zustand/excel/UseZustandExcel2"

const codes: (() => UseReturnType)[] = [UseZustandExcel1, UseZustandExcel2]

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
