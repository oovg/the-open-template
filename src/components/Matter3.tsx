import React from 'react'
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'


export const Matter3 = () => (
  <Box w="100%" p={12}>
    <Flex maxW="720px" mx="auto" border="1px solid" borderColor="primary" flexWrap="wrap">
        <Flex direction="column" w={['100%', null, '55%']} p={12}>
            <Text textStyle="h6" mb={6}>Open Machine #3</Text>
            <Text as="h2" textStyle="h2">Lover&apos;s Dilemma Part I</Text>
            <Text as="h3" textStyle="h3">Or an Essay on Cooperation Theory in Love Songs and an Iterated Game of Lovers as Great Filter</Text>
            <Text textStyle="tag">Written by</Text>
            <Text textStyle="h3">Vengi</Text>
            <Flex gap={6} mt={12}><Button as={Link} href="" target="_blank" rel="noopener noreferrer">Coming Soon</Button></Flex>
        </Flex>
        <Box w={['100%', null, '45%']} p={12}>
        </Box> 
    </Flex>
  </Box>
)