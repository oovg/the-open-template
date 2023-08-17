import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

export const Secret = () => (
  <Box>
    <Link href="/outside">
      <Box position="relative" w="42px" h="42px" mt={6} border="1px" borderStyle="dashed" borderRadius="full" borderColor="bg">
        <Text position="absolute" ml={1} mt={3} color="bg">+</Text>
      </Box>
    </Link>
  </Box>
)