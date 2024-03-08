import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import SubmitBtn from "../actions/SubmitBtn";
import { createPoem } from "@/server/actions";

async function ProfilePage() {
  const user = await currentUser();
  console.log(user);
  return (
    <section>
      <div className=" container mx-auto py-10">
        <div className=" flex gap-3">
          <Image
            src={user?.imageUrl as string}
            alt="user logo"
            width={50}
            height={50}
            className=" rounded-full"
          />
          <div className="">
            <p className=" text-lg font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className=" text-sm">{user?.emailAddresses[0].emailAddress}</p>
          </div>
        </div>
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
            <Textarea
              className=" w-full lg:w-[50%]"
              name="description"
              placeholder="Description ..."
              rows={10}
            />
          </div>
          <div className="mt-3">
            <SubmitBtn lable="Create" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProfilePage;
