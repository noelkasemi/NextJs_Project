"use client";
import Header from "./partials/header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./partials/footer";
import ArticleFetcher from "./api/get";
import { useState } from "react";
import PostCard from "./ui/postCard";

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
              className="w-full md:w-1/2 "
              alt="Image 2"
            />
            <article className=" h-fit w-2/3 md:w-1/2 flex flex-col items-center mt-4">
              <p className="font-semibold font-serif">
               {` Explore the intricate connection between lifestyle choices and mental health as we delve into 'Inner Pieces.' This blog is a sanctuary for thoughtful reflections and insights, guiding you through a journey of self-discovery and well-being.`}
              </p>
            </article>
            <Link
              href="/pages/articles"
              className="hover:bg-black hover:text-white transition-transform outline outline-1 px-16 py-4 mt-12 md:mt-44"
            >
              All posts
            </Link>
          </article>
        </section>
        <h1 className="text-4xl font-semibold text-center items-center">
          Recent Articles
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:mx-auto w-full md:w-2/3 h-fit">
          {articles.map((article) => (
            <PostCard embed={article.content} key={article._id} />
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}
