"use client";
import Header from "./partials/header";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "./ui/articleCard";
import Footer from "./partials/footer";
import ArticleFetcher from "./api/get";
import { useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  return (
    <section>
      <Header />
      <ArticleFetcher setArticles={setArticles} />
      <main className="mt-28 space-y-12">
        <section className="flex flex-col md:flex-row space-y-6 md:space-x-0 justify-between items-center">
          <Image
            src="/images/image.webp"
            width={550}
            height={550}
            className="w-full md:w-1/2 h-400"
            alt="Image"
          />
          <article className="flex flex-col w-full px-4 md:w-1/2 items-center">
            <h1 className="font-semibold text-3xl mb-4 font-serif">
              My Thoughts
            </h1>
            <Image
              src="/images/image2.webp"
              width={550}
              height={550}
              className="w-full md:w-1/2 cursor-pointer"
              alt="Image 2"
            />
            <article className=" h-fit w-2/3 md:w-1/2 flex flex-col items-center ">
              <h1 className="font-serif text-2xl mt-4 mb-2">
                {articles[0]?.title}
              </h1>
              <p
                dangerouslySetInnerHTML={{ __html: articles[0]?.content }}
                className="text-wrap h-[116px] truncate "
              ></p>
            </article>
            <Link
              href="/pages/articles"
              className="hover:bg-black hover:text-white transition-transform outline outline-1 px-16 py-4 mt-12 md:mt-44"
            >
              All posts
            </Link>
          </article>
        </section>
        <section className="space-y-12 flex flex-col items-center px-4">
          <h1 className="text-4xl font-semibold">Recent Articles</h1>
          {articles.map((article) => (
            <ArticleCard
              id={article._id}
              key={article._id}
              title={article.title}
              imgSrc={article.image}
              description={article.content}
            />
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}
