"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPoem(formData: FormData) {
  const { userId } = auth();
  const data = await prisma.poem.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      authorId: userId as string,
    },
  });

  revalidatePath("/");
  redirect("/");
}
