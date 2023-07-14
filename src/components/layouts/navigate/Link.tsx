import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

type LinkProps = React.ComponentProps<typeof ChakraLink> & React.ComponentProps<typeof RouterLink>

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} {...props}>
      {children}
    </ChakraLink>
  )
}
