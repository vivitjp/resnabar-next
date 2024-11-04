"use client"

import { Flex } from "@chakra-ui/react"
import { ReactElement } from "react"

type Table<T> = {
  data: T[] | undefined
  callback: (item: T) => ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Table = <T,>({ data, callback }: Table<T>) => {
  return (
    <>
      {!!data?.length && (
        <Flex
          flexFlow="column"
          width="160px"
          border="1px solid #aaa"
          padding="10px"
        >
          {data.map((item, index) => (
            <Flex flexFlow="row" key={index}>
              {callback(item)}
            </Flex>
          ))}
        </Flex>
      )}
    </>
  )
}
