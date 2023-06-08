"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { useRenderHooksUseInput } from "@/components/features/react/renderHooks/useRenderHooks0"
import { useRenderHooks1AllInOne } from "@/components/features/react/renderHooks/useRenderHooks1AllInOne"
import { useRenderHooks2Cascaded } from "@/components/features/react/renderHooks/useRenderHooks2Cascaded"

const codes: (() => UseReturnType)[] = [
  useRenderHooksUseInput,
  useRenderHooks1AllInOne,
  useRenderHooks2Cascaded,
]

export default function PageRenderHooks() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
