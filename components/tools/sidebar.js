import ProfileIcon from "@/SVG/profileIcon";
import XIcon from "@/SVG/x";
import Link from "next/link";

export default function Sidebar({close}) {
  return (
    <aside className=" w-2/3 bg-slate-200 absolute top-0 right-0 shadow z-[100] h-screen ">
      <section className="flex justify-between shadow border-b py-2 px-2 items-center">
        <Link href={'/pages/profile'} className="flex flex-col ml-4 cursor-pointer ">
          <ProfileIcon style={""} />
          <p className="text-xl font-sans font-semibold">Admin</p>
        </Link>
     
          <XIcon onClick={close} style={'cursor-pointer w-12 h-12 '} />
  
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
