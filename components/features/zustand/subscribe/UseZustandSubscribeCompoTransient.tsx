import { UseReturnType } from "@/components/common/type/type"
import { Row } from "@/components/common/styleDiv"
import { useSubscribeStore } from "./UseZustandSubscribe"
import React, { useCallback, useEffect, useRef, useState } from "react"

export function UseZustandSubscribeCompoTransient(): UseReturnType {
  return {
    title: `Transient updates: 頻繁な更新のためのノンリアクティブ更新`,
    code,
    codeFold: true,
    options: [],
    jsx: <ZustandNonReactive />,
    codeKeyType: "JSTS",
  }
}

const code = `// ■ getState() と subscribe() でマウント時の値をノンリアクティブに取得
const nameRef = useRef(useSubscribeStore.getState().name)
useEffect(
  () =>
    useSubscribeStore.subscribe((state) => (nameRef.current = state.name)),
  []
)

return (
  <Row>
    Nonリアクティブ
    <Row> {nameRef.current} </Row>
  </Row>
)`

const ZustandNonReactive = () => {
  const [isChecked, setIsChecked] = useState(false)

  const id = React.useId()

  const handleChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.checked
      setIsChecked(value)
    },
    []
  )

  return (
    <Row gap="10px" alignItems="center">
      <input
        type="checkbox"
        id={id}
        onChange={handleChangeCheck}
        checked={isChecked}
      />
      <label htmlFor={id}>マウント コンポーネント</label>
      {isChecked && <TransientComponent />}
    </Row>
  )
}

// ■ getState() と subscribe() でマウント時の値をノンリアクティブに取得
const TransientComponent = () => {
  // Fetch initial state
  const nameRef = useRef(useSubscribeStore.getState().name)
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  useEffect(
    () =>
      useSubscribeStore.subscribe((state) => (nameRef.current = state.name)),
    []
  )

  return (
    <Row fontSize="18px" padding="5px" gap="20px" alignItems="center">
      Nonリアクティブ
      <Row fontSize="24px" padding="5px" border="1px solid #aaa">
        {nameRef.current}
      </Row>
    </Row>
  )
}
