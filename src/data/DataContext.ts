import { createContext } from 'react'
import { DataProvider } from './DataProvider'

export const DataContext = createContext<DataProvider>({
  createOne: () => Promise.resolve({} as any),
  updateOne: () => Promise.resolve({} as any),
  readOne: () => Promise.resolve(null),
  deleteOne: () => Promise.resolve(),
})
