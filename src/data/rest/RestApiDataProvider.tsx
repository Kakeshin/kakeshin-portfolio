import React, { FC, PropsWithChildren, useMemo, isValidElement, cloneElement } from 'react'
import { DataContext, DataProvider, ManyOptions, ResourceName } from '@/data'
import { adminApiClient } from './adminApiClient'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const RestApiDataProvider: FC<PropsWithChildren> = ({ children, ...rest }) => {
  const provider: DataProvider = useMemo(
    () => ({
      createOne: async (resource, params) => {
        return adminApiClient.post(resource, params, {
          baseUrl,
        })
      },
      updateOne: async (resource, params) => {
        return adminApiClient.post(resource, params, { baseUrl })
      },
      readOne: async (resource, id) => {
        return adminApiClient.get(resource, { baseUrl, id })
      },
      deleteOne: async (resource, id) => {
        return adminApiClient.delete(resource, { baseUrl, id })
      },
    }),
    [],
  )
  const props = {}
  return (
    <DataContext.Provider value={provider}>
      {children && isValidElement(children) && cloneElement(children, { ...props, ...rest })}
    </DataContext.Provider>
  )
}
