"use client";

import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

function CopyBtn({ id }: { id: number }) {
  const copyToClipBoard = () => {
    let currentUrl = `https://feeling-lemon.vercel.app/poems/${id}/message`;
    let isCopy = copy(currentUrl);
    if (isCopy) {
      toast.success("Copy to clipboard !");
    }
  };
  return (
    <div className="absolute bottom-10">
      <Button
        className=" bg-red-500 hover:bg-red-600 flex gap-2 items-center relative"
        onClick={copyToClipBoard}
      >
        {" "}
        <Copy size={18} color="#fff" />
        Copy share message url
      </Button>
    </div>
  );
}

export default CopyBtn;
