import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'

export const Footer = () => (
  <Box w="100%" px={12} py={6} maxW="720px" mx="auto" id="further">
    <Flex>
      <Text mb={6}>The assemblage is open for connection. If compelled, reach out.</Text>
      <Link isExternal href="mailto:theopenmachine@protonmail.com">theopenmachine@protonmail.com</Link>
    </Flex>
  </Box>
)
