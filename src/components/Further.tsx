import React from 'react'
import { Box, Code, Flex, Link, Text } from '@chakra-ui/react'
import { Rule } from '@/components'

export const Further = () => (
  <Box w="100%" px={12} py={6} maxW="720px" mx="auto" id="further">
    <Flex>
      <Text textStyle="h3" mb={6}>Further Reading</Text>
    </Flex>
    <Flex flexWrap="wrap" w="100%">
      <Flex direction="column" align="start" w={['100%', null, '50%']} gap={6}>
        <Link isExternal href="https://agorist.xyz/">Agorist</Link>
        <Link isExternal href="https://antikythera.org">Antikythera</Link>
        <Link isExternal href="https://www.blacksky.network/">Black Sky Nexus</Link>
        <Link isExternal href="https://theblockchainsocialist.com/">The Blockchain Socialist</Link>
        <Link isExternal href="https://blockscience.ghost.io/">Block.Science blog</Link>
        <Link isExternal href="https://shanghai-nyu.academia.edu/BognaMKonior">Bogna Konior Selected Writings</Link>
        <Link isExternal href="http://c4ss.org">C4SS</Link>
        <Link isExternal href="http://www.ccru.net/swarm3/3_amph.htm">CCRU.net</Link>
        <Link isExternal href="https://www.curvelabs.eu/anarchive">Curve Labs</Link>
      </Flex>
      <Flex direction="column" align="start" w={['100%', null, '50%']} mt={[6, null, 0]}gap={6}>
        <Link isExternal href="https://deleuze.cla.purdue.edu/seminars.html">The Deleuze Seminars</Link>
        <Link isExternal href="https://esoteric.codes/blog/100-rabbits">Esoteric.codes</Link>
        <Link isExternal href="https://johncage.org/library.cfm">Random book generator from John Cage’s Home Library</Link>
        <Link isExternal href="https://lab.cccb.org/en/?_gl=119e6ui7_ga_6PE54HGENN*MTY5MjkzMDE3Ny4xLjEuMTY5MjkzMDIyMC4xNy4wLjA.">CCCLab</Link>
        <Link isExternal href="https://www.plurality.net">Plurality</Link>
        <Link isExternal href="https://pluriverse.world">Pluriverse</Link>
        <Link isExternal href="https://www.semiotexte.com">Semiotext(e)</Link>
        <Link isExternal href="http://strangeattractor.co.uk">Strange Attractor Press</Link>
      </Flex>
    </Flex>
  </Box>
)