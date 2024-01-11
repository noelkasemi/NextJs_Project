import Pen from "@/SVG/pen";
import ProfileIcon from "@/SVG/profileIcon";
import Trash from "@/SVG/trash";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  title,
  description,
  imgSrc,
  id,
  icon = false,
  onTrashClick,
  isClicked,
  onCnfirmationClick,
  onUndoClick,
  onPenClick,
  isPenClicked,
  embed
}) {
  const uppercasedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <section
      key={id}
      className={` flex flex-col  w-full ${embed ? 'border' : 'border'} p-4 space-y-4 relative`}
    >
      {icon && !isPenClicked && !isClicked ? (
        <Pen
          onClick={onPenClick}
          style={
            "cursor-pointer absolute w-16 h-16 z-20 right-16 top-8 hover:bg-slate-300 p-2 rounded "
          }
        />
      ) : null}
      {icon && !isClicked && !isPenClicked ? (
        <Trash
          onClick={() => onTrashClick(id)}
          style="cursor-pointer absolute w-16 h-16 z-20 right-0 hover:bg-slate-300 p-2 rounded"
        />
      ) : icon && isClicked ? (
        <article className="absolute z-30 flex space-x-4 right-0 pr-2">
          <p
            onClick={() => onCnfirmationClick(id)}
            className="text-green-600 hover:text-green-800 text-xl font-bold cursor-pointer"
          >
            Confirm
          </p>{" "}
          <p
            onClick={onUndoClick}
            className="text-red-600 hover:text-red-800 text-xl font-bold cursor-pointer"
          >
            Undo
          </p>
        </article>
      ) : null}
      {title && description && imgSrc ? (
        <>
          {" "}
          <Image
            priority
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
          <Link
            href={`/pages/articles/${id}`}
            className="hover:text-red-500 cursor-pointer pb-12 space-y-4 h-[160px] overflow-hidden"
          >
            <h1 className="text-2xl font-sans">{uppercasedTitle}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="quill-editor"
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                maxHeight: "6em",
              }}
            ></p>
          </Link>
          <p className="absolute bg-white bottom-0 border-t text-sm  pt-4 w-11/12">
            0 views
          </p>{" "}
        </>
      ) : (
        <div
        className="border-none"
        dangerouslySetInnerHTML={{ __html: embed }}
      />
      )}
    </section>
  );
}
