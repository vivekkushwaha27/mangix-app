import { users } from "@/app/data/users";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user = users.find(
    (x) =>
      x.email === body.email &&
      x.password === body.password
  );

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Login successful",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}