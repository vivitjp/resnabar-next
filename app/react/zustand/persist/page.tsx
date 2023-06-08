"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/common/type/type"
import { FeaturePresenter } from "@/components/featureCommon/presenter/FeaturePresenter"
import { UseZustandPersistIndexDB } from "@/components/features/zustand/persist/UseZustandPersistIndexDB"
import { UseZustandPersistLocalStorage } from "@/components/features/zustand/persist/UseZustandPersistLocalStorage"
import { UseZustandPersistLocalStoragePartialize } from "@/components/features/zustand/persist/UseZustandPersistLocalStoragePartialize"
import { UseZustandPersistSession } from "@/components/features/zustand/persist/UseZustandPersistSession"

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
