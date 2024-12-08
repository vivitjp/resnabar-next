## GitHub

https://github.com/jakearchibald/idb-keyval

## ■ set

```ts
import { set } from "idb-keyval"
set("hello", "world")
```

```ts
set("hello", "world")
  .then(() => console.log("It worked!"))
  .catch((err) => console.log("It failed!", err))
```

\[NG\]

```ts
import { set, setMany } from "idb-keyval"

Promise.all([set(123, 456), set("hello", "world")])
  .then(() => console.log("It worked!"))
  .catch((err) => console.log("It failed!", err))
```

\[Better Practice\]

```ts
import { set, setMany } from "idb-keyval"

setMany([
  [123, 456],
  ["hello", "world"],
])
  .then(() => console.log("It worked!"))
  .catch((err) => console.log("It failed!", err))
```

## ■ get

```ts
import { get } from "idb-keyval"

get("hello").then((val) => console.log(val))
```

\[NG\]

```ts
import { get } from "idb-keyval"

Promise.all([get(123), get("hello")]).then(([firstVal, secondVal]) =>
  console.log(firstVal, secondVal)
)
```

\[Better Practice\]

```ts
import { getMany } from "idb-keyval"

getMany([123, "hello"]).then(([firstVal, secondVal]) =>
  console.log(firstVal, secondVal)
)
```

■ udpate

\[NG\]

```ts
import { get, set } from "idb-keyval"

get("counter").then((val) => set("counter", (val || 0) + 1))
get("counter").then((val) => set("counter", (val || 0) + 1))
```

\[Better Practice\]

```ts
import { update } from "idb-keyval"

update("counter", (val) => (val || 0) + 1)
update("counter", (val) => (val || 0) + 1)
```

■ del

```ts
import { del } from "idb-keyval"

del("hello")
```

\[NG\]

```ts
import { del } from "idb-keyval"

Promise.all([del(123), del("hello")])
  .then(() => console.log("It worked!"))
  .catch((err) => console.log("It failed!", err))
```

\[Better Practice\]

```ts
import { delMany } from "idb-keyval"

delMany([123, "hello"])
  .then(() => console.log("It worked!"))
  .catch((err) => console.log("It failed!", err))
```

■ clear

```ts
import { clear } from "idb-keyval"

clear()
```

■ entries

```ts
import { entries } from "idb-keyval"

entries().then((entries) => console.log(entries))
```

■ keys

```ts
import { keys } from "idb-keyval"

keys().then((keys) => console.log(keys))
```

■ values

```ts
import { values } from "idb-keyval"

values().then((values) => console.log(values))
```
