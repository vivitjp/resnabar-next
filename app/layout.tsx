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
import { ProvidersReduxToolkit } from "@/store/reduxToolkit/provider"
import { Provider } from "@/components/ui/provider"

export const metadata = {
  title: "re:Sunabar",
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
        <ProvidersReduxToolkit>
          {/* <ProvidersRedux> */}
          {/* <Provider> */}
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
          {/* </ProvidersRedux> */}
          {/* </Provider> */}
        </ProvidersReduxToolkit>
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
