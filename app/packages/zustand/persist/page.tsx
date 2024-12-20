"use client"

import { Flex } from "@chakra-ui/react"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseZustandPersistIndexDB } from "@/components/features/react_package/zustand/persist/UseZustandPersistIndexDB"
import { UseZustandPersistLocalStorage } from "@/components/features/react_package/zustand/persist/UseZustandPersistLocalStorage"
import { UseZustandPersistLocalStoragePartialize } from "@/components/features/react_package/zustand/persist/UseZustandPersistLocalStoragePartialize"
import { UseZustandPersistSession } from "@/components/features/react_package/zustand/persist/UseZustandPersistSession"

const codes: (() => UseReturnType)[] = [
  UseZustandPersistSession,
  UseZustandPersistLocalStorage,
  UseZustandPersistIndexDB,
  UseZustandPersistLocalStoragePartialize,
]

export default function PageZustandPersist() {
  return (
    <Flex flexFlow="column" padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Flex>
  )
}
