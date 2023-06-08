export type RouteElements = {
  name: string
  path: string
}

type Routes = Record<string, RouteElements[]>

export const routes: Routes = {
  Home: [{ name: "Home", path: "/" }],
  CSS: [{ name: "スライドMenu", path: "/CSS/animationSlide" }],
  TypeScript: [{ name: "Object.entries", path: "/typeScript/entries" }],
  React: [
    { name: "useMemo", path: "/react/useMemo" },
    { name: "React.memo", path: "/react/reactMemo" },
    { name: "CustomHooks", path: "/react/customHooks" },
    { name: "RenderHooks", path: "/react/renderHooks" },
  ],
  Zustand: [
    { name: "Store", path: "/react/zustand/store" },
    { name: "再描画", path: "/react/zustand/basic" },
    { name: "Map & Set", path: "/react/zustand/mapSet" },
    { name: "Subscribe", path: "/react/zustand/subscribe" },
    { name: "Persist", path: "/react/zustand/persist" },
    { name: "DevTools", path: "/react/zustand/devTools" },
  ],
  WebAPI: [
    { name: "iObserver", path: "/webAPI/intersectionObserver" },
    { name: "iObserver(Hide)", path: "/webAPI/intersectionObserverHide" },
  ],
}
