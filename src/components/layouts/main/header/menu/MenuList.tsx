import React, { FC, Fragment } from 'react'
import {
  MenuList as ChakraMenuList,
  MenuDivider,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react'

export type MenuItem = {
  title: string | JSX.Element
  onClick: () => void
}

type Props = {
  items: MenuItem[]
}

export const MenuList: FC<Props> = ({ items }) => {
  return (
    <ChakraMenuList
      zIndex={100}
      bg={useColorModeValue('white', 'gray.900')}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      {items.map(({ title, onClick }, i) => {
        const showDivider = i < items.length - 1
        return (
          <Fragment key={`${i}_${title}`}>
            <MenuItem onClick={onClick}>{title}</MenuItem>
            {showDivider && <MenuDivider />}
          </Fragment>
        )
      })}
    </ChakraMenuList>
  )
}
