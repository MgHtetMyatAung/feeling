import { cutString, formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function PostItem({
  post,
}: {
  post: { title: string; description: string; id: number; createdAt: Date };
}) {
  return (
    <article className=" p-5 border rounded-md shadow-sm">
      <Link
        href={`/poems/${post.id}`}
        className=" text-lg font-semibold text-gray-800"
      >
        {post.title}
      </Link>
      <p className=" text-gray-500">{cutString(post.description, 100)}</p>
      <p className=" text-sm mt-2 text-blue-600">
        {formatDate(post.createdAt)}
      </p>
    </article>
  );
}

export default PostItem;
