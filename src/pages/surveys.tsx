import { Box, Flex, Heading, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import { Header, PageMetadata, SurveysItem, SurveysPost } from '@/components'
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
        <Header />   
      </main>
      <Flex maxW="720px" mx="auto" direction="column" p={12} align="start" w="100%">
        <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
        &gt;“It is as if we were inside a giant octopus.”  
        – Timothy Morton  
        </ReactMarkdown>
        <Text>
          In the year 2068, a memetic and conceptual cartography is established, lore from the post-web and the fall out of the cryptographic coups presented in a polyphonic “mingle-mangle”*. By means unknown - perhaps magickal, perhaps technological - passages from the future appeared in inboxes of lowly net beings of the present day. Below are those compiled passages.
          <br /><br />
          If discovered, please send found entries to <Link isExternal href="theopenmachine@protonmail.com">theopenmachine@protonmail.com</Link>.  
          <br /><br />
          *The sender&apos;s term, not ours.
          <br /><br />
        </Text>
        <Text textStyle="paragraph">
          <Image src="../assets/octopus.jpg" alt="Octopus" />
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

