import React from 'react'
import { Flex, Link, Heading, } from '@chakra-ui/react'

export const Back = () => {
  return (
    <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" h="80px" p={5}>
    <Heading
          color="primary"
          fontWeight="100"
          lineHeight="0.9em"
          fontSize={['md', null, 'lg']}
          mb={5}
        >
          <Link href="/">← Back Home</Link>
      </Heading>
  </Flex>
)}