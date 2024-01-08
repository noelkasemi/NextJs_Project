import Header from "./partials/header";
import Image from "next/image";
import articles from "./data/articles";
import Link from "next/link";
import ArticleCard from "./ui/articleCard"; // Adjust based on your actual file structure
import Footer from "./partials/footer";

export default function Home() {
  const [featuredArticle, ...otherArticles] = articles;

  return (
    <section>
      <Header />
      <main className="mt-28 space-y-12">
        <section className="flex justify-between items-center">
          <Image
            src="/image.webp"
            width={550}
            height={550}
            className="w-1/2 h-400"
            alt="Image"
          />
          <article className="flex flex-col w-1/2 items-center">
            <h1 className="font-semibold text-3xl mb-4 font-serif">
              My Thoughts
            </h1>
            <Image
              src="/image2.webp"
              width={550}
              height={550}
              className="w-1/2 cursor-pointer"
              alt="Image 2"
            />
            <article className="hover:text-red-400 h-fit w-1/2 flex flex-col items-center cursor-pointer">
              <h1 className="font-serif text-2xl mt-4 mb-2">
                {featuredArticle.title}
              </h1>
              <p className="text-wrap h-[116px] truncate ">
                {featuredArticle.content}
              </p>
            </article>
            <Link
              href="/articles"
              className="hover:bg-black hover:text-white transition-transform outline outline-1 px-16 py-4 mt-44"
            >
              All posts
            </Link>
          </article>
        </section>
        <section className="space-y-12 flex flex-col items-center">
          <h1 className="text-4xl font-semibold">Recent Articles</h1>
          {otherArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              imgSrc={article.image}
              description={article.content}
            />
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}
