import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
  title: string
  slug: string
}



export const SurveysPost = ({ content, title, slug }: Props) => (

    <Box className="max-w-2xl mx-auto" mb={12}>
      <Heading mb={6}>{title}</Heading>
      <Box
      >
      <ReactMarkdown>
      {content}
      </ReactMarkdown>
      </Box>
    </Box>
)