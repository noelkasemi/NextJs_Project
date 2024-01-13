"use client";
import TextEditor from "@/components/tools/editor";

export default function ArticleForm({
  style,
  content,
  handleSubmit,
  handleContentChange,
  children,
  formStyle,
  button,
}) {
  return (
    <section className={`${style} flex items-center justify-center px-2`}>
      <form
        onSubmit={handleSubmit}
        className={`${formStyle} flex flex-col space-y-4 py-4 items-center shadow w-full h-fit rounded`}
      >
        <article className="w-full px-1 md:px-12 flex flex-col h-fit">
          <label
            className="flex items-center text-sm ml-2 mb-2 font-semibold text-gray-800"
            htmlFor="content"
          >
            Content
          </label>
          <TextEditor
            handleEdit={handleContentChange}
            button={button}
            btnText={"Create"}
            content={content}
          />
        </article>
        {children}
      </form>
    </section>
  );
}
