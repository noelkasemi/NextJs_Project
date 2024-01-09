"use client";
import Footer from "@/app/partials/footer";
import Header from "@/app/partials/header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const postArticle = () => {
    const formData = new FormData();
    formData.append("id", uuidv4());
    formData.append("title", title);
    formData.append("content", content);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    fetch("http://localhost:3001/api/articles", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle();
  };

  return (
    <section>
      <Header />
      <h1 className="text-2xl font-bold font-serif mt-44 text-center mb-5">
        Write your own article
      </h1>
      <section className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 py-4 items-center border shadow w-1/2 h-fit rounded"
        >
          <label htmlFor="title">Title</label>
          <input
            value={title || ""}
            onChange={handleTitleChange}
            placeholder="Your title"
            type="text"
            id="title"
            className="shadow rounded pl-4 border w-[400px]"
          />
          <article className="w-full px-12 flex flex-col">
            <label
              htmlFor="media"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              Media
            </label>
            <input
              type="file"
              id="media"
              accept=".png, .jpg, .avif, .webp"
              onChange={handleFileChange}
              className="py-14 block cursor-pointer w-full mt-2 border-dashed border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-purple-400 focus:ring focus:ring-purple-300"
            />
          </article>
          <label htmlFor="content">Content</label>
          <textarea
            onChange={handleContentChange}
            value={content || ""}
            placeholder="content..."
            id="content"
            className="border py-4 px-4 rounded shadow"
            rows="13"
            cols="60"
          />
          <button
            className="outline-1 outline outline-red-500 text-red-500 bg-white hover:text-white hover:bg-red-500 px-8 py-2"
            type="submit"
          >
            Create
          </button>
        </form>
      </section>
      <Footer />
    </section>
  );
}
