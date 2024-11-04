"use client"

import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { useAnimationSlide } from "@/components/features/css/animation/useSlide"
import { Flex } from "@chakra-ui/react"

const codes: (() => UseReturnType)[] = [useAnimationSlide]

export default function PageAnimationSlide() {
  return (
    <Flex flexFlow="column" padding={6} gap={40}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
