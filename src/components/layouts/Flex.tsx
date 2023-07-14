import React, { FC, PropsWithChildren } from 'react'
import { Flex as ChakraFlex, ResponsiveValue } from '@chakra-ui/react'

type Props = {
  align?: string
  alignItem?: string
  p?: ResponsiveValue<number | string>
  mx?: ResponsiveValue<number | string>
  w?: ResponsiveValue<number | string>
  h?: ResponsiveValue<number | string>
  borderRadius?: ResponsiveValue<number | string>
  role?: string
  cursor?: string
  hover?: { bg: string; color: string }
  highlightStyles?: { bg: string; color: string } | { bg?: undefined; color?: undefined }
  justifyContent?: string
} & PropsWithChildren

export const Flex: FC<Props> = ({
  align = 'center',
  alignItem = 'center',
  p,
  mx,
  w = '100%',
  h = '100%',
  borderRadius,
  role,
  cursor,
  hover,
  highlightStyles,
  justifyContent,
  children,
  ...rest
}) => {
  return (
    <ChakraFlex
      align={align}
      alignItems={alignItem}
      p={p}
      mx={mx}
      w={w}
      h={h}
      borderRadius={borderRadius}
      role={role}
      cursor={cursor}
      _hover={hover}
      justifyContent={justifyContent}
      {...highlightStyles}
      {...rest}
    >
      {children}
    </ChakraFlex>
  )
}
