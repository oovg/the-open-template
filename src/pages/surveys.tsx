import { Box, Flex, Heading, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { PageMetadata, SurveysItem, SurveysPost } from '@/components'
import ReactMarkdown from 'react-markdown'
import style from '../components/markdown-styles.module.css';
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'
import remarkGfm from 'remark-gfm'


type Props = {
  filteredPosts: Post[],
  uniqueLetters: Array<string>,
}


export default function Surveys ({ filteredPosts, uniqueLetters }: Props) {
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
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              bg="bg"
              mb={3}
              _hover={{
                background: "bg",
              }}
            />
            <Heading color="bg">Surveys, 2068</Heading>
            <Link href="/" color="bg" my={6} fontSize="2xl">Back Home</Link>
            
          </Flex>    
        </Flex>    
      </main>
      <Flex maxW="720px" mx="auto" direction="column" p={12} align="start" w="100%">
        <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
        &gt;“It is as if we were inside a giant octopus.”  
        – Timothy Morton  
        </ReactMarkdown>
        <Text>
          In the year 2068, a memetic and conceptual cartography is established, lore from the post-web and the fall out of the cryptographic coups presented in a polyphonic “mingle-mangle”*. By means unknown - perhaps magickal, perhaps technological - passages from the future appeared in inboxes of minor DAO contributors of the present day. Below are those compiled passages.
          If discovered, please send found entries to <Link isExternal href="theopenmachine@protonmail.com">theopenmachine@protonmail.com</Link>.  
          <br />
          <strong>The sender&apos;s term, not ours.</strong>
        </Text>
      </Flex>
      <Flex maxW="720px" mx="auto" direction="column" p={12} align="start" w="100%">
        {uniqueLetters.map((character) => (
          <Box key={character}>
            <Heading>
                  {character}
                </Heading>
            { filteredPosts.filter(post => post.matter.includes('surveys')).map((post) => (
              character === post.slug.charAt(0) &&
                <Box key={post.slug} my={3}>
                  <SurveysItem title={post.title} slug={post.slug} />
                </Box>
              ))} 
              </Box>
        ))}
      </Flex>
      <Flex maxW="720px" mx="auto" direction="column" p={12}>
        {filteredPosts.map((post) => (
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
  
  const letter = allPosts.filter(post => post.matter.includes('surveys')).map((filteredPost) => filteredPost.slug.charAt(0))
  const uniqueLetters = Array.from(new Set(letter));
  const filteredPosts = allPosts.filter(post => post.matter.includes('surveys'))
  
  return {
    props: {
      filteredPosts,
      uniqueLetters,
    },
  }
}

