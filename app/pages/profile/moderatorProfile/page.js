"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/partials/footer";
import Header from "@/app/partials/header";
import PostCard from "../../../ui/postCard";
import Dialog from "@/components/tools/dialog";
import ArticleForm from "@/app/form/articleForm/page";

export default function ModeratorProfile() {
  const [articles, setArticles] = useState([]);
  const [isClicked, setIsClicked] = useState(null);
  const [editedArticle, setEditedArticle] = useState(null);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

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

  //Takes the new values and updates them accordingly

  const postArticle = async (editedArticle, content) => {
    const data = {
      id: editedArticle,
      title: content,
      content: content,
    };

    try {
      const method = "PUT";
      const url = `http://localhost:3001/api/articles/${editedArticle}`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("PUT Request failed:", response.statusText);
        return;
      }

      const responseData = await response.json();

      console.log("PUT Request Response Data:", responseData);

      fetchArticles();
      setEditedArticle(null);
      setShow(false);
    } catch (error) {
      console.error("Error posting/updating article:", error);
    }
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    postArticle(editedArticle, content);
    setContent('')
  };

  return (
    <section>
      <Header />
      <section className="mt-28">
        <h2 className="text-2xl font-bold mb-4 text-center">All Articles</h2>
        <Dialog show={show} close={() => setShow(false)}>
          <ArticleForm
            content={content}
            handleContentChange={handleContentChange}
            handleSubmit={handleSubmit}
          >
            <article className="flex space-x-4 pr-2">
              <p
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                  setEditedArticle(null);
                  handleSubmit();
                }}
                className="text-green-600 hover:text-green-800 font-bold text-xl cursor-pointer"
              >
                Save
              </p>{" "}
              <p
                onClick={() => {
                  setShow(false);
                  setEditedArticle(null);
                }}
                className="text-red-600 hover:text-red-800 font-bold text-xl cursor-pointer"
              >
                Cancel
              </p>
            </article>
          </ArticleForm>
        </Dialog>
        <article className="grid sm:grid-cols-2 gap-6 md:mx-auto w-full md:w-2/3 ">
          {articles.map((article) => (
            <PostCard
            flag={true}
              embed={article.content}
              key={article._id}
              id={article._id}
              icon={true}
              isClicked={isClicked === article._id}
              isPenClicked={editedArticle === article._id}
              onTrashClick={() => setIsClicked(article._id)}
              onCnfirmationClick={() => {
                deleteArticle(article._id);
                setIsClicked(null);
              }}
              onUndoClick={() => {
                setIsClicked(null);
                setEditedArticle(null);
              }}
              onPenClick={() => {
                setEditedArticle(article._id);
                setShow(true);
              }}
            />
          ))}
        </article>
      </section>

      <Footer />
    </section>
  );
}
