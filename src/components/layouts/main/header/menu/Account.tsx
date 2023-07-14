import React, { FC, useEffect, useState } from 'react'
import { Resource } from '@/data'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

export const Account: FC = () => {
  const [data, setData] = useState<Resource<'accounts'>>()

  useEffect(() => {
    const data = { id: 1, name: 'Test', role: 'login' }
    setData(data)
  }, [])

  return (
    <HStack>
      <Avatar size='sm' src={'hoge'} />
      <VStack ml='2' display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px'>
        <Text fontSize='sm'>{data?.name ?? ''}</Text>
        <Text fontSize='xs' color='gray.600'>
          {data && data.role}
        </Text>
      </VStack>
      <Box display={{ base: 'none', md: 'flex' }}>
        <FiChevronDown />
      </Box>
    </HStack>
  )
}
