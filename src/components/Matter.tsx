import React from 'react'
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'


export const Matter = () => (
  <Box w="100%" p={12}>
    <Flex maxW="720px" mx="auto" my={12}><Text as="h2" textStyle="h2">Matters</Text></Flex>
    <Flex maxW="720px" mx="auto" border="1px solid" borderColor="primary" flexWrap="wrap">
        <Flex direction="column" w={['100%', null, '55%']} p={12}>
            <Text as="p" textStyle="h6" mb={6}>The Open Machine #1</Text>
            <Text as="h2" textStyle="h2">FRIENDS OF THE OUTSIDE</Text>
            <Text as="h3" textStyle="h3">Control, Substrates, & the Afterlife of DAOs</Text>
            <Text as="tag"mt={6}>A Network Incantation</Text>
            <Text as="tag">Written & Conceived by</Text>
            <Text textStyle="h3">Exeunt & Vengi</Text>
            <Flex gap={6} mt={12}><Button as={Link} href="https://zora.co/collect/oeth:0x2d17e1c913a616e30ff267afda30a69d9ad25343" target="_blank" rel="noopener noreferrer">Collect</Button></Flex>
        </Flex>
        <Box w={['100%', null, '45%']} p={12}>
            <Image src="/assets/FriendsOfTheOutside_thumb-cover.jpg" />
        </Box> 
    </Flex>
  </Box>
)