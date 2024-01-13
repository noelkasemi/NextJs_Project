"use client";

import { useRouter } from "next/navigation";
import Pen from "@/SVG/pen";
import ProfileIcon from "@/SVG/profileIcon";
import Trash from "@/SVG/trash";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  embed,
  id,
  icon = false,
  onTrashClick,
  isClicked,
  onCnfirmationClick,
  onUndoClick,
  onPenClick,
  isPenClicked,
  style
}) {
  const router = useRouter();

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
  const { imgSrc, title, description, content } = extractDataFromHTML(embed);

  // Uppercases the first letter of the title
  const uppercasedTitle =
    title && title.charAt(0).toUpperCase() + title.slice(1);

    //Encodes the title from %20(symbol for space) to - for the url
    const escapedValue = encodeURIComponent(title).replace(/%20/g, '-');

  return (
    <section
      key={id}
      className={` flex flex-col ${style}  w-full ${
        embed ? "border" : "border"
      } p-4 space-y-4 relative`}
    >
      {icon && !isPenClicked && !isClicked ? (
        <Pen
          onClick={onPenClick}
          style={
            "cursor-pointer absolute w-16 h-16 z-20 right-16 top-8 hover:bg-slate-300 p-2 rounded "
          }
        />
      ) : null}
      {icon && !isClicked && !isPenClicked ? (
        <Trash
          onClick={() => onTrashClick(id)}
          style="cursor-pointer absolute w-16 h-16 z-20 right-0 hover:bg-slate-300 p-2 rounded"
        />
      ) : icon && isClicked ? (
        <article className="absolute z-30 flex space-x-4 right-0 pr-2">
          <p
            onClick={() => onCnfirmationClick(id)}
            className="text-green-600 hover:text-green-800 text-xl font-bold cursor-pointer"
          >
            Confirm
          </p>{" "}
          <p
            onClick={onUndoClick}
            className="text-red-600 hover:text-red-800 text-xl font-bold cursor-pointer"
          >
            Undo
          </p>
        </article>
      ) : null}
      <>
        {" "}
        <Image
          onClick={() => router.push(`/pages/articles/${escapedValue}`)}
          priority
          src={imgSrc ? imgSrc : "/images/blank.jpg"}
          width="500"
          height="500"
          className="w-full hover:brightness-90 cursor-pointer transition-transform object-contain"
          alt={title}
        />
        <article className="flex items-center">
          <ProfileIcon style="w-8 h-7" />
          <article className="flex flex-col">
            <p>Admin</p>
            <p className="text-sm">May 1 2023 • 2 min</p>
          </article>
        </article>
        <Link
          href={`/pages/articles/${escapedValue}`}
          className="hover:text-red-500 cursor-pointer pb-12 space-y-4 h-[160px] overflow-hidden"
        >
          <h1 className="text-2xl font-sans">{uppercasedTitle || ""}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="quill-editor mb-4"
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              maxHeight: "6em",
            }}
          ></p>
        </Link>
        <p className="absolute bg-white bottom-0 text-sm pb-2 pt-4 w-11/12">
          <p className="border-t py-2"></p>
          0 views

        </p>{" "}
      </>
    </section>
  );
}
