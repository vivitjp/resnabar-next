"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseBaseData } from "@/components/features/typeScript/loop/UseBaseData"
import { UseObjectEntries } from "@/components/features/typeScript/loop/UseObjectEntries"
import { UseObjectKeys } from "@/components/features/typeScript/loop/UseObjectKeys"
import { UseObjectValues } from "@/components/features/typeScript/loop/UseObjectValues"

const codes: (() => UseReturnType)[] = [
  UseBaseData,
  UseObjectKeys,
  UseObjectValues,
  UseObjectEntries,
]

export default function PageTypeScriptEntries() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
