"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../styles/style.css";
import InfoIcon from "@/SVG/infoIcon";
import Tooltip from "@/components/tools/tooltip";
import { useState } from "react";
import SwitchButton from "@/components/tools/switch";

export default function ArticleForm({
  style,
  handleSubmit,
  handleTitleChange,
  handleContentChange,
  handleFileChange,
  handleEmbedChange,
  title,
  embed,
  content,
  submitButton,
  children,
  quillStyle,
  formStyle,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMediaHovered, setIsMediaHovered] = useState(false)
  const [enabled, setEnabled] = useState(false);
  return (
    <section className={`${style} flex items-center justify-center px-2`}>
      <form
        onSubmit={handleSubmit}
        className={`${formStyle} flex flex-col space-y-4 py-4  items-center shadow w-full h-fit rounded`}
      >
        <article className="w-full md:px-12 flex flex-col ">
          <label
            className="flex items-center text-sm font-semibold text-gray-800"
            htmlFor="title"
          >
            Title
            <Tooltip
            panelStyle={`bg-black px-2 py-1 rounded absolute w-[240px] `}
            show={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            buttonChildren={<InfoIcon style={`w-4 h-4 mt-2 ml-1`} />}
          >
            {isHovered && (
              <p className="text-white text-xs italic">
                {` "Avoid adding title if you're using embedded code" `}
              </p>
            )}
          </Tooltip>
          </label>
          <input
            required
            value={title || ""}
            onChange={handleTitleChange}
            placeholder="Your title"
            type="text"
            id="title"
            className="shadow rounded pl-4 border w-full"
          />
        </article>

        <article className="w-full md:px-12 flex flex-col">
          <label
            htmlFor="media"
            className="flex items-center text-sm font-semibold text-gray-800"
          >
            Media
            <Tooltip
            panelStyle={`bg-black px-2 py-1 rounded absolute w-[240px] `}
            show={isMediaHovered}
            onMouseEnter={() => setIsMediaHovered(true)}
            onMouseLeave={() => setIsMediaHovered(false)}
            buttonChildren={<InfoIcon style={`w-4 h-4 mt-2 ml-1`} />}
          >
            {isMediaHovered && (
              <p className="text-white text-xs italic">
                {` "Avoid adding images if you're using embedded code" `}
              </p>
            )}
          </Tooltip>
          </label>
          <input
            type="file"
            id="media"
            accept=".png, .jpg, .avif, .webp"
            onChange={handleFileChange}
            className="py-14 block cursor-pointer w-full mt-2 border-dashed border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-purple-400 focus:ring focus:ring-purple-300"
          />
        </article>
        {!enabled && (
          <article className="w-full px-1 md:px-12 flex flex-col h-fit">
            <label
              className="flex items-center text-sm font-semibold text-gray-800"
              htmlFor="content"
            >
              Content
            </label>
            {/* WHAT YOU SEE IS WHAT YOU GET */}
            <ReactQuill
              required
              value={content || ""}
              onChange={handleContentChange}
              placeholder="Your content"
              className={`quill-editor ${quillStyle} max-w-full text-wrap overflow-auto h-[250px]`}
            />
          </article>
        )}
        <article className="flex space-x-4 w-full items-start my-4 ml-2 md:ml-20">
          <SwitchButton enabled={enabled} setEnabled={setEnabled} onClick={() => enabled ? content = false : embed = false} />
          <Tooltip
            panelStyle={`bg-black px-2 py-1 rounded absolute w-[240px] `}
            show={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            buttonChildren={<InfoIcon style={`w-4 h-4 mt-2 ml-1`} />}
          >
            {isHovered && (
              <p className="text-white text-xs italic">
                {` "Use embedded code ( using this will disable content)" `}
              </p>
            )}
          </Tooltip>
        </article>

        {enabled && (
          <article className="w-full px-1 md:px-12 flex flex-col h-fit">
            <label
              className="flex items-center text-sm font-semibold text-gray-800"
              htmlFor="content"
            >
              Embedded code
            </label>

            <textarea
              required
              value={embed || ""}
              onChange={handleEmbedChange}
              placeholder="Paste your embedded code here..."
              className={`max-w-full text-wrap overflow-auto h-[250px] border border-black p-4`}
            />
          </article>
        )}

        {submitButton ? (
          <button
            className="outline-1 outline outline-red-500 text-red-500 bg-white hover:text-white hover:bg-red-500 px-8 py-2"
            type="submit"
          >
            Create
          </button>
        ) : (
          children
        )}
      </form>
    </section>
  );
}
