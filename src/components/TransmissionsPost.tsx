import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
  title: string
  author: string
  slug: string
}

export const TransmissionsPost = ({ title, author, slug }: Props) => (

    <Box maxW="2xl" mx="auto" mb={12}>
      <Link
        as={`/transmissions/${slug}`}
        href="/transmissions/[slug]"
      >
        <Heading mb={6}>{title}</Heading>
        <Text>{author}</Text>
      </Link>
    </Box>
)