import { Box, Flex, Heading, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Further, Section, Matter, Matter2, Secret, Tags, Matter3, PageMetadata } from '@/components'
import { Transmissions } from '@/components/Transmissions'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <>
      <PageMetadata title="The Open Machine" description="the open machine is ..." />
      <main>
        <Flex
          direction="row"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
        >
          <Flex direction="column" alignItems="center" justifyContent="center" w={[ '100%', null, null, '50%']} minH="100vh" bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
            <Flex className="border" direction="column" alignItems="center" justifyContent="center" borderColor="bg" p={20}>
            <Heading color="bg" fontWeight="100" lineHeight="0.9em" fontSize={["4xl", null, "6xl"]}>The<br />Open<br />Machine</Heading>
            </Flex>
            <Secret />
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, null, '50%']} color="primary"> 
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              mb={3}
            />
            <Heading mb={12}>Table of Contents</Heading>
            <Link href="#matters" color="primary" my={6} fontSize="2xl">The Matters</Link>
            <Link href="#transmissions" color="primary" my={6} fontSize="2xl">Open Transmissions</Link>
            <Link href="/surveys" color="primary" my={6} fontSize="2xl">Surveys of Futurepast</Link>
            <Link href="#further" color="primary" my={6} fontSize="2xl">Further Reading</Link>
            <Link href="/outside" color="primary" my={6} fontSize="2xl">Go Outside</Link>
          </Flex>
        </Flex>
      </main>
      <Section />
      <Tags />
      <Matter />
      <Matter2 />
      <Matter3 />
      <Transmissions />
      <Further />
    </>
  )
}
