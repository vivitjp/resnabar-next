export type OptionsType<T> = {
  title?: string
  subTitle: string | undefined
  extraNote?: string
  value: T
  JSX: JSX.Element
  handleClick?: React.MouseEventHandler<SVGElement>
  active?: boolean
}
