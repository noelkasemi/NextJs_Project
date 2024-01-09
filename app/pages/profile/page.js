"use client"
import React, { useState, useEffect } from "react";
import Footer from "@/app/partials/footer";
import Header from "@/app/partials/header";
import PostCard from "../../ui/postCard";


export default function Profile() {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
  
    // Function to fetch articles from the server
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    // Fetch articles on component mount
    useEffect(() => {
      fetchArticles();
    }, []);
  
    // Function to post a new article
    const postArticle = async () => {
      const formData = new FormData();
      formData.append("id", uuidv4());
      formData.append("title", title);
      formData.append("content", content);
      if (selectedFile) {
        formData.append("image", selectedFile);
      }
  
      try {
        const response = await fetch("http://localhost:3001/api/articles", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
  
        // After posting, fetch the updated list of articles
        fetchArticles();
  
        // Reset form fields
        setTitle("");
        setContent("");
        setSelectedFile(null);
      } catch (error) {
        console.error("Error posting article:", error);
      }
    };
  
    // Function to delete an article by its ID
    const deleteArticle = async (id) => {
      try {
        await fetch(`http://localhost:3001/api/articles/${id}`, {
          method: "DELETE",
        });
      
        // After deleting, fetch the updated list of articles
        fetchArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    };
    
  
    return (
        <section>
        <Header />
        <section className="mt-28">
          <h2 className="text-2xl font-bold mb-4 text-center">Article List</h2>
          <article className="grid grid-cols-2 gap-6 mx-auto w-2/3 ">
          
            {articles.map((article) => (
              <PostCard
              key={article.id}
              title={article.title}
              description={article.content}
              imgSrc={article.image}
              trash={true}
              onTrashClick={() => deleteArticle(article._id)}
            />
            ))}
          </article>
        </section>
  
        <Footer />
      </section>
    )
}