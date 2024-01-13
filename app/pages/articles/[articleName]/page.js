// pages/articles/[articleName].js
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/partials/header";
import Footer from "@/app/partials/footer";
import ProfileIcon from "@/SVG/profileIcon";
import Image from "next/image";

const FullArticle = ({ params }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/articles/title/${params.articleName}`
        );
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params.articleName]);

  if (!article) {
    return <div>Loading...</div>;
  }

    // Function to extract the title, image, and content from HTML
    const extractDataFromHTML = (html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
  
      // Extract image source
      const imgElement = doc.querySelector("img");
      const imgSrc = imgElement ? imgElement.src : null;
  
      // Extract the title (first h1)
      const titleElement = doc.querySelector("h1");
      const title = titleElement ? titleElement.textContent : "Untitled";
  
      // Extract content (excluding the first h1 if present)
      const contentElement = doc.querySelector("body");
      const content = contentElement ? contentElement.innerHTML : "";
  
      // Remove the title and image content from the description
      const description = content
        .replace(titleElement?.outerHTML || "", "")
        .replace(imgElement?.outerHTML || "", "");
  
      return { imgSrc, title, description, content };
    };
  
    // Destructure the values outside the function
    const { imgSrc, title, description, content } = extractDataFromHTML(article.content);

  const uppercasedTitle =
    title && title.charAt(0).toUpperCase() + title.slice(1);

    console.log(imgSrc, title, description)

  return (
    <>
      <Header />
      <section className="h-fit flex items-center justify-center mt-44  w-full px-4">
        <section className="w-full md:w-2/3 border flex flex-col relative h-full p-8">
          <article className="flex w-full items-center ">
            <ProfileIcon style="w-12 h-12 mx-1" />
            <p className="text-xl font-serif font-semibold">Admin</p>
            <p className="text-sm mx-4">May 1, 2023 • 2 min read</p>
          </article>
          <h1 className="text-3xl my-4">{uppercasedTitle || ''}</h1>
          <Image
            src={imgSrc ? imgSrc : "/images/blank.jpg"}
            alt={title}
            height="400"
            width="400"
            className="w-full"
          />
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="h-fit py-4"
          ></p>
          <p className="absolute bg-white bottom-0 border-t text-sm  pt-4 w-11/12">
            0 views
          </p>
        </section>
      </section>
      
      <Footer />
    </>
  );
};

export default FullArticle;
