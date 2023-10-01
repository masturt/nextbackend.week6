import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.member.findUnique({
      where: {
        email,
      },
    });

    // check if user exist
    if (!findUser) {
      return NextResponse.json({ message: "User not found" });
    }

    // compare password
    const hashedPassword = findUser.password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid Password" });
    }

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    return NextResponse.json({ data: payload });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
