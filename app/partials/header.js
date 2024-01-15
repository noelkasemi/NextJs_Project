"use client";
import Lines from "@/SVG/lines";
import ProfileIcon from "@/SVG/profileIcon";
import Sidebar from "@/components/tools/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header({ profile = true }) {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for authentication status
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    router.push("/");
  };

  //Gets the user data from local storage
  const loggedInUserString = localStorage.getItem("loggedInUser");
  // Parses the object to a string
  const loggedInUser = loggedInUserString
    ? JSON.parse(loggedInUserString)
    : null;
  // Destructure the users' data into role and the redirect link with a default value
  const { role, redirect = "/" } = loggedInUser || {
    role: null,
    redirect: null,
  };

  return (
    <header className="flex w-full justify-between items-center px-4 lg:px-16 pt-4 fixed z-50 top-0 pb-2 shadow bg-white">
      <section className="w-full ">
        <Link
          href={"/"}
          className="cursor-pointer text-3xl md:text-5xl  text-red-500 font-semibold "
        >
          Inner pieces
        </Link>
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
        {profile && (
          <section className="w-full space-x-4">
            {isAuthenticated && redirect ? (
              <article className="flex items-center space-x-5">
                <Link href={redirect}>
                  <ProfileIcon style="w-7 h-7 ml-2" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="outline outline-1 px-2 rounded hover:bg-slate-200"
                >
                  Sign out
                </button>
              </article>
            ) : (
              <>
                <Link className="text-semibold " href="/form/login">
                  <button
                    onClick={handleLogin}
                    className="px-6 py-2 rounded bg-white hover:bg-slate-200 outline-1 outline font-semibold"
                  >
                    Login
                  </button>
                </Link>
                <Link className="text-semibold " href="/form/signup">
                  <button
                    onClick={handleSignup}
                    className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold"
                  >
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </section>
        )}
      </section>
      <Lines
        onClick={() => setShow(true)}
        style={`lg:hidden block w-10 h-10 cursor-pointer`}
      />
      {show && (
        <Sidebar
          isAuthenticated={isAuthenticated}
        handleLogOut={handleLogout}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
          close={() => setShow(false)}
        />
      )}
    </header>
  );
}
