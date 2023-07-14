import { ResourceMap } from './resources'

export type Identifier = number | string | undefined
export type ResourceName = keyof ResourceMap
export type Resource<T extends ResourceName> = ResourceMap[T]
export type Record = {
  id: number | string
}
export type ResourceField<T extends ResourceName> = keyof ResourceMap[T]
export type ManyOptions<T extends ResourceName> = {}

export type DataProvider = {
  createOne: <T extends ResourceName>(
    resource: T,
    params: Partial<Resource<T>>,
  ) => Promise<Resource<T>>
  updateOne: <T extends ResourceName>(
    resource: T,
    params: Partial<Resource<T>>,
  ) => Promise<Resource<T>>
  readOne: <T extends ResourceName>(resource: T, id: Identifier) => Promise<Resource<T> | null>
  deleteOne: <T extends ResourceName>(resource: T, id: Identifier) => Promise<void>
}
