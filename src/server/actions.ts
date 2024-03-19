"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPoem(formData: FormData) {
  const { userId } = auth();
  const desc = formData
    .get("description")
    ?.toString()
    .replaceAll("\n", "<%br%!!>");
  await prisma.poem.create({
    data: {
      title: formData.get("title") as string,
      description: desc as string,
      authorId: userId as string,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function editPoem(id: number, formData: FormData) {
  const desc = formData
    .get("description")
    ?.toString()
    .replaceAll("\n", "<%br%!!>");
  await prisma.poem.update({
    where: { id: Number(id) },
    data: {
      title: formData.get("title") as string,
      description: desc,
    },
  });

  revalidatePath("/user");
  redirect("/user");
}

export async function deletePoem(id: number) {
  await prisma.poem.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/user");
  redirect("/user");
}

export async function createMessage(poemId: number, formData: FormData) {
  const message = formData
    .get("message")
    ?.toString()
    .replaceAll("\n", "<%br%!!>");
  await prisma.message.create({
    data: {
      message: message || "",
      poemId,
    },
  });

  revalidatePath("/");
  redirect(`/poems/${poemId}/message?status=success`);
}
