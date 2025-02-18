import React from 'react'
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'

export const MatterInvertedCity = () => (
  <Box w="100%" p={3} id="matters">
    <Flex
      maxW="800px"
      mx="auto"
      border="1px solid"
      borderColor="primary"
      flexWrap="wrap"
    >
      <Flex direction="column" w={['100%', null, '55%']} p={[6, null, 12]}>
        <Text textStyle="h6" mb={6}>
          The Open Machine #2
        </Text>
        <Text as="h2" textStyle="h2">
          The Inverted City
        </Text>
        <Text as="h3" textStyle="h3">
          Perspectives
        </Text>
        <Text mt={6}>Collated by the Open Machine</Text>
        <Flex gap={6} mt={12}>
          <Button
            as={Link}
            href="https://app.manifold.xyz/c/invertedcity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read & Collect
          </Button>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={['100%', null, '45%']}
        p={12}
      >
        <Image src="/assets/invertedCity_cover.jpg" alt="friends cover" />
      </Flex>
    </Flex>
  </Box>
)
