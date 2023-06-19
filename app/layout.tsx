import { RouteElements, routes } from "@/config/routes"
import {
  Body,
  Group,
  GroupBody,
  GroupTitle,
  Header,
  MenuItem,
  MenuNav,
  Playground,
  Section,
} from "./Layout.style"
import "./globals.css"
import StyledComponentsRegistry from "@/library/libs/registry"
import { Providers } from "@/redux/provider"

// import { Inter } from "next/font/google"
// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "re:Snabar",
  description: "Next v13",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/images/VIVIT_V.jpg"
        />
      </head>
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <Section>
              <Header>re:Sunabar React on Next v13.4</Header>
              <Body>
                <MenuNav>
                  {Object.entries(routes).map((group) => (
                    <MenuGroup key={group[0]} group={group} />
                  ))}
                </MenuNav>
                <Playground>{children}</Playground>
              </Body>
            </Section>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}

const MenuGroup = ({
  group: [title, menus],
}: {
  group: [string, RouteElements[]]
}) => {
  return (
    <Group open>
      <GroupTitle data-testid="group-title">{title}</GroupTitle>
      <>
        {!!menus.length && (
          <GroupBody>
            {menus.map((menu) => (
              <MenuItem key={menu.name} href={menu.path}>
                {menu.name}
              </MenuItem>
            ))}
          </GroupBody>
        )}
      </>
    </Group>
  )
}
