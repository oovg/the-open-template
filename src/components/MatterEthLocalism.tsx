import React from 'react'
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'

export const MatterEthLocalism = () => (
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
          The Open Machine #3
        </Text>
        <Text as="h2" textStyle="h2">
          Ethereum Localism
        </Text>
        <Text as="h3" textStyle="h3">
          Grounding the Future of Coordination
        </Text>
        <Text mt={6}>Collated by the Open Machine</Text>
        <Flex gap={6} mt={12}>
          <Button
            as={Link}
            href="https://app.manifold.xyz/c/ethereum-localism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collect & Read
          </Button>
          <Button
            as={Link}
            href="https://qxvqdga4v2uhlcgh7bvl5m6rukrhmesy6uzingqov76jw5miy3ka.arweave.net/hesBmByuqHWIx_hqvrPRoqJ2Elj1MoaaDq_8m3WIxtQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
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
        <Image src="/assets/EL_cover-front.jpg" alt="ethereum localism cover" />
      </Flex>
    </Flex>
  </Box>
)
