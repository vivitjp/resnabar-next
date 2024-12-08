export type RouteElements = {
  name: string
  path: string
}

type Routes = Record<string, RouteElements[]>

//test

export const routes: Routes = {
  Home: [{ name: "Home", path: "/" }],
  React: [
    { name: "Index As Key", path: "/react/indexAsKey" },
    { name: "useMemo", path: "/react/useMemo" },
    { name: "React.memo", path: "/react/reactMemo" },
    { name: "CustomHooks", path: "/react/customHooks" },
    { name: "RenderHooks", path: "/react/renderHooks" },
    { name: "useReducer", path: "/react/useReducer" },
    { name: "変数のStatic性:1", path: "/react/variables1" },
    { name: "変数のStatic性:2", path: "/react/variables2" },
  ],
  Redux: [
    { name: "Redux", path: "/redux/basic" },
    { name: "ReduxToolkit", path: "/reduxToolkit/basic" },
    { name: "AsyncThunk", path: "/reduxToolkit/asyncThunk" },
    { name: "Shallow/Deep", path: "/reduxToolkit/deepObject" },
  ],
  Zustand: [
    { name: "Store", path: "/packages/zustand/store" },
    { name: "再描画", path: "/packages/zustand/basic" },
    { name: "Map & Set", path: "/packages/zustand/mapSet" },
    { name: "Subscribe", path: "/packages/zustand/subscribe" },
    { name: "Persist", path: "/packages/zustand/persist" },
    { name: "DevTools", path: "/packages/zustand/devTools" },
    { name: "Excel連鎖", path: "/packages/zustand/Excel" },
  ],
  Jotai: [
    { name: "基礎", path: "/packages/Jotai/basic" },
    { name: "非同期", path: "/packages/Jotai/async" },
    { name: "Excel連鎖", path: "/packages/Jotai/excel" },
  ],
  Chakra: [{ name: "Chakra(RHF)", path: "/packages/Chakra/RHF" }],
  ReactHookForm: [
    { name: "Register:AIO", path: "/packages/ReactHookForm/RegisterAIO" },
    { name: "Control:AIO", path: "/packages/ReactHookForm/ControlAIO" },
    { name: "Generic", path: "/packages/ReactHookForm/RegisterGenerics" },
    { name: "ExcelCell:AIO", path: "/packages/ReactHookForm/ExcelAIO" },
    { name: "Control", path: "/packages/ReactHookForm/ControlPC" },
    { name: "FieldArray", path: "/packages/ReactHookForm/FieldArray" },
    { name: "Watch", path: "/packages/ReactHookForm/Watch" },
    { name: "複数Methodsタブ運用", path: "/packages/ReactHookForm/Joined" },
  ],
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
