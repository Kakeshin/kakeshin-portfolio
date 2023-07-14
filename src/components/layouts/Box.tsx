import React, { FC, PropsWithChildren } from 'react'
import { Box as ChakraBox, ResponsiveValue, border, useColorModeValue } from '@chakra-ui/react'

type Props = {
  w?: ResponsiveValue<number | string>
  h?: ResponsiveValue<number | string>
  minW?: ResponsiveValue<number | string>
  bg?: string
  borderRight?: ResponsiveValue<number | string>
  borderRightColor?: string
  display?: { base: string; md: string }
  overflow?: string
} & PropsWithChildren

export const Box: FC<Props> = ({
  w = '100%',
  h = '100%',
  minW = '100%',
  bg,
  borderRight,
  borderRightColor,
  display,
  overflow,
  children,
  ...rest
}) => {
  return (
    <ChakraBox
      h={h}
      minW={minW}
      bg={bg}
      borderRight={borderRight}
      borderRightColor={borderRightColor}
      display={display}
      {...rest}
    >
      {children}
    </ChakraBox>
  )
}
