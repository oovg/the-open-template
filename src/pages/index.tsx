import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import {
  PageMetadata,
} from '@/components'
import Post from '../interfaces/post'

type Props = {
  filteredPosts: Post[]
}

export default function Home({ filteredPosts }: Props) {
  return (
    <>
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
      <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" h="80px" p={5}>
          <Heading
                color="primary"
                fontWeight="100"
                lineHeight="0.9em"
                fontSize={['xl', null, '2xl']}
                mb={5}
              >
                The Open Machine
            </Heading>
        </Flex>
          
        <Flex direction="column" alignItems="start" justifyContent="space-between" w="100%" h="auto" position="relative">
            <Image src="/assets/om_substrates2.png" alt="The Open Machine" style={{ objectFit: 'cover', objectPosition: 'center center', overflow: "hidden"}}/>
        </Flex>

        <Flex direction="column" alignItems="start" justifyContent="space-between" maxW="600px" mx="auto" position="relative" p= {10}>
            <Text>The Open Machine is a creative studio, zine shop, and organizing body producing media and events at the frontier of coordination. We publish books, zines, and posters. We convene salons, workshops, and gatherings. We incubate tools and knowledge commons. Everything we make emerges from research and practice woven together.</Text>
            <Text mt={5}>We work from the underground—the informal networks, experimental scenes, and temporary assemblies where new ideas originate. Institutions capture and formalize what the underground creates. We build infrastructure that lets it circulate on its own terms. A machine that runs on autonomy, participation, and free association.</Text>
            <Flex direction="column" gap={3} mt={5}>
            <Text>the open machine is a substrate</Text>
            <Text>the open machine is an extitution </Text> 
            <Text>the open machine is an underground </Text> 
            <Text>the open machine is an intensive process </Text> 
            <Text>the open machine is a zine shop </Text> 
            <Text>the open machine is a creative studio </Text> 
            <Text>the open machine is an organizing body </Text> 
            <Text>the open machine is an applied philosophy thinktank</Text>
            <Text>the open machine is becoming</Text>
            </Flex>
        </Flex>

        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Media</Heading>
              <p>The Open Machine publishes artifacts from the frontier—zines, books, posters, booklets. We share information, transmit experience, and document protocol. Things that can be held, collected, and passed along. Ideas that circulate without capture.</p>
          </Flex>
          <Flex direction="row" alignItems="start" justifyContent="space-between" w="60%" flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Image src="/assets/Assembly_mock-full.jpg" alt="Ethereum: The Earth Computer" width="100%" height="100%"/>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Image src="/assets/EL_Cover-front.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Image src="/assets/invertedCity_cover.jpg" alt="Inverted City" width="100%" height="100%"/>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={5}>
              <Image src="/assets/FotO_physical-outside.jpg" alt="Friends of the Outside" width="100%" height="100%"/>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Events</Heading>
              <p>The Open Machine convenes temporary assemblies where ideas meet bodies and something gets made. Salons, workshops, lecture series, unconferences, gatherings. Spaces for interstitial productivity. Events come first. Structures dissolve afterward.</p>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} mt={5}>
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

        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Research</Heading>
              <p>The Open Machine conducts research on the characteristics of extitutional space - the spontaneous orders, open protocols, and plural ontologies of the space outside of administrative institutions. We take in feeds from transchistorical sources, from diverse disciplines, from the more-than-human world and the cutting edge of organization in order to construct images of free association and network improvisation adequate to a post-coercion society.</p>
          </Flex>
          <Flex direction="row" alignItems="start" justifyContent="space-between" w="60%" flexWrap="wrap" mt={[5, null, 0]}>
          <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>PCVC</Heading>
              <Text>blurb about research questions and thesis</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>Hyperactive Public Goods Funding</Heading>
              <Text>blurb about research questions and thesis</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>Open Protocols Research Group</Heading>
              <Text>blurb about research questions and thesis</Text>
            </Flex>
            <Flex direction="column" alignItems="start" w={['100%', null, '50%']} p={[0, null, 5]}>
              <Heading fontSize={['md', null, 'lg']} mb={5}>???</Heading>
              <Text>blurb about research questions and thesis</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
              <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Network</Heading>
              <p>The Open Machine convenes temporary assemblies where ideas meet bodies and something gets made. Salons, workshops, lecture series, unconferences, gatherings. Spaces for interstitial productivity. Events come first. Structures dissolve afterward.</p>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} mt={5}>
              <Link href="https://allocapital.io"><Text>Allo Capital</Text></Link>
              <Link href="https://block.science"><Text>Block.science</Text></Link>
              <Link href="https://daohaus.club"><Text>DAOhaus</Text></Link>
              <Link href="https://gitcoin.co"><Text>Gitcoin</Text></Link>
              <Link href="https://hatsprotocol.xyz"><Text>Hats</Text></Link>
              <Link href="https://hypercerts.org"><Text>Hypercerts</Text></Link>
              <Link href="https://metacartel.org"><Text>MetaCartel</Text></Link>
              <Link href="https://metagov.org"><Text>Metagov</Text></Link>
              <Link href="https://opencivics.co"><Text>Open Civics</Text></Link>
              <Link href="https://publicnouns.wtf"><Text>Public Nouns</Text></Link>
              <Link href="https://raidguild.org"><Text>Raid Guild</Text></Link>
            </Flex>
          </Flex>
        </Flex>

      </main>
      </>
  )
}
