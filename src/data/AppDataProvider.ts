import { getConfig } from '@/config'
import { FakeDataProvider } from './fake'
import { RestApiDataProvider } from './rest/RestApiDataProvider'

export const AppDataProvider = getConfig().USE_FAKE ? FakeDataProvider : RestApiDataProvider
