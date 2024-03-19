import { formatDate, getFirstLine } from "@/lib/utils";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";
import DeleteBtn from "./DeleteBtn";

function PostItem({
  post,
  isOwn,
}: {
  post: { title: string; description: string; id: number; createdAt: Date };
  isOwn?: Boolean;
}) {
  return (
    <article className=" p-5 border rounded-md shadow-sm item-box relative">
      <Link
        href={`/poems/${post.id}`}
        className=" text-lg font-semibold text-gray-800"
      >
        {post.title}
      </Link>
      <p className=" text-gray-500 mt-2">{getFirstLine(post.description)}</p>
      <p className=" text-sm mt-2 text-[#FA7070]">
        {formatDate(post.createdAt)}
      </p>
      {isOwn && (
        <div className=" flex gap-2 items-center absolute bottom-3 right-3">
          <Link href={`/profile?id=${post.id}`}>
            <SquarePen size={18} />
          </Link>
          <DeleteBtn poemId={post.id} />
        </div>
      )}
    </article>
  );
}

export default PostItem;
