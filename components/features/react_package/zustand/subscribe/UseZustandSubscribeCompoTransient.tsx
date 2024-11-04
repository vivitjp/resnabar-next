import { UseReturnType } from "@/components/type/type"
import { useSubscribeStore } from "./UseZustandSubscribe"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Flex } from "@chakra-ui/react"

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
  <Flex flexFlow="row" >
    Nonリアクティブ
    <Flex flexFlow="row" > {nameRef.current} </Flex>
  </Flex>
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
    <Flex flexFlow="row" gap="10px" alignItems="center">
      <input
        type="checkbox"
        id={id}
        onChange={handleChangeCheck}
        checked={isChecked}
      />
      <label htmlFor={id}>マウント コンポーネント</label>
      {isChecked && <TransientComponent />}
    </Flex>
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
    <Flex
      flexFlow="row"
      fontSize="18px"
      padding="5px"
      gap="20px"
      alignItems="center"
    >
      Nonリアクティブ
      <Flex
        flexFlow="row"
        fontSize="24px"
        padding="5px"
        border="1px solid #aaa"
      >
        {nameRef.current}
      </Flex>
    </Flex>
  )
}
