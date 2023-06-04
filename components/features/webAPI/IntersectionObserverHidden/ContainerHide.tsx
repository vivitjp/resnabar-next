"use client"

import { FC, ReactNode, useEffect, useRef } from "react"
import styled from "styled-components"

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
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const localRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect("Shown")
        if (!entry.isIntersecting) onIntersect("Hidden")
      },
      { threshold }
    )
    observer.observe(localRef)
    return () => {
      if (localRef) observer.unobserve(localRef)
    }
  }, [onIntersect, threshold])

  return <Section ref={ref}>{children}</Section>
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  border: 1px solid #aaa;
`
