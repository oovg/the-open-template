import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import style from './markdown-styles.module.css';

type Props = {
  content: string
  title: string
  slug: string
}



export const SurveysPost = ({ content, title, slug }: Props) => (

    <Box maxW="2xl" mx="auto" mb={12}>
      <Heading mb={6}>{title}</Heading>
      <Box>
        <ReactMarkdown className={style.markdown}>
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
)