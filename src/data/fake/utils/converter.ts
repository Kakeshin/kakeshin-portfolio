import { omit } from 'lodash'

export const createConverter = (resource: string, data: any) => {
  switch (resource) {
    case 'accounts':
      return omit(
        {
          ...data,
        },
        [],
      )
  }
  return data
}

export const readConverter = (resource: string, data: any, stub: any) => {
  switch (resource) {
    case 'accounts': {
      const role = localStorage.getItem('debug_role') ?? 'admin'
      switch (role) {
        case 'admin':
          return stub[0]
        case 'general':
          return stub[1]
      }
      throw new Error(`Invalid role: ${role}`)
    }
  }
  return data
}
