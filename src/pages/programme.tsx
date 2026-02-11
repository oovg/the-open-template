import React from 'react'
import {
  Flex,
  Heading,
  Link,
  Text,
  Box,
} from '@chakra-ui/react'
import {
  PageMetadata,
  Footer,
  SupportProgramme,
} from '@/components'
import { Header } from '@/components/Header'

export default function Programme() {
  return (
    <Flex direction="column" alignItems="start" justifyContent="space-between" w="100vw">
      <PageMetadata
        title="Programme 2026 // The Open Machine"
        description="The Open Machine 2026 Programme - Media, Events, and Research"
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />

        {/* Hero Section */}
        <Flex direction="column" alignItems="start" justifyContent="start" w="100%" p={[5, null, 10]} borderBottom="1px solid" borderColor="midtone">
          <Heading color="primary" fontWeight="900" fontSize={['3xl', null, '5xl']} mb={5}>Programme 2026</Heading>
          <Box maxW="900px">
            <Text fontSize={['lg', null, 'xl']} mb={5}>
              This year The Open Machine looks to expand further outside the typical, overly technical narratives that have dominated emerging technologies toward a broader coalition united by shared underlying principles: engaging immanence by way of distributed agency, recursive openness, consent-forward coordination, aesthetic self-organization, and processual emergence.
            </Text>
            <Text fontSize={['md', null, 'lg']} mb={5}>
              <Text as="b">Media</Text> grounds the historical and conceptual case, tracing open protocols as a transhistorical movement while collecting diverse voices into anthologies of emerging theory. <Text as="b">Events</Text> stage encounters between practitioners and technologists across domains—gatherings, salons, film screenings, and traveling installations that bring the protocol underground into tactile form. <Text as="b">Research</Text> deepens our ethnographic understanding of underground forms, studies emerging and speculative organizational and coordination patterns, and explores how technologies of control might be inverted into technologies of immanence. New digital commons efforts, reading rooms, repositories, and public forums seed the shared infrastructure through which open protocols might circulate and compound autonomously.
            </Text>
            <Text fontSize={['md', null, 'lg']}>
              Below are some specific projects we look to engage in over the year.
            </Text>
          </Box>
        </Flex>

        {/* Support Section */}
        <Box borderBottom="1px solid" borderColor="midtone">
          <SupportProgramme />
        </Box>

        {/* Media Section */}
        <Flex id="media" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={[5, null, 10]} flexWrap="wrap" borderBottom="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="start" mr={[0, null, 10]} mb={[5, null, 0]}>
            <Heading color="primary" fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>Media</Heading>
            <Text fontSize="md">
              Our media is how ideas travel, capturing and presenting our research findings in an engaging, often immersive experience. The media we produce takes many forms from zines and books to posters and interactive digital experiences, always imbued with a high level of design and creativity to generate visceral, engaging translations of the deep concepts that are uncovered.
            </Text>
          </Flex>
          <Flex direction="column" w={['100%', null, '60%']} gap={4}>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">A History of the Open Protocol Movement</Heading>
              <Text fontSize="sm">Zine tracing historical predecessors to open source software, situating FOSS, cryptography, and AI within a transhistorical lineage of open protocols extending to proto-medieval information networks.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">A Brief History of the Capture and Release of the Internet</Heading>
              <Text fontSize="sm">Zine mapping the arc from the internet's founding conditions through enclosure by power and markets, toward possible futures beyond the decentralization/recentralization cycle.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">An Anthology of Extitutional Theory and Practice</Heading>
              <Text fontSize="sm">Collected essays from thinkers working in extitutional space, laying out the case for extitutional dynamics and the new organizational forms they make possible.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Extitutions Rise</Heading>
              <Text fontSize="sm">Poster visualizing extitutional emergence: conditions of production, differentiation from institutions, and surface manifestations across domains.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Open Protocols Infographic</Heading>
              <Text fontSize="sm">Visual taxonomy mapping family resemblances, genealogies, and convergence points across technological, social, and cultural open protocols.</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Events Section */}
        <Flex id="events" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={[5, null, 10]} flexWrap="wrap" borderBottom="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="start" mr={[0, null, 10]} mb={[5, null, 0]}>
            <Heading color="primary" fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>Events</Heading>
            <Text fontSize="md">
              Open Machine plays an interstitial role in the emerging technology space, organizing discourse and cultural production around provocative hybrids (e.g., "Ethereum Localism"). We do so in order to build broad coalitions that reflect the diverse embodiments of immanent social strategies. We pay special attention to discourse and cultural schelling points that extend across traditional domains, e.g. builder & thinker, luddite & accelerationist, analogue & digital, high technology & low technology.
            </Text>
          </Flex>
          <Flex direction="column" w={['100%', null, '60%']} gap={4}>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Open Protocols Convene</Heading>
              <Text fontSize="sm">Gathering bringing together builders of technological and social protocols for cross-pollination between practitioners who may not yet recognize their shared project.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Open Machine Mindfuck Movie Club (Ommmc)</Heading>
              <Text fontSize="sm">Ongoing screening and discussion series investigating affective and cognitive protocols as depicted in film—technologies of control and compliance versus technologies of freedom and empirical openness.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Open Machine Popup Shoppe</Heading>
              <Text fontSize="sm">Mobile media installation at major conferences: readings, salons, and distribution of publications. The protocol underground made tactile.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Data Art Exhibition</Heading>
              <Text fontSize="sm">Curated art installation that renders real data of complex systems as immersive, spatial experience. Complex data sets such as ecological, semiotic, or socio-economic.</Text>
            </Box>
            <Box border="1px solid" borderColor="primary" p={5}>
              <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Cross-Pollinating Discussion Series</Heading>
              <Text fontSize="sm">Monthly online "Collision" event involving a discussion between contributors to remote fields that nonetheless share the structural and ethical content of immanent technology.</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Research Section */}
        <Flex id="research" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={[5, null, 10]} flexWrap="wrap" borderBottom="1px solid" borderColor="midtone">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="start" mr={[0, null, 10]} mb={[5, null, 0]}>
            <Heading color="primary" fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5} fontStyle="italic">Research</Heading>
            <Text fontSize="md">
              To the end of tracing out the lineage and current frontiers of immanent social organization, Open Machine applies philosophical foundations to cultural history in order to bring insight and ethical clarity to the emerging technology space. We identify diverse parties, including individuals and collective and networked entities, and show how they exert agency and display intelligence in contexts that surpass institutional legibility. Whether it's in the distributed yet concerted intelligence of cultural undergrounds, the avant garde financial assemblages of DAOs, the anonymous intentionality of LLMs, or the crowd-consciousness of cultural archetypes and memes, sensitivity to these actors yields insights about emerging technologies and the intelligence they harness that will cause sea change in the coming years.
            </Text>
          </Flex>
          <Flex direction="column" w={['100%', null, '60%']}>
            {/* Research Topics */}
            <Heading fontSize={['lg', null, 'xl']} mb={5} color="primary">Research Topics</Heading>
            <Flex direction="column" gap={4} mb={8}>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2}>Diverse Intelligence Lens</Heading>
                <Text fontSize="sm">
                  An extension of ethnographic inquiry inspired by the Templeton Foundation's{' '}
                  <Link href="https://www.templetonworldcharity.org/our-priorities/discovery/diverse-intelligences" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">
                    Diverse Intelligence program
                  </Link>
                  . Takes analytical frames from new currents in biology to study collective and distributed forms of cognition across organisms and systems, with special attention to the latent spaces they navigate and the coordination patterns they sustain.
                </Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2}>Technedelics: Interfaces as Exploratory Media</Heading>
                <Text fontSize="sm">
                  The use of AR, VR, game engines, and hybrid interfaces as perceptual instruments for exploring new environments and generating new subjectivities, inspired by Michael Levin's work on{' '}
                  <Link href="https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/fnsys.2022.768201/full" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">
                    "latent spaces"
                  </Link>
                  {' '}and Felix Guattari's{' '}
                  <Link href="https://monoskop.org/images/archive/2/24/20150326135144%21Guattari_Felix_Chaosmosis_An_Ethico-Aesthetic_Paradigm.pdf" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">
                    "ethico-aesthetic paradigm"
                  </Link>
                  .
                </Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2}>Imaginal & Inversional Technology Studies</Heading>
                <Text fontSize="sm">An analytic–speculative practice that reimagines existing technologies from within, asking what alternative forms of coordination and agency are already latent inside dominant systems. For example: what would an immanent inversion of Facebook or Palantir look like?</Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2}>Immanent Pairings & Productive Adjacencies</Heading>
                <Text fontSize="sm">
                  The exploratory side that more often than not occasions media and events involves identifying potential pairings of immanent technological forms into new discourse communities that can explore the potential for reciprocity and discovery, while giving definition to the broader program of immanent technology itself. The most resonant past example of this is "Ethereum Localism", which took two social paradigms aligned with the immanent technology thesis and asked questions about how they could be woven together to generate a new space of inquiry. (See the{' '}
                  <Link href="https://theopenmachine.net/ethereum-localism-book" textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">
                    Ethereum Localism book
                  </Link>
                  , published by Open Machine in collaboration with Gitcoin and Allo Capital).
                </Text>
              </Box>
            </Flex>

            {/* Past Research Topics */}
            <Heading fontSize={['lg', null, 'xl']} mb={3} color="primary">Past Research Topics</Heading>
            <Text fontSize="sm" mb={5}>Specific research vectors we have undertaken in the recent past include:</Text>
            <Flex direction="column" gap={4} mb={8}>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Ethnographic Study of the Protocol Underground</Heading>
                <Text fontSize="sm" mb={3}>Fieldwork and engagement with the archive and living communities on underground formations, their meta-protocols, and the strategies through which they maintain coherence without institutional capture.</Text>
                <Text fontSize="sm">
                  Outputs:{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/sketches-toward-a-theory-of-the-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(1)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/undercapital?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(2)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/speculative-p2p-and-the-urban-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(3)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/undercapital-redux?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(4)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/2026-the-rise-of-the-protocol-underground?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(5)</Link>{' '}
                  <Link href="https://exeuntisunderground.substack.com/p/diverse-intelligence-and-the-protocol?utm_source=profile&utm_medium=reader2" isExternal textDecoration="underline">(6)</Link>{' '}
                  <Link href="https://paragraph.com/@openprotocolresearch/oprg-interview-series-mark-lakeman-of-city-repair" isExternal textDecoration="underline">(Ethnographic interview with Mark Lakeman)</Link>
                </Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">The Modern Guild</Heading>
                <Text fontSize="sm" mb={3}>
                  Guild Guild is a community of practice that studies the modern guild form (ala{' '}
                  <Link href="https://www.protocolguild.org/" isExternal textDecoration="underline" textDecorationStyle="dotted" textUnderlineOffset="3px">Protocol Guild</Link>
                  ) and distributes reference architecture so others can freely replicate the form as a model for commons infrastructure development and maintenance.
                </Text>
                <Text fontSize="sm">
                  Output:{' '}
                  <Link href="https://guildguild.org/" isExternal textDecoration="underline">(1)</Link>{' '}
                  <Link href="https://paragraph.com/@guildguild/guilds-reference-architecture" isExternal textDecoration="underline">(2)</Link>
                </Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Comparative Study of Emerging State Forms</Heading>
                <Text fontSize="sm">Analysis of existing, emerging, and speculative political forms: nation-states, rentier states, network states, coordi-nations, open states, flux states.</Text>
              </Box>
            </Flex>

            {/* Research Frameworks */}
            <Heading fontSize={['lg', null, 'xl']} mb={3} color="primary">Research Frameworks</Heading>
            <Text fontSize="sm" mb={5}>To the end of maximum applicability of research assets and concepts, we construct usable <Text as="b">Frameworks</Text> that can be applied to diverse organizations or movements.</Text>
            <Flex direction="column" gap={4}>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Underground Meta-Protocol Scaffold</Heading>
                <Text fontSize="sm">Scores a system on four dimensions (agency, aesthetics, consent, process) to assess whether it can sustain open experimentation without collapsing into enclosure or coercion.</Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Open vs Control Technology Diagnostic</Heading>
                <Text fontSize="sm">Classifies technologies along two axes—recursion (can users modify the rules?) and agency (does it expand or compress choices?)—to determine whether they liberate or constrain.</Text>
              </Box>
              <Box border="1px solid" borderColor="primary" p={5}>
                <Heading fontSize={['md', null, 'lg']} mb={2} fontStyle="italic">Latent Problem Spaces Map</Heading>
                <Text fontSize="sm">Identifies multiscale actors in an organization or network and asks what "space" an actor is actually optimizing in (economic, affective, somatic, etc.) to explain behaviors that look irrational or misaligned when viewed through a narrow lens. Understanding the nature or "umwelt" of actors within a structure then creates the occasion for organic alignment.</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Footer />

      </main>
    </Flex>
  )
}
