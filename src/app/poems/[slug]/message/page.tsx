import SubmitBtn from "@/app/actions/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { createMessage } from "@/server/actions";
import React from "react";

async function MessagePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { status: string };
}) {
  const currentPoem = await prisma.poem.findUnique({
    where: { id: Number(params.slug) },
  });

  return (
    <section className="">
      <div className=" container mx-auto py-5">
        {searchParams.status == "success" ? (
          <div className="">
            <p className=" text-pink-400 text-lg font-medium text-center">
              Success your message !
            </p>
          </div>
        ) : (
          <div className="">
            <div className=" p-5 message-box rounded-xl">
              <h1 className=" font-bold text-xl">{currentPoem?.title}</h1>
              <div className=" mt-2">
                <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: `${currentPoem?.description?.replaceAll(
                      "<%br%!!>",
                      "<br>"
                    )}`,
                  }}
                ></p>
              </div>
            </div>
            <div className=" mt-5">
              <form action={createMessage.bind(null, Number(params.slug))}>
                <div className=" p-5 rounded-xl message-box">
                  <Textarea
                    rows={5}
                    className=" focus-visible:border-none"
                    placeholder=" Write your message ..."
                    name="message"
                  />
                  <SubmitBtn lable="Send" className={" mt-3 block ms-auto"} />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MessagePage;
