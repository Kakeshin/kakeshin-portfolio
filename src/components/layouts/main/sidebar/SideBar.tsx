import React, { FC } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { Box, Flex, Link, Title } from '@/components'
import * as Theme from '@/themes'

type Props = {
  onSideBarMenus: () => JSX.Element
}

export const SideBar: FC<Props> = ({ onSideBarMenus }) => {
  return (
    <Box
      h='100vh'
      minW={Theme.SideBar.width}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      display={{ base: 'none', md: 'block' }}
    >
      <Flex alignItem='center' mx='8' h='20' justifyContent='space-between'>
        <Link to='/'>
          <Title />
        </Link>
      </Flex>
      {onSideBarMenus()}
    </Box>
  )
}
