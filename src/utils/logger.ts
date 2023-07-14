type Logger = {
  d: (tag: string, values: string | number | object) => void
}

export const logger: Logger = (() => {
  return {
    d: (tag, values) => {
      console.debug(tag, values)
    },
  }
})()
