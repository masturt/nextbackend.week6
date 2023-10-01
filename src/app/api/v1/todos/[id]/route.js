import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function PATCH(req, { params }) {
  const { id } = params; // utk ambil dynamic ID
  const { content } = await req.json(); // utk ambil body content

  try {
    const updateTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
    return NextResponse.json({
      data: updateTodo,
      message: "Todo updated succesfuly",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deleteTodo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({
      data: deleteTodo,
      message: "Todo deleted succesfuly",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
