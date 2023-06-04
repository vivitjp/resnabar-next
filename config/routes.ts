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
    { name: "Zustand(Store)", path: "/react/zustand/store" },
    { name: "Zustand(再描画)", path: "/react/zustand/basic" },
    { name: "Zustand(Map & Set)", path: "/react/zustand/mapSet" },
    { name: "Zustand(Subscribe)", path: "/react/zustand/subscribe" },
    { name: "Zustand(Persist)", path: "/react/zustand/persist" },
    { name: "Zustand(DevTools)", path: "/react/zustand/devTools" },
    { name: "PDF(不動作)", path: "/react/pdf" },
  ],
  WebAPI: [
    { name: "iObserver", path: "/webAPI/intersectionObserver" },
    { name: "iObserver(Hide)", path: "/webAPI/intersectionObserverHide" },
  ],
}
