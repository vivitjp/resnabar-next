it("", () => {
  expect([{ A: "a" }, { B: "b" }]).toContainEqual({ A: "a" })
  expect([{ A: "a" }, 1]).toContainEqual(1)
})
