import React from 'react'
import { Box, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Section = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <Box w="100%">
      <Box maxW="720px" mx="auto" px={12} py={12}>
        <Box>
          <Text textStyle="paragraph">
            <b>The Open Machine</b> is an online media publication for cultural
            & conceptual compliments to the Ethereum network. Our work takes the
            form of <b>alter-academic research, immersive narrative, speculative design, </b>
             and other inputs from the ensemble underground which we take to be both 
            the origin of the network and its fated destination. 
          </Text>
          <Text textStyle="paragraph">
            We take in feeds from <b>transhistorical</b> sources, from diverse disciplines, from the 
            <b> more-than-human</b> world and the <b>cutting edge of organization</b> in order 
            to construct images of free association and network improvisation adequate
            to a <b>post-coercion society</b>.
          </Text>
          <Text textStyle="h4">
          We are actively looking for support and contributions. Contact us for submissions and patronage at theopenmachine@protonmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
