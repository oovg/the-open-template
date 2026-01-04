import React from 'react'
import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Box,
} from '@chakra-ui/react'
import {
  PageMetadata,
  Footer,
  Tooltip
} from '@/components'
import { Header } from '@/components/Header'

export default function Home() {

  return (
    <Flex direction="column" alignItems="start" justifyContent="space-between" w="100vw">
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />
        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" h="100%" flexWrap="wrap">
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={["100%", null, "50%"]}>
            <Image src="/assets/om_substrates-album-new.png" h="100%" w="100%" alt="The Open Machine" />
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" position="relative" w={["100%", null, "50%"]} h="100%" display={['none', null, 'flex']}>
            <Image src="/assets/albumBack.png" h="100%" w="100%" alt="The Open Machine" />
          </Flex>
        </Flex>

        <Flex id="what-we-do" direction="column" alignItems="start" justifyContent="space-between" maxW="600px" mx="auto" position="relative" p={10} display={['flex', null, 'none']}>
          <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>What we do</Heading>
          <Text fontSize={['lg', null, '2xl']}>The Open Machine is a cultural outpost for scaling underground values alongside, within and through emerging technologies. We produce media & events and stage research on the actualization of extitutional social forms in the twenty first century.</Text>
          <Text mt={5}>Institutions (in their dominant form as centralized, administrative bureaucracies) are known to concentrate power, homogenize culture, enshittify technology, obscure empirical conditions in favor of party lines and, worst of all, generate cultures of complacency where direct empirical engagement with reality is sidelined for the opiate coziness of a protected inside.</Text>
          <Text mt={5}>The Open Machine is premised on an alternative mode of social organization, an emergent programme of values and operational principles we refer to as{' '}
            <Tooltip
              label="This refers to a collective of actors with no shared identity or structure beyond the open protocols that synchronize them in acts of discovery and interparticipation. See 'Sketches for a Theory of the Protocol Underground' for the origins of this term."
              bg="primary"
              color="bg"
              fontSize="sm"
              p={3}
              maxW="320px"
              placement="top"
            >
              <Box as="span" cursor="help" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">protocol underground</Box>
            </Tooltip>
          </Text>
          <Text mt={5}>In an age of ascendant{' '}
            <Tooltip
              label="See Bogna Konior 'Existential Technologies' — existentialtech.antikythera.org"
              bg="primary"
              color="bg"
              fontSize="sm"
              p={3}
              maxW="320px"
              placement="top"
            >
              <Box as="span" cursor="help" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">
                existential technologies
              </Box>
            </Tooltip>
            , the emergent principles of the underground are in a position to scale to dominance as cynical actors and obsolete formulas fall beneath the compounding increase in degrees of freedom the new forms provide.</Text>
          <Text mt={5}>The Open Machine is here to midwife that process. Our work is to discover alignment and build coalitions (and lineages) around key <Link href="#values" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" _hover={{ color: "primary" }}>underground values</Link>. This also means recognizing the open, public and <Tooltip
            label="This final claim is a nod to the broader underground sense that intelligence itself is a network phenomena, multiparty discovery in non-coercive process."
            bg="primary"
            color="bg"
            fontSize="sm"
            p={3}
            maxW="320px"
            placement="top"
          >
            <Box as="span" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">horizontally determined</Box>
          </Tooltip>{' '}nature of the values themselves.</Text>
        </Flex>

        <Flex id="media" direction="row" alignItems="center" justifyContent="center" w="100%" h="100%" flexWrap="wrap" borderTop={["1px solid"]} borderColor="midtone" py={20}>
          <Flex direction="column" alignItems="center" w={['100%', null, '33%']} justifyContent="center" h="100%" py={10} >
            <Heading color="primary" fontWeight="100" fontSize={['3xl', null, '3xl']} mb={5}>Media</Heading>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} maxW="800px">
            <Text fontSize={['lg', null, 'xl']} pl={[25, null, 50]} pr={[25, null, 0]} pt={["15px", null, "0px"]} borderLeft={["0px solid", null, "1px solid"]} borderColor="primary">Open Machine media takes the form of zines, books, posters, and other web content. All work is licensed Creative Commons. In some cases, our work is commissioned by aligned actors in technology or the academic space.</Text>
          </Flex>
        </Flex>

        <Flex direction="column" w={['100vw', null, '100vw']}>
          <Box
            w="100%"
            maxW="100%"
            overflow="auto"
            mb={6}
            mt={[5, null, 10]}
            css={{
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-primary)', borderRadius: '4px' },
            }}
          >
            {[
              {
                href: '/earth-computer',
                title: 'Ethereum: The Earth Computer',
                description: 'Poster',
                descriptionItalic: 'Research, Writing and Design',
                image: '/assets/assembly_wall.png',
                alt: 'Ethereum: The Earth Computer'
              },
              {
                href: '/ethereum-localism-book',
                title: 'Ethereum Localism: Grounding the Future of Coordination',
                description: 'Book',
                descriptionItalic: 'Editing, Design, and Publishing',
                image: '/assets/EthLocalism_cover-on-table.png',
                alt: 'Ethereum Localism'
              },
              {
                href: '/inverted-city',
                title: 'Inverted City',
                description: 'Zine',
                descriptionItalic: 'Writing, Editing, and Publishing',
                image: '/assets/InvertedCity_zines-on-table.png',
                alt: 'Inverted City'
              },
              {
                href: '/friends-of-the-outside',
                title: 'Friends of the Outside',
                description: 'Booklet',
                descriptionItalic: 'Writing, Design, and Publishing',
                image: '/assets/FotO_physical-outside.jpg',
                alt: 'Friends of the Outside'
              },
              {
                href: '/undercapital',
                title: 'Undercapital',
                description: 'Zine',
                descriptionItalic: 'Research, Writing, and Publishing',
                image: '/assets/undercapitalZines.png',
                alt: 'Undercapital cover'
              },
              {
                href: '/gfel',
                title: 'GFEL',
                description: 'Poster',
                descriptionItalic: 'Writing & Design',
                image: '/assets/gfel_poster.png',
                alt: 'gfel poster'
              },
            ].map((item, i) => (
              <Box
                key={i}
                display="inline-block"
                w={['85vw', null, '800px']}
                verticalAlign="top"
                p={2.5}
              >
                <Link
                  href={item.href}
                  border="1px solid"
                  borderColor="muted"
                  p={3}
                  display="block"
                  _hover={{ borderColor: "primary" }}
                  h="100%"
                  css={{ whiteSpace: 'normal' }}
                >
                  <Heading fontSize={['md', null, 'lg']} mb={3}>{item.title}</Heading>
                  <Text fontSize={['sm', null, 'md']} mb={3}>
                    {item.description} - <Text as="i" fontStyle="italic">{item.descriptionItalic}</Text>
                  </Text>
                  <Box
                    w="100%"
                    h={['360px', null, '800px']}
                    maxH="800px"
                    overflow="hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center center"
                      display="block"
                    />
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Flex>

        <Flex id="events" direction="row" alignItems="center" justifyContent="start" w="100%" flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="center" w={['100%', null, '35%']} justifyContent="center" mr={10} h="100%" py={10}>
            <Heading color="primary" fontWeight="100" fontSize={'3xl'} mb={5}>Events</Heading>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} maxW="800px">
            <Text fontSize={['lg', null, 'xl']} pl={[25, null, 50]} pr={[25, null, 0]} pt={["15px", null, "0px"]} borderLeft={["0px solid", null, "1px solid"]} borderColor="primary">To the end of bringing underground values and strategies to the emerging technology space, and vice versa, The Open Machine has produced salons, workshops, unconferences, meetups, and the rare <Tooltip
              label="We have shunned the latter whenever possible in order to emphasize events optimized for emergence, especially w/r/t tran-sector or -disciplinary coalition, novel or complex emergent subjectivities, etc."
              bg="primary"
              color="bg"
              fontSize="sm"
              p={3}
              maxW="320px"
              placement="top"
            >
              <Box as="span" cursor="help" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">lecture</Box>
            </Tooltip>.</Text>
          </Flex>
        </Flex>


        <Flex direction="column" w={["100%", null, "100%"]} pl={[0, null, 10]}>
          <Box
            w="100%"
            maxW="100%"
            overflow="auto"
            mb={6}
            mt={[5, null, 10]}
            css={{
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-primary)', borderRadius: '4px' },
            }}
          >
            {[
              { src: '/assets/events/gfel25_salon.jpg', alt: 'GFEL 2025 Salon' },
              { src: '/assets/events/event_1.jpeg', alt: 'Open Machine Event' },
              { src: '/assets/events/event_2.jpeg', alt: 'Open Machine Gathering' },
              { src: '/assets/events/event_3.jpeg', alt: 'Open Machine Workshop' },
              { src: '/assets/events/event_4.jpeg', alt: 'Open Machine Evening' },
              { src: '/assets/events/event_5.jpeg', alt: 'Open Machine Outdoor Session' },
            ].map((img, i) => (
              <Box
                key={i}
                display="inline-block"
                w={['85%', null, '60%']}
                h={['100vh', null, '600px']}
                maxH="600px"
                p={2.5}
                verticalAlign="top"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center center"
                  display="block"
                />
              </Box>
            ))}
          </Box>
        </Flex>

        <Flex direction="row" alignItems="start" justifyContent="space-between" w={['100%', null, '100%']} flexWrap="wrap">
          <Flex direction="column" gap={3} mt={5} fontSize={['sm', null, 'md']} w={['100%', null, '50%']} p={10}>
            <Text>Gathering - <i>Open Protocols Convene</i>, Boulder, Colorado 2025</Text>
            <Text>Salon - <i>Open Protocols Social</i>, Portland, Oregon 2025</Text>
            <Text>Workshop - <i>Polycentric Equity Swap Game</i>, Devconnect Buenos Aires, Argentina 2025</Text>
            <Text>Workshop - <i>Assembly in Ethereum</i>, Schelling Point Devconnect Buenos Aires, Argentina 2025</Text>
            <Text>Gathering - <i>GFEL II</i>, Boulder, Colorado 2025</Text>
            <Text>Workshop - <i>Institutions, Extitutions and the Body without Organs</i> - Huy, Belgium 2024</Text>
            <Text>Salon - <i>OSS: Open Salon Series</i>, Portland, Oregon 2024</Text>
          </Flex>
          <Flex direction="column" gap={3} mt={5} fontSize={['sm', null, 'md']} w={['100%', null, '50%']} p={10} >

            <Text>Lecture Series - <i>Local DAO Summer</i>, cyberspace 2024</Text>
            <Text>Salon - <i>Imagination Circle</i> - Portland, Oregon 2024</Text>
            <Text>Gathering - <i>General Forum on Ethereum Localism</i>, Portland, Oregon 2024</Text>
            <Text>Salon - <i>Cybernetics and Public Goods</i>, MCON 3 - Detroit, Michigan 2023</Text>
            <Text>Salon - <i>Decentralized Independent Publishing as Protocol</i>, Devcon - Istanbul, Turkey 2023</Text>
            <Text>Salon - <i>Crypto's Philosophical Underground</i> - Barcelona 2023</Text>
            <Text>Salon - <i>Who weaves the weavers?</i>, SeoulBound, Seoul, Korea, 2023</Text>
          </Flex>

        </Flex>

        <Flex id="research" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
            <Heading color="primary" fontWeight="900" fontSize={'3xl'} mb={5}>Research</Heading>
            <Text>The Open Machine conducts research on the spontaneous orders, open protocols, and plural ontologies of the space outside of administrative institutions, and its clashes with an emerging front of social capture, enclosure and control. As an <Tooltip
              label="Extitutions are small, often ephemeral organizational bodies that use the benefits of institutional legibility to secure, protect and formalize the open empiricism of protocol undergrounds. The name was chosen to emphasize that they are discrete, atomic counterparts to the field-like and process forward phenomena of extitutional dynamics. Extitutions generally serve two roles: a) bundling technical protocols with open cultural values to shield them from capture, b) erecting or facilitating temporary autonomous zones to aid the crystallization of those values. They can be thought of as institutional avatars of protocol undergrounds, strategically deployed to fill power vacuums and keep institutional capture at bay. This often means taking on a trickster character, making deliberately disingenuous and playful use of institutional structures, running distract while the extitutional networks they serve remain in a state of illegibility."
              bg="primary"
              color="bg"
              fontSize="sm"
              p={3}
              maxW="320px"
              placement="top"
            >
              <Box as="span" cursor="help" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">extitution</Box>
            </Tooltip>, our goal is to produce practical, materially grounded knowledge-sets that might evolve into open protocols adequate to the new technological landscape.</Text>
          </Flex>
          <Flex direction="row" alignItems="stretch" justifyContent="space-between" w={["full", null, "60%"]} flexWrap="wrap" mt={[5, null, 0]}>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Post-Capitalist Venture Capital</Heading>
                <Text fontSize="sm">Commissioned project in collaboration with Open Civics Labs to identify strategies for ethical venture capital that exploit the legitimacy crisis of late stage capitalism and anticipate a post-capitalist transition. Final product forthcoming for Allo Capital.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Hyperactive Public Goods Funding</Heading>
                <Text fontSize="sm">Research project bundling web3 capital allocation mechanisms into a modular apparatus to effectively fund public goods projects from early stage to end-cycle verification. Made possible with the help of Public Nouns.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Open Protocol Research Group</Heading>
                <Text fontSize="sm">Multi-year cohort working in the context of Ethereum Localism to find formal isomorphism between open source web protocols and open protocols of urban cultural spaces. Made possible with funding from Arbitrum Grants and Ethereal Forest.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Intensive Protocols</Heading>
                <Text fontSize="sm">Ongoing <Link href="https://intensiveprotocolarchive.replit.app" target="_blank" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px">research</Link> looking into underground technologies for affective, nondual or nonordinary experience. This project engages neurophenomenology and computational modeling of qualia in order to develop digital renderings of underground assemblages.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Guild Guild</Heading>
                <Text fontSize="sm">Ethnographic study of the guilds of the protocol underground, with a focus on protocolization as a means of supporting and maintaining the extitutional clarity of the groups themselves.</Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Flex id="values" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
            <Heading color="primary" fontWeight="900" fontSize={'3xl'} mb={5}>Values</Heading>
            <Text>Our engagement with the archive and ethnographic study of underground communities alerted us to five principles (or four key values + one major operational principle) that animate the underground.</Text>
            <Text mt={3} w="100%" fontSize="md">The underground is a recessive organism, resisting formalization or categorization even as it generates abundant protocols that depend on both of those tactics to persist. We generate this formal account not in order to enclose the underground, but because we our confident in our position that it cannot be enclosed.</Text>
          </Flex>
          <Flex direction="row" alignItems="stretch" justifyContent="space-between" w={["full", null, "60%"]} flexWrap="wrap" mt={[5, null, 0]}>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>High Agency</Heading>
                <Text fontSize="sm">Participants actively shape situations, infrastructures, and outcomes through situated and emergent decision-making. Agency circulates rather than concentrates, expressed through improvisation, responsibility, and the capacity to act without delegated authority.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Open Aesthetic</Heading>
                <Text fontSize="sm">Aesthetic coherence is dynamic, arising and changing with the gestalt of the network. Subjection to an aesthetic condition is forsaken for a challenge to participate and codetermine a <Tooltip
                  label="Distinguished from a spectacle, which requires spectators, a performance is a deliberate cultivation of a vibe (or what Deleuze & Guattari would call a 'plateau') optimized for luring in new influences or affects."
                  bg="primary"
                  color="bg"
                  fontSize="sm"
                  p={3}
                  maxW="320px"
                  placement="top"
                >
                  <Box as="span" cursor="help" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="5px" borderColor="primary">performance</Box>
                </Tooltip>.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Consent Forward</Heading>
                <Text fontSize="sm">Coordination is grounded in explicit, situated agreements that are continuously renegotiated. Boundaries, roles, and intensities remain legible to participants, enabling trust, experimentation, and mutual care under conditions of risk and transformation.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '50%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>Process Oriented</Heading>
                <Text fontSize="sm">Attention is directed toward unfolding, qualitative dynamics rather than quantitative, static outcomes. This means emphasis on intensive experience or "qualia" - affect, epiphany, synchronicity, the nondual, and most importantly the experience of dissolution into larger subjectivities.</Text>
              </Box>
            </Box>
            <Box w={['100%', null, '100%']} p={[2, null, 3]} display="flex">
              <Box border="1px solid" borderColor="primary" p={5} flex="1">
                <Heading fontSize={['md', null, 'lg']} mb={5}>+ Open Protocolized</Heading>
                <Text fontSize="sm">Practices crystallize into reusable patterns through a kind of natural selection in the "cold exterior" of the extitutional realm. Weathered by the exterior, open protocols develop an acute, open empiricism, manifested as (a) availability to appropriation, forking, recombination to whatever material , aesthetic or epistemic ends, (b) resistance to and avoidance of any system that compromises (a), and (c) compact and compelling enough form to facilitate free & open circulation.</Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Network</Heading>
              <p>The Open Machine convenes temporary assemblies where ideas meet bodies and something gets made. Salons, workshops, lecture series, unconferences, gatherings. Spaces for interstitial productivity. Events come first. Structures dissolve afterward.</p>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} mt={5}>
              <Link href="https://allocapital.io" target="_blank"><Text>Allo Capital</Text></Link>
              <Link href="https://block.science" target="_blank"><Text>Block.science</Text></Link>
              <Link href="https://daohaus.club" target="_blank"><Text>DAOhaus</Text></Link>
              <Link href="https://gitcoin.co" target="_blank"><Text>Gitcoin</Text></Link>
              <Link href="https://hatsprotocol.xyz" target="_blank"><Text>Hats</Text></Link>
              <Link href="https://hypercerts.org" target="_blank"><Text>Hypercerts</Text></Link>
              <Link href="https://metacartel.org" target="_blank"><Text>MetaCartel</Text></Link>
              <Link href="https://metagov.org" target="_blank"><Text>Metagov</Text></Link>
              <Link href="https://opencivics.co" target="_blank"><Text>Open Civics</Text></Link>
              <Link href="https://publicnouns.wtf" target="_blank"><Text>Public Nouns</Text></Link>
              <Link href="https://raidguild.org" target="_blank"><Text>Raid Guild</Text></Link>
              <Link href="https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/" target="_blank"><Text>Stanford Codex</Text></Link>
            </Flex>
          </Flex>
        </Flex> */}

        <Footer />

      </main >
    </Flex >
  )
}
