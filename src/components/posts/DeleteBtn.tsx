"use client";
import SubmitBtn from "@/app/actions/SubmitBtn";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { deletePoem } from "@/server/actions";

export default function DeleteBtn({ poemId }: { poemId: number }) {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <>
      <button onClick={() => setIsDelete(true)}>
        <Trash2 size={18} />
      </button>
      {isDelete && (
        <div className=" w-full h-screen fixed top-0 left-0 right-0 grid place-items-center z-20 bg-[#333333bc]">
          <div className=" bg-gray-50 rounded-md p-5">
            <h2>Are you sure to delete ?</h2>
            <div className=" flex items-center gap-3 mt-3">
              <form action={deletePoem.bind(null, poemId)}>
                <SubmitBtn lable="Yes" className={"bg-red-500"} />
              </form>
              <Button onClick={() => setIsDelete(false)}>No</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
