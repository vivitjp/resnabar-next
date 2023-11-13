"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxDeepObject } from "@/components/features/reduxToolkit/deepObject/UseReduxDeepObject"
import { UseJSObject } from "@/components/features/reduxToolkit/deepObject/UseJSObject"

const codes: (() => UseReturnType)[] = [UseJSObject, UseReduxDeepObject]

export default function PageReduxDeepObject() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
