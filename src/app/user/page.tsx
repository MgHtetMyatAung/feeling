import PostItem from "@/components/posts/PostItem";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { SignOutButton, auth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import React from "react";

export default async function UserProfile() {
  const { userId } = auth();
  const poems = await prisma.poem.findMany();
  const ownPoems = poems.filter((poem) => poem.authorId == userId);
  // console.log(ownPoems);
  return (
    <section className=" container mx-auto">
      <SignOutButton>
        <Button className=" mt-3 flex gap-2 items-center ms-auto">
          <LogOut size={18} color="#fff" /> Logout
        </Button>
      </SignOutButton>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {ownPoems?.map((poem: any) => (
          <PostItem key={poem.id} post={poem} isOwn={true} />
        ))}
      </div>
    </section>
  );
}
