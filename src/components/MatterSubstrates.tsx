import React from 'react'
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'

export const MatterSubstrates = () => (
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
          The Open Machine #1
        </Text>
        <Text as="h2" textStyle="h2">
          FRIENDS OF THE OUTSIDE
        </Text>
        <Text as="h3" textStyle="h3">
          Control, Substrates, & the Afterlife of DAOs
        </Text>
        <Text mt={6}>A Network Incantation</Text>
        <Text>Written & Conceived by</Text>
        <Text textStyle="h4">Exeunt & Vengi</Text>
        <Flex gap={6} mt={12}>
          <Button
            as={Link}
            href="https://zora.co/collect/oeth:0x2d17e1c913a616e30ff267afda30a69d9ad25343"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read & Collect
          </Button>
          <Button
            as={Link}
            href="https://theopenmachine.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redeem
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
        <Image src="/assets/FotO_physical-outside.jpg" alt="friends cover" />
      </Flex>
    </Flex>
  </Box>
)
