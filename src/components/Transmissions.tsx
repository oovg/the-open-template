import React from 'react'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'

export const Transmissions = () => (
  <Box w="100%" p={12} id="transmissions">
    <Heading mb={12}>Open Transmissions</Heading>
    <Flex direction="column">
    <Box as={Link} w="100%" href="" p={12} border="1px" borderColor="primary">
      <Text>Ontological Stakes of Moloch</Text>
    </Box>
    </Flex>
  </Box>
)