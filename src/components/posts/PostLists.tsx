import React from "react";
import PostItem from "./PostItem";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export const dynamic = "force-dynamic";

async function PostLists({ limit }: { limit: number }) {
  const poems = await prisma.poem.findMany();

  return (
    <div className="container mx-auto">
      <div className=" flex items-center justify-between mt-5">
        {limit >= 10 && (
          <Link href={"/poems"} className=" block underline">
            See All
          </Link>
        )}
        <Link href={"/profile"}>
          <Plus />
        </Link>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
        {poems.slice(0, limit).map((poem: any) => (
          <PostItem key={poem.id} post={poem} />
        ))}
      </div>
    </div>
  );
}

export default PostLists;
