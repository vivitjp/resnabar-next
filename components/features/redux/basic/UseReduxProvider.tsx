import { UseReturnType } from "@/components/type/type"
export function UseReduxProvider(): UseReturnType {
  const title = `Providerと導入(layout)`

  return {
    title,
    code,
    options: [],
    codeKeyType: "Redux",
    codeFold: true,
  }
}
const code = `■ Provider [redux/provider.tsx]
 
"use client" <---- client!!!!!!!!
 
import store from "./store"
import { Provider } from "react-redux"
 
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
 
■ Next13での導入 [app/layout.tsx]
 
export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers> <--- Redux Provider
          <Section>
            <Header>TITLE</Header>
            <Body>{children}</Body>
          </Section>
        </Providers>
      </body>
    </html>
  )
}`
