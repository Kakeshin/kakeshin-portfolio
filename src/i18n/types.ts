import { TOptions } from 'i18next'
import { ResourceName, ResourceField } from '@/data/DataProvider'

type ResourceMessage<T extends ResourceName> = {
  name: string
  fields:
    | {
        [K in ResourceField<T>]: string
      }
}

export type I18nDictionary = {
  error: {
    notFoundCode: string
    notFound: string
  }
  layouts: {
    rightMenu: {
      profile: string
    }
  }
  resources: {
    accounts: ResourceMessage<'accounts'>
  }
}

type RecursiveRecord = {
  [key in string]: string | RecursiveRecord
}
type PickKeys<T extends RecursiveRecord, K = keyof T> = K extends string
  ? T[K] extends string
    ? K
    : `${K}.${PickKeys<Extract<T[K], RecursiveRecord>>}`
  : never
type I18nKeys = PickKeys<I18nDictionary>

export type Options = TOptions
export type I18n = I18nKeys
