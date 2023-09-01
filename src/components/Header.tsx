import React from 'react'
import { IconButton, Flex, Link, Heading, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
  <Flex
    direction="column"
    textAlign="center"
    borderRadius="xl"
    background="bg"
    color="primary"
    flexWrap="wrap"
    w="100%"
    mb={12}
  >
    <Flex direction="column" alignItems="center" justify="space-around" w={'100%'} minH="25vh" p={25} bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
      <IconButton
        w="fit-content"
        mx="auto"
        icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        bg="bg"
        mb={3}
        _hover={{
          background: "bg",
        }}
      />
      <Heading fontSize="3xl" color="bg" m={0}>The Open Machine</Heading>
      <Link href="/" color="bg" my={3} fontSize="xl">Back Home</Link>
    </Flex>    
  </Flex>
)}