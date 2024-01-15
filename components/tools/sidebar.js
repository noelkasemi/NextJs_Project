import ProfileIcon from "@/SVG/profileIcon";
import XIcon from "@/SVG/x";
import Link from "next/link";

export default function Sidebar({
  close,
  isAuthenticated,
  handleLogin,
  handleSignup,
  handleLogOut,
}) {
  return (
    <aside className=" w-2/3 bg-slate-200 absolute top-0 right-0 shadow z-[100] h-screen ">
      <section className="flex justify-between shadow border-b py-2 px-2 items-center">
        {isAuthenticated ? (
          <Link
            href={"/pages/profile"}
            className="flex flex-col ml-4 cursor-pointer "
          >
            <ProfileIcon style={"ml-4 mb-2"} />
            <button
              onClick={handleLogOut}
              className="outline outline-1 px-2 rounded hover:bg-slate-200"
            >
              Sign out
            </button>
          </Link>
        ) : (
          <section className="flex space-x-2">
            <Link className="text-semibold " href="/form/login">
              <button
                onClick={handleLogin}
                className="px-3 py-1 text-sm sm:text-md sm:px-6 sm:py-2 rounded bg-white hover:bg-slate-200 outline-1 outline font-semibold"
              >
                Login
              </button>
            </Link>
            <Link className="text-semibold " href="/form/signup">
              <button
                onClick={handleSignup}
                className="px-2 py-1 text-sm sm:px-4 sm:text-md sm:py-2 rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold"
              >
                Sign up
              </button>
            </Link>
          </section>
        )}

        <XIcon onClick={close} style={"cursor-pointer w-12 h-12 "} />
      </section>

      <ul className="px-4 flex flex-col space-y-4 pt-4 w-full items-center font-semibold text-xl ">
        <Link className="hover:bg-slate-300 p-2 rounded w-full" href="/">
          Home
        </Link>
        <Link
          className="hover:bg-slate-300 p-2 rounded w-full"
          href="/pages/articles"
        >
          Articles
        </Link>
        <Link
          className="hover:bg-slate-300 p-2 rounded w-full"
          href="/pages/about"
        >
          About
        </Link>
      </ul>
    </aside>
  );
}
