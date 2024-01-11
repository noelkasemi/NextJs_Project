import Image from "next/image";
import Link from "next/link";


export default function ArticleCard({ title, imgSrc, description, key, id}) {
  return (
    <section key={key} className="shadow flex flex-col items-center md:items md:flex-row w-full py-4 px-2 md:p-0 md:w-3/5 md:space-x-12 h-[100]">
      <Image
        src={imgSrc}
        width="400"
        height="400"
        alt={title}
        className="w-2/3 "
      />
      <section className=" space-y-8 ">
        <p className="text-sm ml-4 mt-4 md:m-0">May 1 2023 • 2 min</p>
        <Link href={`/pages/articles/${id}`} className="hover:text-red-500 cursor-pointer space-y-2 px-3">
          <h1 className="text-2xl  font-serif ">{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }} className=" hover:text-red-500 truncate overflow-hidden w-fit h-24 text-wrap text-base ">
          </p>
        </Link>
        <article className="">
          <p className="text-sm border-t md:mt-24 pt-4">0 comments</p>
        </article>
      </section>
    </section>
  );
}
