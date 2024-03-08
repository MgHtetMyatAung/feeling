import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <section className=" w-full grid place-items-center py-[50px]">
      <SignIn />
    </section>
  );
}

export default SignInPage;
