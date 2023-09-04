import markdownToHtml from '@/lib/markdownToHtml';
import { getPostBySlug } from '@/lib';

// Route

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return new Response(
    JSON.stringify({
      ...post,
      content,
    })
  );
}
