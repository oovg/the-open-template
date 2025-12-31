import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import {
  PageMetadata,
  Footer
} from '@/components'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <Flex direction="column" alignItems="start" justifyContent="space-between" w="full">
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />
          
        <Flex direction="column" alignItems="start" justifyContent="space-between" w="100%" h="calc(100vh - 80px)" position="relative">
            <Image src="/assets/om_substrates2.png" h="100%" w="100%" alt="The Open Machine" style={{ objectFit: 'cover', objectPosition: 'center center', overflow: "hidden"}}/>
        </Flex>

        <Flex id="what-we-do" direction="column" alignItems="start" justifyContent="space-between" maxW="600px" mx="auto" position="relative" p= {10}>
          <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>What we do</Heading>
            <Text>The Open Machine is a creative outpost for scaling underground values alongside, within and through emerging technologies. We produce media & events and stage research on the actualization of extitutional social forms in the twenty first century.</Text>
            <Text mt={5}>Institutions (in their dominant form as centralized, administrative bureaucracies) are known to concentrate power, homogenize culture, enshittify technology, obscure empirical conditions in favor of party lines and, worse of all, generate cultures of complacency where direct empirical engagement with reality is sidelined for the opiate coziness of a protected inside.</Text>
           <Text mt={5}>The Open Machine is premised on an alternative mode of social organization, a semi-formal set of values and operational principles we refer to as the protocol underground.</Text>
           <Text mt={5}>In an age of ascendant existential technologies, the emergent principles of the underground are in a position to scale to conspicuous dominance as cynical actors and obsolete formulas fall beneath the compounding increase in degrees of freedom the new forms provide.</Text>
           <Text mt={5}>The Open Machine is here to midwife that process. Our work is to discover alignment and build coalitions (and lineages) around key underground values. This also means recognizing the open, public and horizontally determined nature of the values themselves.</Text>
        </Flex>

        <Flex id="media" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Media</Heading>
              <Text>Open Machine media takes the form of zines, books, posters, and other web content. All work is licensed Creative Commons. In some cases, our work is commissioned by aligned actors in technology or the academic space.</Text>
          </Flex>
          <Flex direction="row" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
            <Link href="/earth-computer" border="1px solid" borderColor="primary" p={3} _groupHover={{ scale: 1.05 }}>
              <Heading fontSize={['md', null, 'lg']} mb={3}>Ethereum: The Earth Computer</Heading>
              <Text>Poster - <i>Research, Writing and Design</i></Text>
              <Image src="/assets/Assembly_mock-full.jpg" alt="Ethereum: The Earth Computer" width="100%" height="100%"/>
            </Link>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Link href="/ethereum-localism-book" border="1px solid" borderColor="primary" p={3}>
                <Heading fontSize={['md', null, 'lg']} mb={3}>Ethereum Localism: Grounding the Future of Coordination</Heading>
                <Text>Book - <i>Editing, Design, and Publishing</i></Text>
                <Image src="/assets/EL_Cover-front.jpg" alt="Ethereum Localism" width="100%" height="100%"/>  
              </Link>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Link href="/inverted-city" border="1px solid" borderColor="primary" p={3}>
                <Heading fontSize={['md', null, 'lg']} mb={3}>Inverted City</Heading>
                <Text>Zine - <i>Writing, Editing, and Publishing</i></Text>
                <Image src="/assets/invertedCity_cover.jpg" alt="Inverted City" width="100%" height="100%"/>
              </Link>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
            <Link href="/friends-of-the-outside" border="1px solid" borderColor="primary" p={3}>
                <Heading fontSize={['md', null, 'lg']} mb={3}>Friends of the Outside</Heading>
                <Text>Booklet - <i>Writing, Design, and Publishing</i></Text>
                <Image src="/assets/FotO_physical-outside.jpg" alt="Friends of the Outside" width="100%" height="100%"/>
            </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex id="events" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Events</Heading>
              <Text>To the end of bringing underground values and strategies to the emerging technology space, and vice versa, The Open Machine has produced or participated in salons, workshops, unconferences, meetups, and the rare lecture.</Text>
              <Image src="/assets/gfel25_salon.jpg" alt="GFEL 2025 Salon" width="100%" height="100%"/>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} mt={5} fontSize={['sm', null, 'md']}>
              <Text>Gathering - <i>Open Protocols Convene</i>, Boulder, Colorado 2025</Text>
              <Text>Salon - <i>Open Protocols Social</i>, Portland, Oregon 2025</Text>
              <Text>Workshop - <i>Polycentric Equity Swap Game</i>, Devconnect Buenos Aires, Argentina 2025</Text>
              <Text>Workshop - <i>Assembly in Ethereum</i>, Schelling Point Devconnect Buenos Aires, Argentina 2025</Text>
              <Text>Gathering - <i>GFEL II</i>, Boulder, Colorado 2025</Text>
              <Text>Workshop - <i>Institutions, Extitutions and the Body without Organs</i> - Huy, Belgium 2024</Text>
              <Text>Salon - <i>OSS: Open Salon Series</i>, Portland, Oregon 2024</Text>
              <Text>Lecture Series - <i>Local DAO Summer</i>, cyberspace 2024</Text>
              <Text>Salon - <i>Imagination Circle</i> - Portland, Oregon 2024</Text>
              <Text>Gathering - <i>General Forum on Ethereum Localism</i>, Portland, Oregon 2024</Text>
              <Text>Salon - <i>Cybernetics and Public Goods</i>, MCON 3 - Detroit, Michigan 2023</Text>
              <Text>Salon - <i>Decentralized Independent Publishing as Protocol</i>, Devcon - Istanbul, Turkey 2023</Text>
              <Text>Salon - <i>Crypto's Philosophical Underground</i> - Barcelona 2023</Text>
              <Text>Salon - <i>Who weaves the weavers?</i>, SeoulBound, Seoul, Korea, 2023</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex id="research" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Research</Heading>
              <Text>The Open Machine conducts research on the spontaneous orders, open protocols, and plural ontologies of the space outside of administrative institutions, and its clashes with an emerging front of social capture, enclosure and control. As anextitution, our goal is to produce practical, materially grounded knowledge-sets that might evolve into open protocols adequate to the new technological landscape.</Text>
          </Flex>
          <Flex direction="row" alignItems="start" justifyContent="space-between" w={["full", null, "60%"]} flexWrap="wrap" mt={[5, null, 0]}>
          <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>Post-Capitalist Venture Capital</Heading>
              <Text>Commissioned project in collaboration with Open Civics Labs to identify strategies for ethical venture capital that exploit the legitimacy crisis of late stage capitalism and anticipate a post-capitalist transition. Final product forthcoming for Allo Capital.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mt={[8, null, 0]} mb={5}>Hyperactive Public Goods Funding</Heading>
              <Text>Research project bundling web3 capital allocation mechanisms into a modular apparatus to effectively fund public goods projects from early stage to end-cycle verification. Made possible with the help of Public Nouns.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Open Protocols Research Group</Heading>
              <Text>Multi-year cohort working in the context of Ethereum Localism to find formal isomorphism between open source web protocols and open protocols of urban cultural spaces. Made possible with funding from Arbitrum Grants and Ethereal Forest.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Intensive Protocols</Heading>
              <Text>Ongoing research looking into underground technologies for affective, nondual or nonordinary experience. This project engages neurophenomenology and computational modeling of qualia in order to develop digital renderings of underground assemblages.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Guild Guild</Heading>
              <Text>Ethnographic study of the guilds of the protocol underground, with a focus on protocolization as a means of supporting and maintaining the extitutional clarity of the groups themselves.</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex id="values" direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap" borderTop="1px solid" borderColor="primary">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Values</Heading>
              <Text>Our engagement with the archive and ethnographic study of underground communities alerted us to five principles (or four key values + one major operational principle) that animate the underground. They are as follows:</Text>
          </Flex>
          <Flex direction="row" alignItems="start" justifyContent="space-between" w={["full", null, "60%"]} flexWrap="wrap" mt={[5, null, 0]}>
          <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>High Agency</Heading>
              <Text>Participants actively shape situations, infrastructures, and outcomes through situated and emergent decision-making. Agency circulates rather than concentrates, expressed through improvisation, responsibility, and the capacity to act without delegated authority.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Open Aesthetic</Heading>
              <Text>Aesthetic coherence is dynamic, arising and changing with the gestalt of the network. Subjection to an aesthetic condition is forsaken for a challenge to participate and codetermine a performance.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Consent Forward</Heading>
              <Text>Coordination is grounded in explicit, situated agreements that are continuously renegotiated. Boundaries, roles, and intensities remain legible to participants, enabling trust, experimentation, and mutual care under conditions of risk and transformation.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mt={[8, null, 0]} mb={5}>Process Oriented</Heading>
              <Text>Attention is directed toward unfolding, qualitative dynamics rather than quantitative, static outcomes. This means emphasis on intensive experience or "qualia" - affect, epiphany, synchronicity, the nondual, and most importantly the experience of dissolution into larger subjectivities that may be determined by social, material, technological dynamics or (more likely) all of the above.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '100%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']}  mt={[8, null, 0]} mb={5}>Open Protocolized</Heading>
              <Text>Practices crystallize into reusable patterns through a kind of natural selection in the "cold exterior" of the extitutional realm, where practical empiricism and novelty-infatuation reign. Weathered by the exterior, open protocols develop an acute, open empiricism, manifested as (a) availability to appropriation, forking, recombination to whatever material ends, & (b) resistance and circumvention to any system that compromises (a), and (c) compact and compelling enough form to facilitate free & open circulation.</Text>
              <Text mt={8} >The underground is a recessive organism, resisting formalization or categorization even as it generates abundant protocols that depend on both of those tactics to persist. We generate this formal account not in order to enclose the underground, but because we our confident in our position that it cannot be enclosed.</Text>
            </Flex>
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

      </main>
      </Flex>
  )
}
