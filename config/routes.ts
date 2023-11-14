export type RouteElements = {
  name: string
  path: string
}

type Routes = Record<string, RouteElements[]>

//test

export const routes: Routes = {
  Home: [{ name: "Home", path: "/" }],
  React: [
    { name: "useMemo", path: "/react/useMemo" },
    { name: "React.memo", path: "/react/reactMemo" },
    { name: "CustomHooks", path: "/react/customHooks" },
    { name: "RenderHooks", path: "/react/renderHooks" },
    { name: "useReducer", path: "/react/useReducer" },
    { name: "変数(ExpImpStatic)1", path: "/react/variables1" },
    { name: "変数(ExpImpStatic)2", path: "/react/variables2" },
  ],
  Redux: [
    { name: "Redux", path: "/redux/basic" },
    { name: "ReduxToolkit", path: "/reduxToolkit/basic" },
    { name: "AsyncThunk", path: "/reduxToolkit/asyncThunk" },
    { name: "Shallow/Deep", path: "/reduxToolkit/deepObject" },
  ],
  Zustand: [
    { name: "Store", path: "/zustand/store" },
    { name: "再描画", path: "/zustand/basic" },
    { name: "Map & Set", path: "/zustand/mapSet" },
    { name: "Subscribe", path: "/zustand/subscribe" },
    { name: "Persist", path: "/zustand/persist" },
    { name: "DevTools", path: "/zustand/devTools" },
  ],
  Packages: [{ name: "ReactHookForm1", path: "/packages/ReactHookForm1" }],
  WebAPI: [
    { name: "iObserver", path: "/webAPI/intersectionObserver" },
    { name: "iObserver(Hide)", path: "/webAPI/intersectionObserverHide" },
  ],
  JavaScript: [{ name: "Promise", path: "/javaScript/promise" }],
  TypeScript: [
    { name: "Object.entries", path: "/typeScript/entries" },
    { name: "try catchのError型", path: "/typeScript/tryCatch" },
  ],
  CSS: [{ name: "スライドMenu", path: "/CSS/animationSlide" }],
}
