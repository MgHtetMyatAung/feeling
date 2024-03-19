import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  const { userId } = getAuth(req);
  // console.log(userId);
  const data = await prisma.poem.create({
    data: {
      title: title as string,
      description: description as string,
      authorId: userId as string,
    },
  });
  return NextResponse.json(data);
}
