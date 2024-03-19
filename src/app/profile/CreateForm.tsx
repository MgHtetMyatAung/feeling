import { Textarea } from "@/components/ui/textarea";
import React from "react";
import SubmitBtn from "../actions/SubmitBtn";
import { Input } from "@/components/ui/input";
import { createPoem } from "@/server/actions";

function CreateForm() {
  return (
    <form className=" mt-5" action={createPoem}>
      <h1 className=" text-xl font-semibold">Create </h1>
      <div className=" space-y-2 mt-3">
        <Input
          className=" w-full lg:w-[50%]"
          id="title"
          name="title"
          placeholder=" Title ..."
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
        />
      </div>
      <div className="mt-3">
        <SubmitBtn lable="Create" />
      </div>
    </form>
  );
}

export default CreateForm;
