import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

async function ProfilePage({ searchParams }: { searchParams: { id: number } }) {
  const user = await currentUser();
  // console.log(user);
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
        {searchParams.id ? (
          <EditForm poemId={searchParams.id} />
        ) : (
          <CreateForm />
        )}
      </div>
    </section>
  );
}

export default ProfilePage;
