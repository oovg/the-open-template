import React, { useState } from 'react'
import { Box, Flex, Heading, Link, Text, Input, Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FarcasterIcon, XIcon } from '@/components'

const menuItems = [
  { label: 'What we do', href: '/#' },
  { label: 'Media', href: '/#media' },
  { label: 'Events', href: '/#events' },
  { label: 'Research', href: '/#research' },
  { label: 'Values', href: '/#values' },
]

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mockup - just show success message
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
    <Flex direction="row" alignItems="start" justifyContent="space-between" w="full" flexWrap="wrap" borderTop="1px solid" borderColor="midtone" py={10} px={[5, null, 10]}>

    <Flex direction="column" w={['100%', null, '33%']} alignItems={['center', null, 'start']} justifyContent="space-between" mb={[8, null, 0]}>
        <Heading fontSize={['xl', null, '2xl']} mb={5}>Navigate</Heading>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="space-between"
          gap={3}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              color="primary"
              position="relative"
              display="inline-block"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  bg: 'primary',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>
      
      <Flex direction="column" w={['100%', null, '33%']} alignItems={['center', null, 'start']} justifyContent="space-between" mb={[8, null, 0]}>
        <Heading fontSize={['xl', null, '2xl']} mb={5}>Newsletter</Heading>
        <Text mb={4} textAlign={['center', null, 'left']} fontSize="sm">
          Stay updated with our latest media, events, and research.
        </Text>
        <Box as="form" onSubmit={handleSubmit} w="100%" maxW="300px">
          <Flex direction="column" gap={3}>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border="1px solid"
              borderColor="primary"
              borderRadius="0"
              bg="bg"
              color="primary"
              _placeholder={{ color: 'primary', opacity: 0.5 }}
              _focus={{
                outline: 'none',
                borderColor: 'primary',
                boxShadow: 'none',
              }}
              _hover={{
                borderColor: 'primary',
              }}
              required
            />
            <Button
              type="submit"
              bg="primary"
              color="bg"
              borderRadius="0"
              fontWeight="normal"
              _hover={{
                bg: 'primary',
                opacity: 0.8,
              }}
              _active={{
                bg: 'primary',
                opacity: 0.9,
              }}
              transition="opacity 0.2s"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </Button>
            {submitted && (
              <Text fontSize="sm" color="primary" mt={2}>
                Thank you for subscribing!
              </Text>
            )}
          </Flex>
        </Box>
      </Flex>
     
      <Flex direction="column" w={['100%', null, '33%']} alignItems={['start', null, 'start']} justifyContent="space-between" mb={[8, null, 0]}>
        <Heading fontSize={['xl', null, '2xl']} mb={5}>Contact</Heading>
        <Flex direction="row" gap={3} alignItems="center">
          <Text>
          <Link href="mailto:theopenmachine@protonmail.com" color="primary" display="inline-flex" alignItems="center" gap={2}>
            <EmailIcon mb={2} />
            theopenmachine@protonmail.com
          </Link>
        </Text>
        </Flex>
        <Flex direction="row" gap={3} alignItems="center">
        <Text>
          <Link href="https://x.com/theopenmachine" color="primary" display="inline-flex" alignItems="center" gap={2}>
            <XIcon mb={2}/>
            @theopenmachine
          </Link>
        </Text>
        </Flex>
      </Flex>
    </Flex>

<Flex direction="row" alignItems="center" justifyContent="space-between" w="100%" borderTop="1px solid" borderColor="primary" py={5} px={[5, null, 10]}>
<Text fontSize="sm">CC BY-NC-SA 4.0</Text>
<Text fontSize="sm">Built from the underground</Text>
</Flex>

</>
  )
}
