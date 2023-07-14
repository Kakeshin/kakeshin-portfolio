import axios from 'axios'

type Id = number | string
type Query = {
  [k: string]: any
}

export type Options = {
  baseUrl: string
  headers?: { [k: string]: string }
  id?: number | string
  query?: Query
}

export const createEmbed = (id?: Id, query?: Query): string => {
  if (id) {
    return `/${id}`
  }
  if (query) {
    const queryString = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    return queryString !== '' ? `?${encodeURI(queryString)}` : ''
  }
  return ''
}

export const apiClient = {
  get: async <T>(path: string, { baseUrl, headers, id, query }: Options): Promise<T> => {
    const embed = createEmbed(id, query)
    const { data } = await axios.get(`${baseUrl}/${path}${embed}`, {
      headers: {
        ...headers,
      },
    })
    return data as T
  },
  post: async <T>(
    path: string,
    body: any,
    { baseUrl, headers, id, query }: Options,
  ): Promise<T> => {
    const {
      data: { data },
    } = await axios.post(`${baseUrl}/${path}`, body, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
    return data as T
  },
  put: async <T>(path: string, body: any, { baseUrl, headers }: Options): Promise<T> => {
    const {
      data: { data },
    } = await axios.put(`${baseUrl}/${path}`, body, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
    return data as T
  },
  delete: async <T>(path: string, { baseUrl, headers, id, query }: Options): Promise<T> => {
    const embed = createEmbed(id, query)
    const { data } = await axios.delete(`${baseUrl}/${path}${embed}`, {
      headers: {
        ...headers,
      },
    })
    return data as T
  },
}
