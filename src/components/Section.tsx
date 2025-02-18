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
            <b>The Open Machine</b> is an online media publication for the
            generation of experimental cultural & conceptual compliments to the
            Ethereum network. Our work draws upon diverse inputs - from the
            historical archive, from remote disciplines, from myths and memes of
            the past and the future - in order to construct images of free
            association and network improvisation adequate to a post-coercion
            society.
          </Text>
          <Text textStyle="h4">
            <Link href="mailto:theopenmachine@protonmail.com" textStyle="link">
              <i>
                <b>Reach out</b>
              </i>
            </Link>{' '}
            for Research, Writing, and Publishing support.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
