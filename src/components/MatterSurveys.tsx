import React from 'react'
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'

export const MatterSurveys = () => (
  <Box w="100%" p={12}>
    <Flex
      maxW="720px"
      mx="auto"
      border="1px solid"
      borderColor="primary"
      flexWrap="wrap"
    >
      <Flex direction="column" w={['100%', null, '100%']} p={12}>
        <Text textStyle="h6" mb={6}>
          Speculative Fiction
        </Text>
        <Text as="h2" textStyle="h2">
          SURVEYS, 2068
        </Text>
        <Text as="h3" textStyle="h3">
          Found glossary of terms from the non-present.
        </Text>
        <Text mt={6}>Conceived by</Text>
        <Text>Exeunt</Text>
        <Flex gap={6} mt={12}>
          <Button
            as={Link}
            href="/surveys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compiling Here -&gt;
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Box>
)
