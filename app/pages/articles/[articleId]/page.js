// pages/articles/[articleId].js
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/partials/header";
import Footer from "@/app/partials/footer";
import ProfileIcon from "@/SVG/profileIcon";
import Image from "next/image";

const FullArticle = ({ params }) => {
  const [article, setArticle] = useState([]);


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/articles/${params.articleId}`
        );
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params.articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }
  const uppercasedTitle =
    article.title?.charAt(0).toUpperCase() + article.title?.slice(1);

  return (
    <>
      <Header />
      <section className="h-fit flex items-center justify-center mt-44 w-full px-4">
        <section className="w-full md:w-2/3 border flex flex-col relative  p-8">
          <article className="flex w-full items-center ">
            <ProfileIcon style="w-12 h-12 mx-1" />
            <p className="text-xl font-serif font-semibold">Admin</p>
            <p className="text-sm mx-4">May 1 2023 • 2 min read</p>
          </article>
          <h1 className="text-3xl my-4">{uppercasedTitle}</h1>
          <Image
            src={article.image}
            alt={article.title}
            height="400"
            width="400"
            className="w-full"
          />
          <p
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="quill-editor"
          ></p>
          <p className="absolute bg-white bottom-4 border-t text-sm  pt-4 w-11/12">
            0 views
          </p>
        </section>
      </section>
      
      <Footer />
    </>
  );
};

export default FullArticle;
