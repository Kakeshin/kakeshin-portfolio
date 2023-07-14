import { stubMap, readOneStub } from '../resources'

export const referenceIdToValue = (params: any = {}, field: string) => {
  let values = {}
  const resourceKeys: { [k: string]: string } = Object.keys(stubMap).reduce((pre, cur) => {
    const key = cur.slice(0, -1) + 'Id'
    return {
      ...pre,
      [key]: cur,
    }
  }, {})
  Object.keys(params).forEach((key: string) => {
    const reference = resourceKeys[key]
    if (reference) {
      const referenceId = params[key]
      const data = readOne(reference, { id: referenceId })
      const fieldName = reference.slice(0, -1) + field[0]?.toUpperCase() + field.slice(1)
      values = { ...values, [fieldName]: data[field] }
    }
  })
  return values
}

const readOne = (resource: any, filter: any) => {
  return readOneStub(resource, filter)
}
