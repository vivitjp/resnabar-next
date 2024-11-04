"use client"

import { SectionRef } from "@/components/common/styleDivChakra"
import { FC, ReactNode, useEffect, useRef } from "react"

/*
IntersectionObserverEntry
  boundingClientRect: 対象要素の外接矩形
  intersectionRatio: intersectionRect と boundingClientRect の比率
  intersectionRect: 対象の表示領域を表す
  isIntersecting: 論理値で、対象要素が、交差を監視しているルートを超えたら true
  rootBounds: 交差を監視しているルート
  target: ルートとの交差が変化する Element
  time: IntersectionObserver の時刻の起点を基準にして、交差が記録された時刻
 */

type Props = {
  children: ReactNode
  index: number
  onIntersectCallback?: (index: number) => void
  threshold?: number
}

export const Container: FC<Props> = ({
  index,
  onIntersectCallback, //(index: number) => void
  children,
  threshold = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const localRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersectCallback)
          onIntersectCallback(index)
      },
      { threshold }
    )

    if (localRef === null) return
    observer.observe(localRef)
    return () => {
      if (localRef) observer.unobserve(localRef)
    }
  }, [index, onIntersectCallback, threshold])

  return (
    <SectionRef ref={ref} overflowY={undefined}>
      {children}
    </SectionRef>
  )
}
