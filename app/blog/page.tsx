import Container from '@/components/container';
import MoreStories from '@/components/more-stories';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Post from '@/interfaces/post';
import { fetchAllPosts } from '@/lib';

export default async function Home() {
  const allPosts: Post[] = await fetchAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
