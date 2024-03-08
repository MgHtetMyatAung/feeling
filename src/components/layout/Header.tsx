import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignOutButton, auth } from "@clerk/nextjs";
import { Plus } from "lucide-react";

async function Header() {
  const { userId } = auth();
  console.log(userId);
  return (
    <main className=" border-b">
      <nav className=" container mx-auto h-[70px] md:h-[80px] flex justify-between items-center">
        <Link href={"/"} className=" text-xl font-semibold">
          Hello
        </Link>
        <div className=" flex gap-3 items-center">
          {userId ? (
            <SignOutButton>
              <Button>Logout</Button>
            </SignOutButton>
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
