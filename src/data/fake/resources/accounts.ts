import { Resource } from '@/data'

export const accounts: Resource<'accounts'>[] = [
  {
    id: 1,
    name: 'テスト太郎',
    role: 'admin',
  },
  {
    id: 2,
    name: 'テスト次郎',
    role: 'general',
  },
]
