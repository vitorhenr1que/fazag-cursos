'use client'
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css"; // Estilos do Quill

// Importação dinâmica para evitar problemas no SSR (erro de não conseguir encontrar o document.)

const modules = { // Quill editor
    toolbar: [
      [{ size: [] }],
    //  [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      
   //   [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
   //   [{ list: "ordered" }, { list: "bullet" }],
   //   ["link", "image"],
   //  [{ color: ["red", "#785412"] }],
    //  [{ background: ["red", "#785412"] }]
    ]
  };

  const formats = [ //Quill editor
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
  //  "image",
  //  "background",
    "align",
    "size",
    "font"
  ];

export function QuillEditor({ value, onChange, dirty, setDirty }) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);


    return (
        <ReactQuill
        onKeyDown={() => {if(dirty === false){setDirty(true)}}}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder='Digite sua redação aqui...'
        
      />
    );
  }