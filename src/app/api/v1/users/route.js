import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const batch = searchParams.get("batch");
  const limit = searchParams.get("limit");

  try {
    if (batch || limit) {
      const user = await prisma.user.findMany({
        where: {
          batch: {
            contains: batch || "",
          },
        },
        take: Number(limit) || 4,
      });
      return NextResponse.json({
        data: user,
        message: "Users fetched succesfuly",
      });
    } else {
      const user = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          Post: {
            select: {
              title: true,
              content: true,
              slug: true,
            },
          },
        },
      });
      return NextResponse.json({
        data: user,
        message: "Users fetched succesfuly",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
