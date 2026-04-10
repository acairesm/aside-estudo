import { CardPost } from "@/components/CardPost";

async function getAllPosts(page: number) {
  const response = await fetch( `http://localhost:3042/posts?_page=${page}&_per_page=6` );
  if (!response.ok) {
    console.error('Erro ao buscar os posts');
    return [];
  }
  return response.json();
}

export default async function Home() {
  const { data: posts } = await getAllPosts(1);

  return (
    <main className="grid">
      {posts.map((post: any) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
