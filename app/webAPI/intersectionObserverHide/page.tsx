"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { useIntersectionObserverHideFeature } from "@/components/features/webAPI/IntersectionObserverHidden/useIntersectionObserverHIddenFeature"

const codes: (() => UseReturnType)[] = [useIntersectionObserverHideFeature]

export default function PageWebApiIntersectionObserver() {
  return (
    <Column padding={6} gap={40}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
