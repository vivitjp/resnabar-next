"use client"

import { SectionRef } from "@/components/common/styleDivChakra"
import { FC, ReactNode, useEffect, useRef } from "react"

type Props = {
  children: ReactNode
  onIntersect: (status: "Shown" | "Hidden") => void
  threshold?: number
}

export const ContainerHidden: FC<Props> = ({
  onIntersect,
  threshold = 0.5,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const localRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect("Shown")
        if (!entry.isIntersecting) onIntersect("Hidden")
      },
      { threshold }
    )

    if (localRef === null) return
    observer.observe(localRef)
    return () => {
      if (localRef) observer.unobserve(localRef)
    }
  }, [onIntersect, threshold])

  return <SectionRef ref={ref}>{children}</SectionRef>
}
