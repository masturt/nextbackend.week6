import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ data: todos });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}

export async function POST(req) {
  const { content } = await req.json();
  try {
    const createTodo = await prisma.todo.create({
      data: {
        content,
      },
    });
    return NextResponse.json(
      { data: createTodo, messaage: "Todo created succesfuly" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
