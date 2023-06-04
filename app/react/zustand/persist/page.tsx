"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon"
import { UseZustandPersistIndexDB } from "@/components/features/react/zustandPersist/UseZustandPersistIndexDB"
import { UseZustandPersistLocalStorage } from "@/components/features/react/zustandPersist/UseZustandPersistLocalStorage"
import { UseZustandPersistLocalStoragePartialize } from "@/components/features/react/zustandPersist/UseZustandPersistLocalStoragePartialize"
import { UseZustandPersistSession } from "@/components/features/react/zustandPersist/UseZustandPersistSession"

const codes: (() => UseReturnType)[] = [
  UseZustandPersistSession,
  UseZustandPersistLocalStorage,
  UseZustandPersistIndexDB,
  UseZustandPersistLocalStoragePartialize,
]

export default function PageZustandPersist() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
