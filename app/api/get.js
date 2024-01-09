import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const ArticleFetcher = ({ setArticles }) => {
  useEffect(() => {
    // Fetch articles from the database
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/articles');
        const data = await response.json();

        // Add UUIDs to articles
        const articlesWithUUIDs = data.map(article => ({
          ...article,
          id: uuidv4() // Generate a UUID for the article ID
        }));

        setArticles(articlesWithUUIDs);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [setArticles]);

  return null;
};

export default ArticleFetcher;