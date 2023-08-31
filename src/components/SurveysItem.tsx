import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/react'

type Props = {
  title: string
  slug: string
}



export const SurveysItem = ({ title, slug }: Props) => (

    <Box>
      {/* {slug.charAt(0) && (
        <Heading mb={6}>{slug.charAt(0)}</Heading>
      )} */}
      <Link href={'/surveys/#' + slug}>
        {title}
      </Link>
    </Box>
)