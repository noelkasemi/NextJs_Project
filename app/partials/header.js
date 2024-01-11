"use client";
import Lines from "@/SVG/lines";
import ProfileIcon from "@/SVG/profileIcon";
import Sidebar from "@/components/tools/sidebar";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="flex w-full justify-between items-center px-4 lg:px-16 pt-4 fixed z-50 top-0 pb-2 shadow bg-white">
      <section className="w-full ">
        <h1 className=" text-3xl md:text-5xl  text-red-500 font-semibold ">
          Inner pieces
        </h1>
        <p className=" md:ml-4 md:mt-2 text-sm ">
          Thoughts on Lifestyle & Mental Health
        </p>
      </section>
      <section className="hidden lg:flex items-center w-1/2 justify-center space-x-8">
        <Link className="hover:text-red-500 " href="/">
          Home
        </Link>
        <Link className="hover:text-red-500 " href="/pages/articles">
          Articles
        </Link>
        <Link className="hover:text-red-500 " href="/pages/about">
          About
        </Link>
        <Link className="text-semibold mt-4" href="/pages/profile">
          <ProfileIcon style="w-7 h-7 ml-2" />
          Admin{" "}
        </Link>
      </section>
      <Lines
        onClick={() => setShow(true)}
        style={`lg:hidden block w-10 h-10 cursor-pointer`}
      />
      {show && <Sidebar close={() => setShow(false)} />}
    </header>
  );
}
