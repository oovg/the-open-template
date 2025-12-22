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
  
  export default function FriendsOfTheOutside() {
    return (
      <>
        <PageMetadata
          title="OM - Friends of the Outside"
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
                <Heading color="primary" fontWeight="100" fontSize={['xl', null, '2xl']} mb={5}>Friends of the Outside</Heading>
                <Heading color="primary" fontWeight="100" fontSize={['lg', null, 'xl']} mb={5}>Control, Substrates, and the Afterlife of DAOs</Heading>
                <Text>Bookley - <i>Writing, Design and Publishing</i></Text>
                <Flex direction="row" gap={3} mt={5} width="100%">
                  <Link href="https://zora.co/collect/oeth:0x2d17e1c913a616e30ff267afda30a69d9ad25343" target="_blank"><Text>Buy Now</Text></Link>
                </Flex>
                <Text  fontSize={['lg', null, 'xl']}mt={8}>Gonzo-style exploration of the relationship between DAOs and the outside world.</Text>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%', null, '60%']}>
              <Flex direction="column" gap={3} my={5}>
                <Image src="/assets/FotO_physical-outside.jpg" alt="friends of the outside cover" width="100%" height="100%"/>
              </Flex>
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="space-between" w={['100%']} gap={5} maxW="1200px" mx="auto">
                <Image src="/assets/FotO_covers-frontAndBack.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-3.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-5.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-8.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-11.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-13.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-16.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
                <Image src="/assets/FotO_spreads-18.jpg" alt="Ethereum Localism" width="100%" height="100%"/>
            </Flex>
          </Flex>
  
        </main>
        </>
    )
  }
  