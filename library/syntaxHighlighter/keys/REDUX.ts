import { KeyDef } from "../syntaxHighlighter"

export const keysRedux: KeyDef[] = [
  {
    name: "Module",
    color: "SteelBlue",
    keys: ["export", "return", "type", "import", "default", "from"],
  },
  {
    name: "React",
    color: "CadetBlue",
    keys: ["React", "children", "ReactNode"],
  },
  //"react-redux" & "@reduxjs/toolkit"
  {
    name: "Redux,ReduxToolkit",
    color: "IndianRed",
    keys: [
      "Redux",
      "reduxjs",
      "toolkit",
      "react-redux",
      "createSlice",
      "createAsyncThunk",
      "PayloadAction",
      "TypedUseSelectorHook",
      "useDispatch",
      "useSelector",
      "Provider",
      "configureStore",
      "ThunkAction",
      "Action",
      "combineReducers",
      "legacy_createStore",
    ],
  },
  // ■ Redux 型
  {
    name: "Redux型",
    color: "ForestGreen",
    keys: ["AppState", "AppThunk", "AppDispatch"],
  },
  // ■ Redux Hooks
  {
    name: "Redux(customHooks)",
    color: "RoyalBlue",
    keys: ["useAppDispatch", "useAppSelector"],
  },
  // ■ Redux Methods
  {
    name: "Redux Methods",
    color: "LightSeaGreen",
    keys: ["reducers", "reducer", "dispatch", "getState"],
  },
  // ■ Redux Attribute
  {
    name: "Redux 属性",
    color: "darkOrange",
    keys: [
      "name",
      "initialState",
      "payload",
      "state",
      "action",
      "store",
      "actions",
      "pending",
      "fulfilled",
    ],
  },
  // ■ TypeScript
  {
    name: "TypeScript",
    color: "#555",
    keys: [
      "typeof",
      "keyof",
      "extends",
      "in",
      "interface",
      "type",
      "as",
      "is",
      "implements",
      "constructor",
      "ReturnType",
    ],
  },
  // ■ TypeScript Values
  {
    name: "TypeScript 変数型",
    color: "#888",
    keys: [
      "null",
      "undefined",
      "never",
      "any",
      "void",
      "unknown",
      "string",
      "number",
      "boolean",
    ],
  },
  // ■ TypeScript HTML 型
  {
    name: "TypeScript HTML型",
    color: "#555",
    keys: [
      "HTMLElement",
      "HTMLDivElement",
      "HTMLSpanElement",
      "HTMLSelectElement",
      "HTMLInputElement",
    ],
  },
  //JavaScript
  {
    name: "JavaScript",
    color: "#555",
    keys: [
      "const",
      "promise",
      "async",
      "await",
      "false",
      "true",
      "console",
      "new",
      "onClick",
      "onChange",
    ],
  },
  //CSS
  {
    name: "CSS",
    color: "#555",
    keys: ["none", "solid", "dotted", "dashed", "rgba", "absolute"],
  },
]
