export const getConfig = () => ({
  USE_FAKE: import.meta.env.VITE_USE_FAKE === 'true',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? '',
})
