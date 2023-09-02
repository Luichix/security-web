import Head from 'next/head'
import Container from '@/components/container'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import PostBody from '@/components/post-body'
import { fetchPost } from '@/lib'
import type PostType from '@/interfaces/post'

     
export default async function Post({ params }: { params: { slug: string } }) {

const post: PostType = await fetchPost(params.slug)
  return (
      <Container>
        <Header />
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
      </Container>
  )
}