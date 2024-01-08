"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseIndexAsKey } from "@/components/features/react/indexAsKey/IndexAsKey"
import { UseIndexAsKeyNoIds } from "@/components/features/react/indexAsKey/IndexAsKeyNoIds"

const codes: (() => UseReturnType)[] = [UseIndexAsKey, UseIndexAsKeyNoIds]

export default function PageUseIndexAsKey() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
