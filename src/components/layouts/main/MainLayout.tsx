import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useColorModeValue } from '@chakra-ui/react'
import { Box, Flex, Header, SideBar, Text } from '@/components'
import * as Theme from '@/themes'

type Props = {
  onSideBarMenus: () => JSX.Element
}

export const MainLayout: FC<Props> = ({ onSideBarMenus }) => {
  return (
    <Flex w='100%' h='100vh'>
      <SideBar onSideBarMenus={onSideBarMenus} />
      <Box w='100%'>
        <Header />
        <Box
          w='100%'
          h={`calc(100vh - ${Theme.Header.height})`}
          bg={useColorModeValue('white', 'gray.900')}
          overflow='auto'
        >
          <Outlet />
        </Box>
      </Box>
    </Flex>
  )
}
