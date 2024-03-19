import { prisma } from "@/lib/prisma";
import React from "react";
import CopyBtn from "@/components/posts/copyBtn";
import { auth } from "@clerk/nextjs";

export const revalidate = 30;

async function DetailPage({ params }: { params: { slug: string } }) {
  const { userId } = auth();
  const poem = await prisma.poem.findUnique({
    where: { id: Number(params.slug) },
  });
  const messages = await prisma.message.findMany({
    where: { poemId: poem?.id },
  });

  return (
    <section className=" container mx-auto py-5">
      <div className="">
        <h2 className=" text-lg md:text-xl font-semibold">{poem?.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: `${poem?.description?.replaceAll("<%br%!!>", "<br>")}`,
          }}
          className=" mt-2"
        ></p>
      </div>
      {userId === poem?.authorId && (
        <>
          <hr className=" my-5" />
          <h2 className=" mb-3 font-medium">Messages [{messages.length}]</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {messages.map((msg) => (
              <article key={msg.id}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${msg.message.replaceAll("<%br%!!>", "<br>")}`,
                  }}
                  className=" p-3 border rounded-md"
                ></p>
              </article>
            ))}
          </div>
        </>
      )}
      <CopyBtn id={Number(params.slug)} />
    </section>
  );
}

export default DetailPage;
