import { Box, Flex, Heading, IconButton, Link, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { PageMetadata, SurveysPost } from '@/components'
import markdownToHtml from '../lib/markdownToHtml'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'


type Props = {
  allPosts: Post[]
  postContent: string
}


export default function Surveys ({ allPosts }: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <>
      <PageMetadata title="The Open Machine" description="the open machine is ..." />
      <main>
        <Flex
          direction="column"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
          w="100%"
          mb={12}
        >
          <Flex direction="column" alignItems="center" justifyContent="center" w={[ '100%', null, '100%']} minH="25vh" p={25} bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
            <Heading color="bg">Surveys of 2068</Heading>
            <Link href="/" color="bg" my={6} fontSize="2xl">Back Home</Link>
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              bg="bg"
              mt={3}
              _hover={{
                background: "bg",
              }}
            />
          </Flex>    
        </Flex>    
      </main>
      <Flex maxW="720px" mx="auto" direction="column">
        {allPosts.map((post) => (
          <SurveysPost content={post.content} title={post.title} key={post.slug} slug={post.slug} />
        ))}
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'matter',
    'slug',
    'content',
  ])
  
  const postContent = allPosts.map((post) => markdownToHtml(post.content))
  
  return {
    props: {
      allPosts,
    },
  }
}