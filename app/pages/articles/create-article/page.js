"use client";
import ArticleForm from "@/app/form/articleForm/page";
import Footer from "@/app/partials/footer";
import Header from "@/app/partials/header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Takes the values and updates them accordingly
  const postArticle = () => {
    const formData = new FormData();
    formData.append("id", uuidv4());
    formData.append("title", title);
    formData.append("content", content);

    fetch("http://localhost:3001/api/articles", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  };

  const handleContentChange = (value) => {
    setContent(value);
    setTitle(value)
  };
  

  //Submits the form and also clears it
  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle();;
    setContent("");
    Swal.fire({
      icon: 'success',
      title: 'Article Created!',
      text: 'Your article has been successfully created.',
    });
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
        handleSubmit={handleSubmit}
        button={true}
        handleContentChange={handleContentChange}
      />
      <Footer />
    </section>
  );
}
