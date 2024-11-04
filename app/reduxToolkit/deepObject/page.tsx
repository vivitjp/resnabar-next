"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseDeepObject } from "@/components/features/reduxToolkit/deepObject/UseDeepObject"
import { UseJSObject } from "@/components/features/reduxToolkit/deepObject/UseJSObject"
import { UseDeepObjectWrapped } from "@/components/features/reduxToolkit/deepObject/UseDeepObjectWrapped"

const codes: (() => UseReturnType)[] = [
  UseJSObject,
  UseDeepObject,
  UseDeepObjectWrapped,
]

export default function PageReduxDeepObject() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
