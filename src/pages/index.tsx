import { Box, Flex, Heading, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Further, Section, Matter, Matter2, Secret, Tags, Matter3, PageMetadata } from '@/components'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <>
      <PageMetadata />
      <main>
        <Flex
          direction="row"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
        >
          <Flex direction="column" alignItems="center" justifyContent="center" w={[ '100%', null, '50%']} minH="100vh" bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
            <Flex className="border" direction="column" alignItems="center" justifyContent="center" borderColor="bg" p={20}>
            <Heading color="bg" fontWeight="100" lineHeight="0.9em" fontSize={["4xl", null, "6xl"]}>The<br />Open<br />Machine</Heading>
            <Link href="#matters" color="bg" my={6} fontSize="2xl">Jump to the Matters</Link>
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              bg="bg"
              mt={3}
              _hover={{
                background: "bg",
              }}
            />
            </Flex>
            <Secret />
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, '50%']}> 
            <Text textStyle="tag">In our efforts to ontologically situate the distributed ledger, we discovered a minimal viable order - a just-enough ground from which we can sit back, light a joint, and witness the daybreak of indeterminacy.</Text>
            <Text textStyle="tag">A savage patience in the sirocco wind, a pact of mathematical stoicism.</Text>
            <Text textStyle="tag">We dowsed the soil for voids and Bouly radiations, and retired to our hammocks, expecting everything.</Text>
            <Text textStyle="tag">On the fourth night we heard a blowpipe, an energy combustion polyphonic with lichen and transistors,</Text>
            <Text textStyle="tag">the loud setan backs of sea mice and the kenotic drones of quasiparticles. Light in the darkling plain.</Text>
            <Text textStyle="tag">Authority had been deafed, and a new backdrop was hanging in cybernetic relief, peopled with divinities.</Text>
            <Text textStyle="tag">Tremor, point, and wave: Guess their thoughts.</Text>
          </Flex>
        </Flex>
      </main>
      <Section />
      <Tags />
      <Matter />
      <Matter2 />
      <Matter3 />
      <Further />
    </>
  )
}
