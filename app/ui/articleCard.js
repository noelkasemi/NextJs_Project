import Image from "next/image";

export default function ArticleCard({ title, imgSrc, description, key }) {
  return (
    <section key={key} className="flex w-3/5 space-x-12 h-[100]">
      <Image
        src={imgSrc}
        width="400"
        height="400"
        alt={title}
        className="w-2/3"
      />
      <section className=" space-y-8 ">
        <p className="text-sm">May 1 2023 • 2 min</p>
        <article className="hover:text-red-500 cursor-pointer space-y-2">
          <h1 className="text-2xl  font-serif ">{title}</h1>
          <p className="truncate overflow-hidden w-fit h-24 text-wrap text-base ">
            {description}
          </p>
        </article>
        <article className="">
          <p className="text-sm border-t mt-24 pt-4">0 comments</p>
        </article>
      </section>
    </section>
  );
}
