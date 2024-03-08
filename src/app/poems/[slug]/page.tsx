import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Copy } from "lucide-react";
import React from "react";

async function DetailPage({ params }: { params: { slug: string } }) {
  const poem = await prisma.poem.findUnique({
    where: { id: Number(params.slug) },
  });
  return (
    <section className=" container mx-auto py-5">
      <div className="">
        <h2 className=" text-xl md:text-2xl font-semibold">{poem?.title}</h2>
        <p>{poem?.description}</p>
      </div>
      <Button className=" bg-red-500 hover:bg-red-600 flex gap-2 items-center absolute bottom-10">
        {" "}
        <Copy size={18} color="#fff" />
        Copy url
      </Button>
    </section>
  );
}

export default DetailPage;
