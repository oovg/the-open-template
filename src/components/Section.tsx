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
            <b>The Open Machine</b>  is an extitutional think tank and media center. Our mission
             is to map and iterate upon the characteristics of extitutional space - the spontaneous
            orders, open protocols, and plural ontologies of the space outside of administrative institutions.
            Our work takes the form of <b>alter-academic research, immersive narrative, speculative design, </b>
             and other inputs from the ensemble underground. We take in feeds from <b>transhistorical</b> sources,
            from diverse disciplines, from the <b> more-than-human</b> world and the <b>cutting edge of 
            organization</b> in order to construct images of free association and network improvisation adequate
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
