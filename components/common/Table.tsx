"use client"

import { ReactElement } from "react"
import { Column, Row } from "./styleDiv"

type Table<T> = {
  data: T[] | undefined
  callback: (item: T) => ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Table = <T,>({ data, callback }: Table<T>) => {
  return (
    <>
      {!!data?.length && (
        <Column width="160px" border="1px solid #aaa" padding="10px">
          {data.map((item, index) => (
            <Row key={index}>{callback(item)}</Row>
          ))}
        </Column>
      )}
    </>
  )
}
