import {
    Flex,
    Heading,
    Image,
    Link,
    Text,
  } from '@chakra-ui/react'
  import { DownloadIcon } from '@chakra-ui/icons'
  import {
    PageMetadata,
  } from '@/components'
  import { Header } from '@/components/Header'
  import { Back } from '@/components/Back'
  
  export default function InvertedCity() {
    return (
      <>
        <PageMetadata
          title="OM - Inverted City"
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
                <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Inverted City</Heading>
                <Text>Zine - <i>Writing, Editing, and Publishing</i></Text>
                <Text  fontSize={['lg', null, 'xl']}mt={8}>A collection of essays on the inversion of the city.</Text>
                <Flex direction="row" gap={3} mt={5} width="100%">
                  <Link href="/assets/pdf/invertedCity_digital.pdf" target="_blank"><Text>Download PDF <DownloadIcon mb={1} ml={2}/></Text></Link>
                </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
              <Flex direction="column" gap={3} my={5}>
                <Image src="/assets/invertedCity_cover.jpg" alt="inverted city cover" width="100%" height="100%"/>
              </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%']} gap={5} maxW="1200px" mx="auto">
                <Image src="/assets/InvertedCity_spreads-0607.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                
                <Image src="/assets/InvertedCity_spreads-1011.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-1819.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-1314.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-2627.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-2829.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-3435.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-4041.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-4647.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/InvertedCity_spreads-5253.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
            </Flex>
          </Flex>
  
        </main>
        </>
    )
  }
  