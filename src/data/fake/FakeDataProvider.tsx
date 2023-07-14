import React, { FC, PropsWithChildren, isValidElement, cloneElement } from 'react'
import { DataContext, DataProvider } from '@/data'
import { createOneStub, deleteOneStub, readOneStub, updateOneStub } from './resources'

const fakeProvider: DataProvider = {
  createOne: async (resource, params) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)) // delay
    const data = createOneStub(resource, params)
    console.debug('[createOne]: ', { resource, params, data })
    return data
  },
  readOne: async (resource, id) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)) // delay
    const data = readOneStub(resource, { id })
    console.debug('[readOne]: ', { resource, id, data })
    return data
  },
  updateOne: async (resource, params) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)) // delay
    const data = updateOneStub(resource, params)
    console.debug('[updateOne]: ', { resource, params, data })
    return data
  },
  deleteOne: async (resource, ids) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)) // delay
    deleteOneStub(resource, ids)
    console.debug('[deleteOne]: ', { resource, ids })
  },
}

export const FakeDataProvider: FC<PropsWithChildren> = ({ children, ...rest }) => {
  const props = {}
  return (
    <DataContext.Provider value={fakeProvider}>
      {children && isValidElement(children) && cloneElement(children, { ...props, ...rest })}
    </DataContext.Provider>
  )
}
