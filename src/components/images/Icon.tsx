import React, { FC } from 'react'
import { Icon as ChakraIcon, ResponsiveValue } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
  as: IconType
  mr?: ResponsiveValue<number | string>
  fontSize?: ResponsiveValue<number | string>
  color?: string
}

export const Icon: FC<Props> = ({ as, mr = 0, fontSize = '10%', color, ...rest }) => {
  return (
    <ChakraIcon
      mr={mr}
      fontSize={fontSize}
      _hover={{
        color: color,
      }}
      as={as}
    />
  )
}
