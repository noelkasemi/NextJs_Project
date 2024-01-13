"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ articleContent, id }) {
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
  const { imgSrc, title, description, content } =
    extractDataFromHTML(articleContent);

  const router = useRouter();
  //Encodes the title from %20(symbol for space) to - for the url
  const escapedValue = encodeURIComponent(title).replace(/%20/g, "-");

  return (
    <section
      key={id}
      className="shadow flex flex-col items-center md:items md:flex-row w-full py-4 px-2 md:p-0 md:w-3/5 md:space-x-12 h-[100]"
    >
      <Image
        onClick={() => router.push(`/pages/articles/${escapedValue}`)}
        src={imgSrc ? imgSrc : "/images/blank.jpg"}
        width="400"
        height="400"
        alt={title}
        className="max-w-4/5 max-h-full hover:brightness-90 cursor-pointer transition-transform"
      />

      <section className=" space-y-8 w-full ">
        <p className="text-sm ml-4 mt-4 md:m-0">May 1 2023 • 2 min</p>
        <Link
          href={`/pages/articles/${escapedValue}`}
          className="hover:text-red-500 cursor-pointer text-center md:text-left space-y-2 px-3"
        >
          <h1 className="text-2xl  font-serif ">{title}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className=" md:w-fit text-left"
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              maxHeight: "6em",
            }}
          ></p>
        </Link>
        <article className="w-full">
          <p className="text-sm border-t md:mt-24 pt-4 md:w-1/2">0 comments</p>
        </article>
      </section>
    </section>
  );
}
