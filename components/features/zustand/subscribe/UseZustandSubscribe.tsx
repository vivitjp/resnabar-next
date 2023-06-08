import { UseReturnType } from "@/components/type/type"
import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { shallow } from "zustand/shallow"

// Store create 時に subscribeWithSelector で巻く
// 同レベルでの更新にのみ反応(子コンポーネント内部変化には反応せず)
export const useSubscribeStore = create(
  subscribeWithSelector(() => ({ name: "John", age: 19, active: true }))
)

// ■ subscribeメソッド
// subscribe: <(string | boolean)[]>(
//   selector: (state: { name: string; age: number; active: boolean; })
//      => (string | boolean)[],
//   listener:(                                    //CBメソッド
//     selectedState: (string | boolean)[],        //変更後
//     previousSelectedState: (string | boolean)[] //変更前
//   ) => void,
//   options?: { ... } | undefined   //比較関数等{ equalityFn: shallow }
//) => () => void

// ■ 更新時イベント(全体) (vanilla.mjs)
const unsubscribe1 = useSubscribeStore.subscribe(console.log)

// ■ 更新時イベント(個別) (middleware.mjs)
const unsubscribe2 = useSubscribeStore.subscribe(
  (state) => state.name, //CB
  console.log //Karen John
)

// ■ 更新時イベント(個別：shallow) (middleware.mjs)
const unsubscribe3 = useSubscribeStore.subscribe(
  (state) => [state.name, state.active],
  console.log, //新配列 旧配列
  { equalityFn: shallow }
)

// ■ 更新時イベント(引数付き個別出力) (UseZustandNonReactive.tsx)
const unsubscribe4 = useSubscribeStore.subscribe(
  (state) => state.name,
  (name, previousName) => console.log(name, previousName) //Karen John
)

// ■ 更新+イベント(個別)
useSubscribeStore.setState({ name: "Karen" })
// useSubscribeStore.setState({ age: 19 })

// ■ Unsubscribe listeners
unsubscribe1()
unsubscribe2()
unsubscribe3()
unsubscribe4()

// ■ Destroying the store (removing all listeners)
// useSubscribeStore.destroy() 非推奨

export function UseZustandSubscribe(): UseReturnType {
  return {
    title: `Middleware: zustand subscribe`,
    subTitle:
      "通常のストア作成時に subscribeWithSelector で巻くことで、Store の変更を追跡できる、spyOn のような挙動",
    code,
    codeFold: false,
    options: [],
    codeKeyType: "JSTS",
  }
}

const code = `//subscribe(): 同レベル(コンポーネント)での更新にのみ反応
const useSubscribeStore = create(
  subscribeWithSelector(() => ({ name: "John", age: 19, active: true }))
)
 
// ■ subscribeメソッド
subscribe: <(string | boolean)[]>(
  selector: (state: { name: string; age: number; active: boolean; })
     => (string | boolean)[],
  listener:(                                    //CBメソッド
    selectedState: (string | boolean)[],        //変更後
    previousSelectedState: (string | boolean)[] //変更前
  ) => void,
  options?: { ... } | undefined   //比較関数等{ equalityFn: shallow }
) => () => void
 
// ■ 取得
const nameOutside = useSubscribeStore.getState().name
 
// ■ 更新時イベント(全体) (vanilla.mjs) Object 全体を出力
const unsubscribe1 = useSubscribeStore.subscribe(console.log)
 
// ■ 更新時イベント(個別) (middleware.mjs)
const unsubscribe2 = useSubscribeStore.subscribe(
  (state) => state.name,   //名前のみ
  console.log              //新旧: Karen John
)
 
// ■ 更新時イベント(個別: shallow) (middleware.mjs)
const unsubscribe3 = useSubscribeStore.subscribe(
  (state) => [state.name, state.active],
  console.log,            //新旧: 配列
  { equalityFn: shallow } //配列出力なので再描画を抑制
)
 
// ■ 更新時イベント(引数付き個別出力) (UseZustandNonReactive.tsx)
const unsubscribe4 = useSubscribeStore.subscribe(
  (state) => state.name,  //新旧: 名前のみ
  (name, previousName) => console.log(name, previousName) //Karen John
)
 
// ■ 更新+イベント => subscribe はこの更新に反応する
useSubscribeStore.setState({ name: "Karen" })
 
// ■ Unsubscribe listeners(メモリリークを防止)
unsubscribe1()
unsubscribe2()
unsubscribe3()
unsubscribe4()
`
