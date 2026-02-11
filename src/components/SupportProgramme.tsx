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

export const SupportProgramme = () => {
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
    <Flex
      id="support"
      direction="column"
      alignItems="start"
      justifyContent="start"
      w="100%"
      p={[5, null, 10]}
      bg="primary"
      color="bg"
    >
      <Heading fontWeight="900" fontSize={['2xl', null, '3xl']} mb={5}>
        Support Our 2026 Programme
      </Heading>
      <Box maxW="900px">
        <Text fontSize={['md', null, 'lg']} mb={5}>
          Help us achieve our programme goals for the year by donating now to our shared treasury. All funds go directly into producing research, media, and events. For more information on our plan for sustainability and how funds are used, send us an email at{' '}
          <Link href="mailto:theopenmachine@protonmail.com" textDecoration="underline">
            theopenmachine@protonmail.com
          </Link>
        </Text>

        <Box mb={5}>
          <Text fontSize={['md', null, 'lg']} mb={2}>
            To donate, please send ETH or any ERC-20 to:
          </Text>
          <Flex alignItems="center" gap={2} flexWrap="wrap">
            <Text fontSize={['lg', null, 'xl']} fontWeight="bold" fontFamily="mono">
              openmachine.eth
            </Text>
            <Button
              size="sm"
              variant="outline"
              borderColor="bg"
              color="bg"
              _hover={{ bg: 'bg', color: 'primary' }}
              onClick={() => copyToClipboard('openmachine.eth', 'ens')}
              leftIcon={copiedEns ? <CheckIcon /> : <CopyIcon />}
            >
              {copiedEns ? 'Copied!' : 'Copy'}
            </Button>
          </Flex>
        </Box>

        <Text fontSize="sm" mb={4}>
          <Text as="i">
            Note: All transactions are transparent on-chain and addresses that support us can look to receive special rights and benefits in the near future, as we setup our infrastructure further.
          </Text>
        </Text>

        <Box borderTop="1px solid" borderColor="bg" pt={4}>
          <Flex alignItems="center" gap={2} mb={2} flexWrap="wrap">
            <Text fontSize="sm">Full Address:</Text>
            <Text fontSize="sm" fontFamily="mono" wordBreak="break-all">
              0x814015957246ac2725A1a21e09211EeFF63a8e3f
            </Text>
            <Button
              size="xs"
              variant="outline"
              borderColor="bg"
              color="bg"
              _hover={{ bg: 'bg', color: 'primary' }}
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
    </Flex>
  )
}
