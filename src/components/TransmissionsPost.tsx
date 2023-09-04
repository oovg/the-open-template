import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import style from './markdown-styles.module.css'
import { DateFormatter } from '@/components'

type Props = {
  title: string
  author: string
  slug: string
  excerpt: string
  date: string
  imagePath: string
}

export const TransmissionsPost = ({ title, author, slug, excerpt, date, imagePath }: Props) => (

    <Box mx="auto" w="100%" border="1px" borderColor="primary" p={8} mt={6}>
      
        <Text mb={6}><i><DateFormatter dateString={date} /></i></Text>
        <Link
          as={`/transmissions/${slug}`}
          href="/transmissions/[slug]"
        >
          <Image src={imagePath} alt="transmissions image" />
          <ReactMarkdown className={style.markdown}>{'# ' + title}</ReactMarkdown>
        </Link>
        <Text mb={6}><i>by</i> {author}</Text>
        <ReactMarkdown className={style.markdown}>{excerpt}</ReactMarkdown>
        <Link as={`/transmissions/${slug}`}
          href="/transmissions/[slug]"
          >
            Read More
          </Link>
      
    </Box>
)