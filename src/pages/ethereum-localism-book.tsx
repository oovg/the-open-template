import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  PageMetadata,
} from '@/components'
import { Header } from '@/components/Header'
import { Back } from '@/components/Back'

export default function EthereumLocalismBook() {
  return (
    <>
      <PageMetadata
        title="OM - Ethereum Localism Book"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />

        <Back />

        {/* <Flex direction="column" alignItems="start" justifyContent="space-between" w="100%" h="auto" position="relative">
              <Image src="/assets/om_substrates2.png" alt="The Open Machine" style={{ objectFit: 'cover', objectPosition: 'center center', overflow: "hidden"}}/>
          </Flex> */}

        <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
          <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
            <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Ethereum Localism: Grounding the Future of Coordination</Heading>
            <Text>Book - <i>Editing, Design, and Publishing</i></Text>
            <Text fontSize={['lg', null, 'xl']} mt={8}>A Collection of Essays on the Future of Coordination</Text>
            <Flex direction="row" gap={3} mt={5} width="100%">
              {/* <Link href="https://allocapital.metalabel.com/ethasassembly" target="_blank"><Text>Buy Now <ExternalLinkIcon mb={1} ml={2}/></Text></Link>
                    <Text>|</Text> */}
              <Link href="https://qxvqdga4v2uhlcgh7bvl5m6rukrhmesy6uzingqov76jw5miy3ka.arweave.net/hesBmByuqHWIx_hqvrPRoqJ2Elj1MoaaDq_8m3WIxtQ" target="_blank"><Text>Download PDF<DownloadIcon mb={1} ml={2} /></Text></Link>
            </Flex>
            <Flex direction="column" gap={0}>
              <Text fontSize={['md', null, 'lg']} fontWeight="bold" mt={5}>Contributors</Text>
              <Text>Michel Bauwens</Text>
              <Text>Marcus Barrick</Text>
              <Text>Exeunt</Text>
              <Text>Giulio Quarta</Text>
              <Text>AgroForestDAO</Text>
              <Text>Benjamin Life</Text>
              <Text>Patrick Rawson</Text>
              <Text>Louise Borreani</Text>
              <Text>Andrea Farias</Text>
              <Text>Emaline Friedman</Text>
              <Text>Nate Suits</Text>
              <Text>Crystal Street</Text>
              <Text>Scott Morris</Text>
              <Text>Kevin Owocki</Text>
              <Text>Ven Gist</Text>
              <Text>Christy Holland</Text>
            </Flex>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
            <Flex direction="column" gap={3} my={5}>
              <Image src="/assets/EL_Cover-front.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            </Flex>
          </Flex>
          <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%']} gap={5} maxW="800px" mx="auto">
            <Image src="/assets/EthereumLocalism_spreads-intro.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-cosmo.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-bauwens.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-protocols.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-local.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-difference.jpg" alt="Ethereum Localism" width="100%" height="100%" />
            <Image src="/assets/EthereumLocalism_spreads-sociedade.jpg" alt="Ethereum Localism" width="100%" height="100%" />
          </Flex>
        </Flex>

      </main>
    </>
  )
}
