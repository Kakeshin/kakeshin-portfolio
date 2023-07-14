import React, { FC, useEffect } from 'react'
import { CustomRouter } from '@/routes'
import { ThemeProvider } from '@/themes'

export const App: FC = () => {
  return (
    <ThemeProvider>
      <CustomRouter />
    </ThemeProvider>
  )
}
