"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { JoinedRHF_NG } from "@/components/features/react_package/reactHookForm/JoinedRHF_NG"
import { JoinedRHF_OK } from "@/components/features/react_package/reactHookForm/JoinedRHF_OK"

const codes: (() => UseReturnType)[] = [JoinedRHF_NG, JoinedRHF_OK]

export default function Main() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
