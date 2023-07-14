export const findNewId = (data: { id: number }[]): number => {
  let newId = 1
  const sorted = data.sort((lhs, rhs) => (lhs.id > rhs.id ? 1 : -1))
  sorted.forEach(({ id }) => {
    if (id === newId) {
      newId += 1
    }
  })
  return newId
}
