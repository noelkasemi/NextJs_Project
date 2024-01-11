"use client";
import ArticleForm from "@/app/form/articleForm/page";
import Footer from "@/app/partials/footer";
import Header from "@/app/partials/header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [embeddedContent, setEmbeddedContent] = useState("");

  //Takes the values and updates them accordingly
  const postArticle = () => {
    const formData = new FormData();
    formData.append("id", uuidv4());
    formData.append("title", title);
    formData.append("content", content || embeddedContent);
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

  const handleContentChange = (value) => {
    setContent(value);
    
  };
  
  const handleEmbeddedChange = (e) => {
    setEmbeddedContent(e.target.value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  //Submits the form and also clears it
  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle();
    setTitle("");
    setContent("");
    setSelectedFile("");
  };

  return (
    <section>
      <Header />
      <h1 className="text-2xl font-bold font-serif mt-44 text-center mb-5">
        Write your own article
      </h1>
      <ArticleForm
        submitButton={true}
        title={title}
        content={content}
        embed={embeddedContent}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleFileChange={handleFileChange}
        handleContentChange={handleContentChange}
        handleEmbedChange={handleEmbeddedChange}
      />
      <Footer />
    </section>
  );
}
