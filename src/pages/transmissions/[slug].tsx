import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Box, Flex, Heading, Text, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { DateFormatter, Header, PageMetadata, Rule } from '@/components'
import type PostType from '../../interfaces/post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import style from '../../components/markdown-styles.module.css';
import remarkGfm from 'remark-gfm'

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
        <PageMetadata title={post.title} description={post.excerpt} image={ post.image !== '' ? post.image : '../assets/tOM_unfurl.jpg' } />
        <main>
          <Header /> 
        </main> 
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
        <Flex maxW="720px" mx="auto" direction="column" p={12}>
          <Flex maxW="720px" mx="auto" gap={6} align="start"><Link href="/transmissions"><Text textStyle="h2" as="h2" mb={6}>Open Transmissions</Text></Link></Flex>
          <Box py={12}>
            <Text><DateFormatter dateString={post.date}/></Text>
            <ReactMarkdown className={style.markdown}>{'# ' + post.title}</ReactMarkdown>
            <Text mt={3}><i>by</i> {post.author}</Text>
          </Box>
          <Rule />
          <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
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