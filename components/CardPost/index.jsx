import Image from "next/image";

import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article className="w-[calc(50%-12px)] rounded-lg bg-[#171D1F]">
      <header className=" rounded-t-lg bg-[#888] p-4">
        <figure className="m-0">
          <Image
            src={post.cover}
            alt={`Imagem do post  ${post.title}`}
            width={800}
            height={450}
          />
        </figure>
      </header>
      <section className="text-[#BCBCBC] p-4 flex flex-col gap-2">
        <h2 className="text-[18px] not-italic font-semibold leading-[150%] m-0 ">
          {post.title}
        </h2>
        <p className="text-[15px] not-italic font-normal  leading-[150%] m-0 flex-grow">{post.body}</p>
      </section>
      <footer className="p-4">
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
