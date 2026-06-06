import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { generateToken } from "@/lib/jwt";
import { getUserByEmail } from "@/repositories/user.repository";

export async function POST(request: Request) {
    const body = await request.json();
    const user = await getUserByEmail(body.email);

    if (!user) {
        return NextResponse.json(
            {
                success: false,
                status: 401,
                message: "Invalid email or password",
            }
        );
    }

    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
        return NextResponse.json(
            {
                success: false,
                status: 401,
                message: "Invalid email or password",
            }
        );
    }

    const token = generateToken({ userId: user.id, email: user.email, });
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            path: "/",
        }
    );

    return NextResponse.json({
        success: true,
        message: "Login successful",
        status: 200,
        user: {
            id: user.id,
            fullName: user.full_name,
            email: user.email,
        },
    });
}