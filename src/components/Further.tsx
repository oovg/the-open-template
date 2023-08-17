import React from 'react'
import { Box, Code, Flex, Link, Text } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Further = () => (
  <Box w="100%" px={12} py={6} maxW="720px" mx="auto">
    <Flex>
      <Text>Further Reading</Text>
    </Flex>
    <Flex alignItems="start">
        <Box w={['100%', null, '50%']}>
          <Rule />
          <Code>further-reading/
├─ Ontological Stakes of Moloch
├─ Friends of the Outside
contributors/
├─ exeunt
├─ vengi
├─ journals/
│  ├─ Black Sky Network
│  ├─ Blockchain Socialist
</Code>
        </Box>
        <Box w={['100%', null, '50%']}>
          <Rule />
          
        </Box> 
    </Flex>
  </Box>
)