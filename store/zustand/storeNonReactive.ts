// Reactiveではない Store = ref.currentのような

//定義
//subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe

import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

export const useNonReactiveStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
)

// ■ 取得：Getting non-reactive fresh state
// const paw = useStore.getState().paw

// ■ 更新時イベント(全体)：Listening to all changes, fires on every change
// const unsub1 = useStore.subscribe(console.log)

// ■ 更新時イベント(個別)：Listening to selected changes, in this case when "paw" changes
// const unsub2 = useStore.subscribe((state) => state.paw, console.log)

// ■ 更新時イベント(個別：shallow)：Subscribe also supports an optional equality function
// const unsub3 = useStore.subscribe(
//   (state) => [state.paw, state.fur],
//   console.log,
//   { equalityFn: shallow }
// )

// ■ 更新時イベント(個別：更新前後値)：Subscribe also exposes the previous value
// const unsub4 = useStore.subscribe(
//   (state) => state.paw,
//   (paw, previousPaw) => console.log(paw, previousPaw)
// )

// ■ 更新+イベント(個別)：Updating state, will trigger listeners
// useStore.setState({ paw: false })
// useStore.setState({ snout: false })

// ■ Unsubscribe listeners
// unsub1()
// unsub2()
// unsub3()
// unsub4()

// ■ Destroying the store (removing all listeners)
// useStore.destroy()

// ■ You can of course use the hook as you always would
// function Component() {
//   const paw = useStore((state) => state.paw)
//   ...
// }
