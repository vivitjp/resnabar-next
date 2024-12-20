"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseBaseData } from "@/components/features/typeScript/loop/UseBaseData"
import { UseObjectEntries } from "@/components/features/typeScript/loop/UseObjectEntries"
import { UseObjectKeys } from "@/components/features/typeScript/loop/UseObjectKeys"
import { UseObjectValues } from "@/components/features/typeScript/loop/UseObjectValues"

const codes: (() => UseReturnType)[] = [
  UseBaseData,
  UseObjectKeys,
  UseObjectValues,
  UseObjectEntries,
]

export default function PageTypeScriptEntries() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
