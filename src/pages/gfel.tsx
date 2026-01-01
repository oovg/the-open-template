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
  import { Footer } from '@/components/Footer'
  import { Back } from '@/components/Back'
  
  export default function Undercapital() {
    return (
      <>
        <PageMetadata
          title="OM - GFEL"
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
                <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>GFEL</Heading>
                <Text>Poster - <i>Writind & Design</i></Text>
                <Text  fontSize={['lg', null, 'xl']}mt={8}>A poster for the inaugural General Forum on Ethereum Localism in Portland, Oregon.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
              <Flex direction="column" gap={3} my={5}>
                <Image src="/assets/gfel_poster.png" alt="gfel poster" width="100%" height="100%"/>
              </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%']} gap={5} maxW="1200px" mx="auto">
                <Image src="/assets/gfel_poster-outside.jpeg" alt="gfel poster outside" width="100%" height="100%"/>
            </Flex>
          </Flex>

          <Footer />
  
        </main>
        </>
    )
  }
  