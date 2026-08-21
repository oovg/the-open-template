import React, { useEffect } from 'react'
import {
  Flex,
  Link,
  Heading,
  Box,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Programme', href: '/programme' },
  { label: 'Outer Mind', href: 'https://mind.theopenmachine.net', isExternal: true },
  { label: 'Media Shop', href: 'https://media.theopenmachine.net', isExternal: true },
]

const linkStyles = {
  color: 'primary',
  position: 'relative' as const,
  display: 'inline-block',
  textDecoration: 'none',
  _hover: { textDecoration: 'none' },
  sx: {
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
  },
}

export const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const handleLinkClick = () => {
    setTimeout(() => {
      onClose()
    }, 150)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <Box position="sticky" top="0" zIndex={100} bg="bg" w="100%">
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        h="80px"
        p={5}
        bg="bg"
        borderBottom="1px solid"
        borderColor="primary"
        position="relative"
        zIndex={101}
        as="header"
      >
        <Heading
          color="primary"
          lineHeight="1em"
          fontSize={['xl', null, '2xl']}
          as="h1"
        >
          <Link
            href="/"
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
            The Open Machine
          </Link>
        </Heading>

        {/* Desktop Navigation */}
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={8}
          display={['none', null, 'flex']}
          textTransform="uppercase"
          letterSpacing="0.15em"
          fontSize={['xl', null, 'sm']}
          fontFamily="heading"
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              isExternal={item.isExternal}
              {...linkStyles}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            display="inline-block"
            border="1px solid"
            borderColor="primary"
            color="primary"
            px={4}
            py={2}
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
              bg: 'primary',
              color: 'bg',
            }}
            transition="background 0.2s ease, color 0.2s ease"
          >
            Donate
          </Link>
        </Flex>

        {/* Mobile Hamburger Button */}
        <IconButton
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          display={['flex', null, 'none']}
          variant="ghost"
          color="primary"
          _hover={{ bg: 'transparent' }}
          sx={{
            position: 'relative',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            transition: 'background-color 0.3s ease',
            _hover: {
              bg: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
            },
            '& svg': {
              width: '24px',
              height: '24px',
              transition: 'transform 0.5s ease-in-out',
            },
          }}
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        bg="bg"
        zIndex={99}
        transform={isOpen ? 'translateY(0)' : 'translateY(-100%)'}
        transition="transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)"
        paddingTop="120px"
        overflow="hidden"
        display={['block', null, 'none']}
        fontFamily="heading"
      >
        <Box as="nav" padding="0 20px" aria-label="Main navigation">
          {menuItems.map((item, index) => (
            <Box
              key={item.href}
              mb="5px"
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? 'translateY(0)' : 'translateY(20px)'}
              transition={`opacity 0.3s ease ${index * 0.1 + 0.1}s, transform 0.3s ease ${index * 0.1 + 0.1}s`}
              display="flex"
              justifyContent="flex-end"
            >
              <Link
                href={item.href}
                isExternal={item.isExternal}
                display="inline-block"
                padding="16px 20px"
                color="primary"
                fontWeight="500"
                position="relative"
                textAlign="right"
                textDecoration="none"
                _hover={{
                  textDecoration: 'none',
                }}
                onClick={handleLinkClick}
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
            </Box>
          ))}
          <Box
            mb="5px"
            opacity={isOpen ? 1 : 0}
            transform={isOpen ? 'translateY(0)' : 'translateY(20px)'}
            transition={`opacity 0.3s ease ${menuItems.length * 0.1 + 0.1}s, transform 0.3s ease ${menuItems.length * 0.1 + 0.1}s`}
            display="flex"
            justifyContent="flex-end"
          >
            <Link
              href="/donate"
              display="inline-block"
              margin="16px 20px"
              border="1px solid"
              borderColor="primary"
              color="primary"
              px={4}
              py={2}
              fontWeight="500"
              textAlign="right"
              textDecoration="none"
              _hover={{
                textDecoration: 'none',
                bg: 'primary',
                color: 'bg',
              }}
              onClick={handleLinkClick}
            >
              Donate
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Overlay */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.400"
          zIndex={98}
          onClick={onClose}
          opacity={isOpen ? 1 : 0}
          visibility={isOpen ? 'visible' : 'hidden'}
          transition="opacity 0.3s ease, visibility 0.3s ease"
        />
      )}
    </Box>
  )
}
