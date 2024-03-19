import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

async function Header() {
  const { userId } = auth();
  // console.log(userId);
  return (
    <main className=" border-b">
      <nav className=" container mx-auto h-[70px] md:h-[80px] flex justify-between items-center">
        <Link href={"/"} className=" text-xl font-semibold">
          Hello
        </Link>
        <div className=" flex gap-3 items-center">
          {userId ? (
            <Link href={`/user`}>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Link href={"/auth/sign-in"}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}

export default Header;
