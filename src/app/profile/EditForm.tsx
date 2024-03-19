import { Textarea } from "@/components/ui/textarea";
import React from "react";
import SubmitBtn from "../actions/SubmitBtn";
import { Input } from "@/components/ui/input";
import { createPoem, editPoem } from "@/server/actions";
import { prisma } from "@/lib/prisma";

async function EditForm({ poemId }: { poemId: number }) {
  const currentPoem = await prisma.poem.findUnique({
    where: { id: Number(poemId) },
  });
  const desc = currentPoem?.description
    ?.toString()
    .replaceAll("<%br%!!>", "\n");
  return (
    <form className=" mt-5" action={editPoem.bind(null, poemId)}>
      <h1 className=" text-xl font-semibold">Edit Poem</h1>
      <div className=" space-y-2 mt-3">
        <Input
          className=" w-full lg:w-[50%]"
          id="title"
          name="title"
          placeholder=" Title ..."
          defaultValue={currentPoem?.title || ""}
        />
      </div>
      <div className=" space-y-2 mt-3">
        {/* <div
          contentEditable
          className=" w-full h-[30vh] p-2 border rounded-md focus-visible:outline-none" 
        /> */}
        <Textarea
          className="w-full lg:w-[50%]"
          placeholder="Description ..."
          name="description"
          rows={5}
          defaultValue={desc || ""}
        />
      </div>
      <div className="mt-3">
        <SubmitBtn lable="Update" />
      </div>
    </form>
  );
}

export default EditForm;
