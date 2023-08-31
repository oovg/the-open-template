import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Box, Flex, Heading, Text, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { PageMetadata, Rule } from '@/components'
import type PostType from '../../interfaces/post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import style from '../../components/markdown-styles.module.css';

type Props = {
    post: PostType
  }
  
  
  export default function Post({ post }: Props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDarkMode = colorMode === 'dark'
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

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
            <Heading color="bg">Open Transmissions</Heading>
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
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
        <Flex maxW="720px" mx="auto" direction="column" p={12}>
          <Box py={12}>
            <ReactMarkdown className={style.markdown}>{post.title}</ReactMarkdown>
            <Text mt={3}><i>by</i> {post.author}</Text>
          </Box>
          <Rule />
          <ReactMarkdown className={style.markdown}>
              {post.content}
          </ReactMarkdown>
        </Flex>
        )}
      </>
    )
  }
  
  type Params = {
    params: {
      slug: string
    }
  }
  
  export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
    ])
  
    return {
      props: {
        post: {
          ...post,
        },
      },
    }
  }
  
  export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
  }