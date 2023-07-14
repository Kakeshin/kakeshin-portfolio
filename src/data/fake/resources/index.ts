import { ResourceName, Identifier, Record } from '@/data'
import { accounts } from './accounts'
import { createConverter, findNewId, readConverter, referenceIdToValue } from '../utils'

export const stubMap: { [key in ResourceName]: Record[] } = {
  accounts,
}

export const createOneStub = <T extends ResourceName>(resource: T, params: any = {}) => {
  const data = stubMap[resource] as any[]
  const reference = referenceIdToValue(params, 'name')
  const newData = createConverter(resource, {
    id: findNewId(data),
    ...params,
    ...reference,
  })
  stubMap[resource].push(newData)
  return newData
}

export const readOneStub = <T extends ResourceName>(resource: T, filter: any = {}) => {
  const { data: items } = readManyStub(resource, filter)
  const [firstItem] = items
  const data = readConverter(resource, firstItem, stubMap[resource])
  return data ? data : null
}

export const readManyStub = <T extends ResourceName>(resource: T, rawFilter: any = {}) => {
  const { q, ...filter } = rawFilter
  const data = stubMap[resource] as any[]
  let newData: any[] = data

  if (q && q !== '') {
    newData = data.filter(
      (it) => Object.values(it).filter((v) => `${v}`.indexOf(q) >= 0).length > 0,
    )
  }

  Object.keys(filter).forEach((key: string) => {
    newData = newData.filter((it) => {
      if (key === 'id') {
        return `${it[key]}` === `${filter[key]}`
      }
      return it[key] === filter[key]
    })
  })

  return { data: newData }
}

export const updateOneStub = <T extends ResourceName>(resource: T, params: any = {}) => {
  const { id } = params
  if (!id) throw Error(`Undefined: 'id' field.`)

  const target = readOneStub(resource, { id })
  if (!target) throw Error(`Not found data: ${id}`)

  const reference = referenceIdToValue(params, 'name')
  const newData = {
    ...params,
    ...reference,
  }

  stubMap[resource].forEach((e, i) => {
    const lhs = e.id
    const rhs = id
    if (`${lhs}` === `${rhs}`) {
      stubMap[resource][i] = newData
    }
  })
  return newData
}

export const deleteOneStub = <T extends ResourceName>(resource: T, id: Identifier) => {
  stubMap[resource].forEach((e, i) => {
    const lhs = e.id
    const rhs = id
    if (`${lhs}` === `${rhs}`) {
      stubMap[resource].splice(i, 1)
    }
  })
}
export const deleteManyStub = <T extends ResourceName>(resource: T, ids: Identifier[]) => {
  ids.forEach((id) => {
    deleteOneStub(resource, id)
  })
}
