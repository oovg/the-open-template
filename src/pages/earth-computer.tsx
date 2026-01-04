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
  
  export default function EarthComputer() {
    return (
      <>
        <PageMetadata
          title="OM - Ethereum, TheEarth Computer"
          description=""
          image="https://theopenmachine.net/assets/om_substrates2.png"
        />
        <main>
          <Header />
          <Back />
  
          <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
            <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
                <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Ethereum, The Earth Computer: Visualizing Assembly</Heading>
                <Text>Poster - <i>Research, Writing, and Design</i></Text>
                <Text  fontSize={['lg', null, 'xl']}mt={8}>A Poster visualizing the assembly of Ethereum, the Earth Computer.</Text>
                <Flex direction="row" gap={3} mt={5} width="100%">
                    <Link href="https://allocapital.metalabel.com/ethasassembly" target="_blank"><Text>Buy Now <ExternalLinkIcon mb={1} ml={2}/></Text></Link>
                    <Text>|</Text>
                    <Link href="/assets/pdf/Assembly_20x30-print-bleed.pdf" target="_blank"><Text>Download PDF<DownloadIcon mb={1} ml={2}/></Text></Link>
                </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
              <Flex direction="column" gap={3} my={5}>
                <Image src="/assets/Assembly_mock-full.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
              </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%']} gap={5} maxW="1200px" mx="auto">
                <Image src="/assets/Assembly_1.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/Assembly_2.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/Assembly_3.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
            </Flex>
          </Flex>
  
        </main>
        </>
    )
  }
  