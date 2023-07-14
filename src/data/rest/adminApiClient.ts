import { apiClient, Options } from '@/utils'
import { Resource, ResourceName, Identifier } from '@/data'

type Body<T extends ResourceName> = Partial<Resource<T>>

export const adminApiClient = (() => {
  return {
    get: async <T extends ResourceName>(resource: T, options: Options): Promise<any> => {
      const { data } = await apiClient.get<{ data: Resource<T> }>(`${String(resource)}`, options)
      return data
    },
    post: async <T extends ResourceName>(
      resource: T,
      body: Body<T>,
      options: Options,
    ): Promise<any> => {
      return await apiClient.post<Partial<Resource<T>>>(`${String(resource)}`, body, options)
    },
    put: async <T extends ResourceName>(
      resource: T,
      body: Body<T>,
      options: Options,
    ): Promise<any> => {
      return await apiClient.put<Partial<Resource<T>>>(`${String(resource)}`, body, options)
    },
    delete: async <T extends ResourceName>(resource: T, options: Options): Promise<any> => {
      return await apiClient.delete<Partial<Resource<T>>>(`${String(resource)}`, options)
    },
  }
})()
