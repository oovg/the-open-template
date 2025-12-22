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
            
          {/* <Flex direction="column" alignItems="start" justifyContent="space-between" w="100%" h="auto" position="relative">
              <Image src="/assets/om_substrates2.png" alt="The Open Machine" style={{ objectFit: 'cover', objectPosition: 'center center', overflow: "hidden"}}/>
          </Flex> */}
  
          <Flex direction="row" alignItems="start" justifyContent="space-between" w="100%" p={10} flexWrap="wrap">
            <Flex direction="column" alignItems="start" w={['100%', null, '33%']} justifyContent="space-between" mr={10}>
                <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Ethereum, The Earth Computer: Visualizing Assembly</Heading>
                <Text>Poster - <i>Research, Writing, and Design</i></Text>
                <Flex direction="row" gap={3} mt={5} width="100%">
                    <Link href="/" target="_blank"><Text>Buy Now</Text></Link>
                    <Link href="/" target="_blank"><Text>Download PDF</Text></Link>
                </Flex>
                <Text  fontSize={['lg', null, 'xl']}mt={8}>A Poster visualizing the assembly of Ethereum, the Earth Computer.</Text>
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
  