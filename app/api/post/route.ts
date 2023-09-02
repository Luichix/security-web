import { getAllPosts } from "@/lib";

export async function GET(request: Request) {

    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
      ])
  
  return new Response(JSON.stringify( allPosts));


}