import React, { useState } from 'react'
import {
  Flex,
  Heading,
  Link,
  Text,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import {
  PageMetadata,
  Footer,
} from '@/components'
import { Header } from '@/components/Header'

export default function Donate() {
  const toast = useToast()
  const [copiedEns, setCopiedEns] = useState(false)
  const [copiedFull, setCopiedFull] = useState(false)

  const copyToClipboard = (text: string, type: 'ens' | 'full') => {
    navigator.clipboard.writeText(text)
    if (type === 'ens') {
      setCopiedEns(true)
      setTimeout(() => setCopiedEns(false), 2000)
    } else {
      setCopiedFull(true)
      setTimeout(() => setCopiedFull(false), 2000)
    }
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Flex direction="column" alignItems="stretch" justifyContent="space-between" w="100%">
      <PageMetadata
        title="Donate // The Open Machine"
        description="The Open Machine is a non-profit research studio. All published media is freely available. Donate to help sustain our efforts."
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <Box as="main" w="100%">
        <Header />

        <Flex
          direction="column"
          alignItems="start"
          justifyContent="start"
          w="100%"
          p={[5, null, 10]}
          py={[10, null, 16]}
        >
          <Box maxW="900px" w="100%">
            <Heading color="primary" fontWeight="900" fontSize={['3xl', null, '4xl']} mb={4}>
              The Open Machine is free
            </Heading>
            <Text fontSize={['xl', null, '2xl']} mb={8}>
              We are sustained by generous donations
            </Text>
            <Text fontSize={['md', null, 'lg']} mb={10}>
              The Open Machine is a non-profit research studio. All published media is freely available. We are sustained by generous donations that help us keep our cultural engine running.
            </Text>

            {/* Open Collective */}
            <Box w="100%" mb={14}>
              <Heading color="primary" fontWeight="700" fontSize={['xl', null, '2xl']} mb={4}>
                Donate on Open Collective
              </Heading>
              <Text fontSize={['md', null, 'lg']} mb={6}>
                The Open Machine is fiscally sponsored by{' '}
                <Link
                  href="https://metagov.org/"
                  isExternal
                  textDecoration="underline"
                  textUnderlineOffset="4px"
                >
                  Metagov
                </Link>
                , a 501(c)(3) non-profit. Donors to our Open Collective account receive a receipt that allows 50% of their philanthropic contribution to be tax-deductible in participating jurisdictions.
              </Text>
              <Link
                href="https://opencollective.com/metagov/projects/open-machine/donate?interval=oneTime&amount=20&name=&legalName=&email="
                isExternal
                display="inline-block"
                border="1px solid"
                borderColor="primary"
                color="primary"
                px={5}
                py={3}
                textTransform="uppercase"
                letterSpacing="0.18em"
                fontSize="sm"
                fontFamily="heading"
                textDecoration="none"
                _hover={{
                  textDecoration: 'none',
                  bg: 'primary',
                  color: 'bg',
                }}
                transition="background 0.2s ease, color 0.2s ease"
              >
                Donate Now →
              </Link>
            </Box>

            {/* Ethereum */}
            <Box w="100%">
              <Heading color="primary" fontWeight="700" fontSize={['xl', null, '2xl']} mb={4}>
                Donate with Ethereum
              </Heading>
              <Text fontSize={['md', null, 'lg']} mb={6}>
                We accept USDC on Ethereum Mainnet. At the moment, donors using the Ethereum path do not get tax-deductible receipts, though we are working with our fiscal sponsor to enable this in the future.
              </Text>

              <Box mb={5}>
                <Text fontSize={['md', null, 'lg']} mb={2}>
                  Send USDC (or ETH / ERC-20) to:
                </Text>
                <Flex alignItems="center" gap={2} flexWrap="wrap">
                  <Text fontSize={['lg', null, 'xl']} fontWeight="bold" fontFamily="mono">
                    openmachine.eth
                  </Text>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor="primary"
                    color="primary"
                    borderRadius="0"
                    _hover={{ bg: 'primary', color: 'bg' }}
                    onClick={() => copyToClipboard('openmachine.eth', 'ens')}
                    leftIcon={copiedEns ? <CheckIcon /> : <CopyIcon />}
                  >
                    {copiedEns ? 'Copied!' : 'Copy'}
                  </Button>
                </Flex>
              </Box>

              <Box borderTop="1px solid" borderColor="midtone" pt={4}>
                <Flex alignItems="center" gap={2} mb={2} flexWrap="wrap">
                  <Text fontSize="sm">Full Address:</Text>
                  <Text fontSize="sm" fontFamily="mono" wordBreak="break-all">
                    0x814015957246ac2725A1a21e09211EeFF63a8e3f
                  </Text>
                  <Button
                    size="xs"
                    variant="outline"
                    borderColor="primary"
                    color="primary"
                    borderRadius="0"
                    _hover={{ bg: 'primary', color: 'bg' }}
                    onClick={() => copyToClipboard('0x814015957246ac2725A1a21e09211EeFF63a8e3f', 'full')}
                    leftIcon={copiedFull ? <CheckIcon /> : <CopyIcon />}
                  >
                    {copiedFull ? 'Copied!' : 'Copy'}
                  </Button>
                </Flex>
                <Text fontSize="sm" mb={1}>
                  Accepted chains: Mainnet, Arbitrum, Base, Optimism, Celo.
                </Text>
                <Text fontSize="sm" fontStyle="italic">
                  *Our address is a Safe Multisig, so ONLY send assets on these accepted chains.*
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Footer />
      </Box>
    </Flex>
  )
}
