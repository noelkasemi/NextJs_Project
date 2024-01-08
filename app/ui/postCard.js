import ProfileIcon from "@/SVG/profileIcon";
import Image from "next/image";

export default function PostCard({ title, description, imgSrc, key }) {
  return (
    <section key={key} className="w-full border p-4 space-y-4">
      <Image
        src={imgSrc}
        width="500"
        height="500"
        className="w-[200] h-[200] object-contain"
        alt={title}
      />
      <article className="flex items-center">
        <ProfileIcon style="w-8 h-7" />
        <article className="flex flex-col">
          <p>Admin</p>
          <p className="text-sm">May 1 2023 • 2 min</p>
        </article>
      </article>
      <article className="hover:text-red-500 cursor-pointer space-y-4">
        <h1 className="text-2xl font-sans">{title}</h1>
        <p className="truncate w-fit h-24 text-wrap overflow-hidden">
          {description}
        </p>
      </article>

      <p className="border-t text-sm mt-10 pt-4">0 views</p>
    </section>
  );
}
