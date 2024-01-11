"use client";
import ArticleFetcher from "@/app/api/get";
import Footer from "../../partials/footer";
import Header from "../../partials/header";
import PostCard from "../../ui/postCard";
import Link from "next/link";
import { useState } from "react";

export default function Articles() {
  const [allArticles, setAllArticles] = useState("");
  const data = [...allArticles];

  return (
    <>
      <ArticleFetcher setArticles={setAllArticles} />
      <Header />
      <section className="mt-28 w-full flex items-center justify-center">
        <section className=" flex justify-between my-4 w-full md:w-2/3 px-4 items-center">
          <article>
            <h1 className=" text-5xl font-bold">Blog</h1>
            <p className="  ">All posts</p>
          </article>
          <Link
            href="/pages/articles/create-article"
            className="outline outline-1 outline-red-500 hover:text-white hover:bg-red-500 text-red-500 px-8 py-2"
          >
            Create your article
          </Link>
        </section>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:mx-auto w-full md:w-2/3 h-fit">
        {data.map((article) => (
          <PostCard
          embed={article.content}
            id={article._id}
            key={article._id}
            title={article.title}
            description={article.content}
            imgSrc={article.image}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
