import { Box, Flex, Heading, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Further, Rule, Section, Matter, Matter2, Secret, Tags, Matter3, PageMetadata, TransmissionsPost } from '@/components'
import Post from '../interfaces/post'
import { getAllTransmissions } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Home ({ allPosts }: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <>
      <PageMetadata title="The Open Machine" description="the open machine is ..." />
      <main>
        <Flex
          direction="row"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
        >
          <Flex direction="column" alignItems="center" justifyContent="center" w={[ '100%', null, null, '50%']} minH="100vh" bgColor="primary" bgImg={`url("/assets/${isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'}")`} bgSize="cover" bgPosition="center">
            <Flex className="border" direction="column" alignItems="center" justifyContent="center" borderColor="bg" p={20}>
            <Heading color="bg" fontWeight="100" lineHeight="0.9em" fontSize={["4xl", null, "6xl"]}>The<br />Open<br />Machine</Heading>
            </Flex>
            <Secret />
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center" p={12} w={[ '100%', null, null, '50%']} color="primary"> 
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              mb={3}
            />
            <Heading my={9}>Table of Contents</Heading>
            <Rule />
            <Link href="#matters" color="primary" my={6} fontSize="2xl">Matters</Link>
            <Link href="/transmissions" color="primary" my={6} fontSize="2xl">Open Transmissions</Link>
            <Link href="/surveys" color="primary" my={6} fontSize="2xl">Surveys, 2068</Link>
            <Link href="#further" color="primary" my={6} fontSize="2xl">Further Reading</Link>
            <Rule />
          </Flex>
        </Flex>
      </main>
      <Section />
      <Tags />
      <Box p={12}>
        <Flex maxW="720px" mx="auto" gap={6}><Text textStyle="h2" as="h2">Open Transmisssions</Text></Flex>
        <Flex maxW="720px" mx="auto" direction="column" gap={6}>
          {allPosts.filter(post => post.matter.includes('transmissions')).map((post) => (
            <TransmissionsPost author={post.author} excerpt={post.excerpt} date={post.date} title={post.title} key={post.slug} slug={post.slug} />
          ))}
        </Flex>
      </Box>
      <Matter />
      <Matter2 />
      {/* <Matter3 /> */}
      <Further />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllTransmissions([
    'title',
    'matter',
    'author',
    'slug',
    'excerpt',
    'date',
  ])
  
  return {
    props: {
      allPosts,
    },
  }
}
