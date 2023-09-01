import { Flex, Heading, IconButton, Link, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { PageMetadata, TransmissionsPost } from '@/components'
import Post from '../interfaces/post'
import { getAllTransmissions } from '../lib/api'


type Props = {
  allPosts: Post[]
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
          <Flex direction="column" alignItems="center" justifyContent="center" w={'100%'} minH="25vh" p={25} bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
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
            <Heading color="bg">Open Transmissions</Heading>
            <Link href="/" color="bg" my={6} fontSize="2xl">Back Home</Link>
          </Flex>    
        </Flex>    
      </main>
      <Flex maxW="720px" mx="auto" direction="column">
        {allPosts.filter(post => post.matter.includes('transmissions')).map((post) => (
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
  
  return {
    props: {
      allPosts,
    },
  }
}