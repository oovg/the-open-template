import React from 'react'
import {
  Flex,
  Link,
  Text,
  Box,
} from '@chakra-ui/react'

export const DonateBlock = () => {
  return (
    <Flex
      id="donate"
      direction="column"
      alignItems="start"
      justifyContent="start"
      w="100%"
      p={[5, null, 10]}
      bg="primary"
      color="bg"
    >
      <Box maxW="900px">
        <Text fontSize={['md', null, 'lg']} mb={6}>
          The Open Machine is a non-profit research studio, fiscally sponsored by{' '}
          <Link
            href="https://metagov.org"
            isExternal
            textDecoration="underline"
            textUnderlineOffset="3px"
          >
            Metagov
          </Link>
          . We are sustained by generous donations that help us keep our cultural engine running.
        </Text>
        <Link
          href="/donate"
          display="inline-block"
          border="1px solid"
          borderColor="bg"
          color="bg"
          px={6}
          py={3}
          textTransform="uppercase"
          letterSpacing="0.15em"
          fontSize="sm"
          fontFamily="heading"
          textDecoration="none"
          _hover={{
            textDecoration: 'none',
            bg: 'bg',
            color: 'primary',
          }}
          transition="background 0.2s ease, color 0.2s ease"
        >
          Donate Now →
        </Link>
      </Box>
    </Flex>
  )
}
