import ProfileIcon from "@/SVG/profileIcon";
import Trash from "@/SVG/trash";
import Image from "next/image";

export default function PostCard({ title, description, imgSrc, key, trash = false, onTrashClick }) {
  return (
    <section key={key} className=" flex flex-col justify-between w-full border p-4 space-y-4 relative">
      {trash && <Trash onClick={onTrashClick} style={'cursor-pointer absolute w-16 h-16 z-20 right-0 hover:bg-slate-300 p-2 rounded'} />}
      <Image
        src={imgSrc}
        width="500"
        height="500"
        className="w-full  object-contain"
        alt={title}
      />
      <article className="flex items-center">
        <ProfileIcon style="w-8 h-7" />
        <article className="flex flex-col">
          <p>Admin</p>
          <p className="text-sm">May 1 2023 • 2 min</p>
        </article>
      </article>
      <article className="hover:text-red-500 cursor-pointer space-y-4 pb-12">
        <h1 className="text-2xl font-sans">{title}</h1>
        <p className="truncate w-fit h-24 text-wrap overflow-hidden">
          {description}
        </p>
      </article>

      <p className="absolute bottom-0 border-t text-sm  pt-4 w-11/12">0 views</p>
    </section>
  );
}
