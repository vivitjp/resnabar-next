"use client"

import { Column } from "@/components/common/styleDiv"
import { UseReturnType } from "@/components/type/type"
import { FeaturePresenter } from "@/components/common/presenter/FeaturePresenter"
import { UseReduxSample } from "@/components/features/redux/basic/UseReduxSample"
import { UseReduxCode } from "@/components/features/redux/basic/UseRedux"

const codes: (() => UseReturnType)[] = [UseReduxSample, UseReduxCode]

export default function PageReduxBasic() {
  return (
    <Column padding={"6px"} gap={"40px"}>
      {!!codes.length &&
        codes.map((useCode, idx) => {
          return <FeaturePresenter key={idx} useCode={useCode} />
        })}
    </Column>
  )
}
