import Image from "next/image";

import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article className="rounded-lg bg-[#171D1F]">
      <header className=" rounded-t-lg bg-[#888] p-4">
        <figure className="m-0">
          <Image 
          src={post.cover} 
          alt={ `Imagem do post  ${ post.title }` } 
          width={800} 
          height={450} />
        </figure>
      </header>
      <section className="text-[#BCBCBC] p-4">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
