import React from 'react'
import { Box, Image, Text, useColorMode } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Section = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
  <Box w="100%">
    <Box maxW="720px" mx="auto" px={12} py={12}>
      <Rule />
      <Box>
        <Text textStyle="paragraph">
          <b>The Open Machine</b> is an online media publication for the generation
          of experimental cultural & conceptual compliments to the decentralized web. 
          Our work draws upon diverse inputs - from the historical archive, from remote disciplines, 
          from myths and memes of the past and the future - in order to construct images of 
          free association and network improvisation adequate to a post-coercion society.
        </Text>
      </Box>
      <Rule />
    </Box>
  </Box>
  )
}
