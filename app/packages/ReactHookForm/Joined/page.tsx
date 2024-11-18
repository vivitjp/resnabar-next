"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { JoinedRHF_NG } from "@/components/features/react_package/reactHookForm/JoinedRHF_NG"
import { JoinedRHF_OK } from "@/components/features/react_package/reactHookForm/JoinedRHF_OK"
import { JoinedRHF_OK2 } from "@/components/features/react_package/reactHookForm/JoinedRHF_OK2"
import { JoinedRHF_Common } from "@/components/features/react_package/reactHookForm/JoinedRHF_common"

const codes: (() => UseReturnType)[] = [
  JoinedRHF_Common,
  JoinedRHF_NG,
  JoinedRHF_OK,
  JoinedRHF_OK2,
]

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
