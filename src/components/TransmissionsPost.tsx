import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import style from './markdown-styles.module.css'

type Props = {
  title: string
  author: string
  slug: string
}

export const TransmissionsPost = ({ title, author, slug }: Props) => (

    <Box mx="auto" w="100%" border="1px" borderColor="primary" p={8} mt={6}>
      <Link
        as={`/transmissions/${slug}`}
        href="/transmissions/[slug]"
      >
        <ReactMarkdown className={style.markdown}>{title}</ReactMarkdown>
        <Text><i>by</i> {author}</Text>
      </Link>
    </Box>
)