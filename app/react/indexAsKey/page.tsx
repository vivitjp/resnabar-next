"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseIndexAsKey } from "@/components/features/react/indexAsKey/IndexAsKey"
import { UseIndexAsKeyRandomUUID } from "@/components/features/react/indexAsKey/IndexAsKeyRandomUUID"
import { UseIndexAsKeyGetRandomValues } from "@/components/features/react/indexAsKey/IndexAsKeyGetRandomValues"

const codes: (() => UseReturnType)[] = [
  UseIndexAsKey,
  UseIndexAsKeyRandomUUID,
  UseIndexAsKeyGetRandomValues,
]

export default function PageUseIndexAsKey() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
