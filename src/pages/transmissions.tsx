import { Flex, Text, useColorMode } from '@chakra-ui/react'
import { Header, PageMetadata, TransmissionsPost } from '@/components'
import Post from '../interfaces/post'
import { getAllTransmissions } from '../lib/api'


type Props = {
  filteredPosts: Post[]
}


export default function Surveys ({ filteredPosts }: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <>
      <PageMetadata title="The Open Machine" description="the open machine is ..." />
      <main>
        <Header />    
      </main>
      <Flex maxW="720px" mx="auto" gap={6}><Text textStyle="h2" as="h2" mb={6}>Open Transmissions</Text></Flex>
      <Flex maxW="720px" mx="auto" direction="column">
        {filteredPosts.map((post) => (
          <TransmissionsPost title={post.title} key={post.slug} slug={post.slug} author={post.author} excerpt={post.excerpt} date={post.date} />
        ))}
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllTransmissions([
    'title',
    'matter',
    'slug',
    'author',
    'excerpt',
    'date',
  ])

  const filteredPosts = allPosts.filter(post => post.matter.includes('transmissions'))
  
  return {
    props: {
      filteredPosts,
    },
  }
}