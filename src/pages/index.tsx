import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import {
  Section,
  MatterSubstrates,
  MatterInvertedCity,
  MatterEthLocalism,
  Secret,
  PageMetadata,
  TransmissionsPost,
} from '@/components'
import Post from '../interfaces/post'
import { getAllTransmissions } from '../lib/api'

type Props = {
  filteredPosts: Post[]
}

export default function Home({ filteredPosts }: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <>
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/tOM_unfurl.jpg"
      />
      <main>
        <Flex
          direction="row"
          textAlign="center"
          borderRadius="xl"
          background="bg"
          color="primary"
          flexWrap="wrap"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w={['100%', null, null, '50%']}
            minH="100vh"
            bgColor="primary"
            bgImg={`url("/assets/${
              isDarkMode ? 'bg_pointDark.png' : 'bg_pointLight.png'
            }")`}
            bgSize="cover"
            bgPosition="center"
          >
            <Flex
              className="border"
              direction="column"
              alignItems="center"
              justifyContent="center"
              borderColor="bg"
              p={20}
            >
              <Heading
                color="bg"
                fontWeight="100"
                lineHeight="0.9em"
                fontSize={['4xl', null, '6xl']}
              >
                The
                <br />
                Open
                <br />
                Machine
              </Heading>
            </Flex>
            <Secret />
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={12}
            w={['100%', null, null, '50%']}
            color="primary"
          >
            <IconButton
              w="fit-content"
              mx="auto"
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              mb={3}
            />
            <Link
              href="#intro"
              color="primary"
              my={6}
              fontSize="2xl"
              textStyle="h2"
            >
              Collaborations
            </Link>
            <Link
              href="/matters"
              color="primary"
              my={6}
              fontSize="2xl"
              textStyle="h2"
            >
              Matters
            </Link>
            <Link
              href="/transmissions"
              color="primary"
              my={6}
              fontSize="2xl"
              textStyle="h2"
            >
              Open Transmissions
            </Link>
            <Link
              href="/surveys"
              color="primary"
              my={6}
              fontSize="2xl"
              textStyle="h2"
            >
              Surveys, 2068
            </Link>
          </Flex>
        </Flex>
      </main>
      <Box pt={20} id="intro">
        <Section />
      </Box>
      <Box p={12}>
        <Flex
          maxW="800px"
          mx="auto"
          gap={6}
          align="center"
          justify="space-between"
        >
          <Text textStyle="h2" as="h2" mb={6}>
            Open Transmissions
          </Text>
          <Link href="/transmissions">View All</Link>
        </Flex>
        <Flex maxW="800px" mx="auto" direction="column" gap={6}>
          {filteredPosts.map((post) => (
            <TransmissionsPost
              author={post.author}
              excerpt={post.excerpt}
              date={post.date}
              title={post.title}
              key={post.slug}
              slug={post.slug}
              imagePath={post.imagePath}
            />
          ))}
        </Flex>
        <Flex maxW="800px" mx="auto" my={12}>
          <Text as="h2" textStyle="h2">
            Matters
          </Text>
        </Flex>
        <MatterEthLocalism />
        <MatterInvertedCity />
        <MatterSubstrates />
      </Box>
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
    'imagePath',
  ])

  const filteredPosts = allPosts
    .filter((post) => post.matter.includes('transmissions'))
    .slice(0, 3)

  return {
    props: {
      filteredPosts,
    },
  }
}
