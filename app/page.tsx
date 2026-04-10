import { CardPost } from "@/components/CardPost";

async function getAllPosts(page: number) {
  const response = await fetch( `http://localhost:3042/posts?_page=${page}&_per_page=6` );
  if (!response.ok) {
    console.error('Erro ao buscar os posts');
    return [];
  }
  return response.json();
}

export default async function Home({searchParams}: {searchParams: {page: string}}) {
  const page = parseInt(searchParams.page) || 1;
  const { data: posts, prev, next } = await getAllPosts(page);

  return (
    <main className="grid">
      {posts.map((post: any) => (
        <CardPost key={post.id} post={post} />
      ))}
      {prev && <a href={`/?page=${prev}`}>Anterior</a>}
      {next && <a href={`/?page=${next}`}>Próximo</a>}
    </main>
  );
}
