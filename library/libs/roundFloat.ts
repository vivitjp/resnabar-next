export const roundFloat = (num: number, digit = 2) => {
  return Math.round(num * (100 * digit)) / (100 * digit)
}
