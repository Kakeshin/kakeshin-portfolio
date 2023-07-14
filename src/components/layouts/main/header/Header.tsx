import React, { FC, useMemo } from 'react'
import { Flex, FlexProps, HStack, Menu, MenuButton, useColorModeValue } from '@chakra-ui/react'
import { TranslateText } from '@/components'
import * as Theme from '@/themes'
import { Account, MenuItem, MenuList } from './menu'

type Props = {} & FlexProps

const handleProfile = () => {}

export const Header: FC<Props> = ({ ...rest }: Props) => {
  const menuItems = useMemo(() => {
    const ret: MenuItem[] = [
      { title: <TranslateText source='layouts.rightMenu.profile' />, onClick: handleProfile },
    ]

    return ret
  }, [])
  return (
    <Flex
      px='4'
      h={Theme.Header.height}
      w='100%'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      {...rest}
    >
      <HStack align='center'>
        <Menu>
          <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
            <Account />
          </MenuButton>
          <MenuList items={menuItems} />
        </Menu>
      </HStack>
    </Flex>
  )
}
