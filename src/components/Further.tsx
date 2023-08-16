import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Further = () => (
  <Box w="100%" px={12} py={6} maxW="720px" mx="auto">
    <Flex>
      <Text>Further Reading</Text>
    </Flex>
    <Flex alignItems="start">
        <Box w={['100%', null, '50%']}>
          <Rule />
          <Link href="/">Link</Link>
        </Box>
        <Box w={['100%', null, '50%']}>
          <Rule />
          <Link href="/">Link</Link>
        </Box> 
    </Flex>
  </Box>
)