import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMceApiKey}
            initialValue={defaultValue}
            init={{
              height: 300,  // Height kam kar diya for better mobile experience
              menubar: false, // Mobile ke liye menubar hata diya
              plugins: [
                "autolink", "lists", "link", "charmap", "preview", "anchor",
                "searchreplace", "visualblocks", "fullscreen",
                "insertdatetime", "media", "table", "code", "help", "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code preview",
              toolbar_mode: "sliding",  // 🔥 Mobile ke liye sliding toolbar mode
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
              branding: false, // TinyMCE branding text hata diya
              width: "100%", // container ka width full
              resize: true, // user apne hisab se resize kar sake editor ko
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
