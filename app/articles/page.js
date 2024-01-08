import articles from "../data/articles";
import Footer from "../partials/footer";
import Header from "../partials/header";
import PostCard from "../ui/postCard";

export default function Articles() {
  return (
    <>
      <Header />
      <h1 className="text-5xl my-4 font-bold text-center mt-28">Blog</h1>
      <p className="text-center my-4 ">All posts</p>
      <section className="grid grid-cols-2 gap-2 mx-auto w-2/3">
        {articles.map((article) => (
          <PostCard
            key={article.id}
            title={article.title}
            description={article.content}
            imgSrc={article.image}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
