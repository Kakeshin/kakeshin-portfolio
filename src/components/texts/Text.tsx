import React, { FC } from 'react'
import { Text as ChakraText, ResponsiveValue } from '@chakra-ui/react'

type Props = {
  title: string
  fontSize?: ResponsiveValue<number | string>
  fontFamily?: string
  fontWeight?: ResponsiveValue<number | string>
  color?: string
}

export const Text: FC<Props> = ({
  title,
  fontSize = 'sm',
  fontFamily = 'mono',
  fontWeight = 'sm',
  color = 'black',
}) => {
  return (
    <ChakraText fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight} color={color}>
      {title}
    </ChakraText>
  )
}
