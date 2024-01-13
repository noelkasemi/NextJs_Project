"use client";
import React from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor({ handleEdit, btnText, content, button }) {
  const [editorContent, setEditorContent] = useState("Welcome to TinyMCE!");

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
    if (handleEdit) {
      handleEdit(content); // Pass the content to the parent component
    }
  };

  return (
    <>
      <Editor
        apiKey="pnbw5qpnvb4u4mf103pal2e7mevm9o93i6kt80uuerkj5mh4"
        init={{
          plugins:
            "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Write your story :)"
        value={content}
        onEditorChange={handleEditorChange}
      />
      {button && (
        <button
          // onClick={handleSave}
          className="outline-1 outline outline-red-500 text-red-500 bg-white hover:text-white hover:bg-red-500 px-24 py-2 mt-4 w-auto mx-auto "
          type="submit"
        >
          {btnText}
        </button>
      )}
    </>
  );
}
