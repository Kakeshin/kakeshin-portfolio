import React from 'react'
import { IconType } from 'react-icons'
import { ResourceName } from '@/data/DataProvider'
import { FlexProps } from '@chakra-ui/react'
import { Flex, Icon, Link, Text } from '@/components'
import { useLocation } from 'react-router-dom'
import { useTranslate } from '@/hooks/useTranslate'

type Props<T extends ResourceName> = {
  resource: T
  icon: IconType
} & FlexProps

export const SideBarMenu = <T extends ResourceName>({ resource, icon, ...rest }: Props<T>) => {
  const { translateAny } = useTranslate()
  const strResource = String(resource)
  const { pathname } = useLocation()
  const highlightStyles =
    pathname.indexOf(`/${strResource}`) === 0 ? { bg: 'cyan.500', color: 'white' } : {}
  const hover = { bg: 'cyan.200', color: 'white' }

  return (
    <Link to={`/${strResource}`} _focus={{ boxShadow: 'none' }}>
      <Flex
        p='4'
        mx='4'
        borderRadius='lg'
        highlightStyles={highlightStyles}
        role='group'
        cursor='pointer'
        hover={hover}
      >
        {icon && <Icon mr='4' fontSize='16' color='white' as={icon} />}
        <Text title={translateAny(`resources.${strResource}.name`)} />
      </Flex>
    </Link>
  )
}
