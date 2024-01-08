import ProfileIcon from "@/SVG/profileIcon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center px-16 pt-4 fixed top-0 pb-2 shadow bg-white">
      <section className="w-1/2 ">
        <h1 className=" text-5xl text-red-500 font-semibold ">Inner pieces</h1>
        <p className="ml-4 mt-2 text-sm ">
          Thoughts on Lifestyle & Mental Health
        </p>
      </section>
      <section className="flex items-center w-1/2 justify-center space-x-8">
        <Link className="hover:text-red-500 " href="/">
          Home
        </Link>
        <Link className="hover:text-red-500 " href="/articles">
          Articles
        </Link>
        <Link className="hover:text-red-500 " href="/about">
          About
        </Link>
        <Link className="text-semibold mt-4" href="/form/login">
          <ProfileIcon style="w-7 h-7 ml-2" />
          Log in{" "}
        </Link>
      </section>
    </header>
  );
}
