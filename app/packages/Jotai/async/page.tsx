"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { JotaiAsyncFetch } from "@/components/features/react_package/jotai/async/AsyncFetch"
import { AsyncFetchLazyFetch } from "@/components/features/react_package/jotai/async/AsyncFetchLazy"

const codes: (() => UseReturnType)[] = [JotaiAsyncFetch, AsyncFetchLazyFetch]

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
