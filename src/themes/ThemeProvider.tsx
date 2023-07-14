import React, { FC, PropsWithChildren } from 'react'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from './chakraTheme'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
)
