import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail, } from "@/repositories/user.repository";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            fullName,
            email,
            password,
        } = body;

        if (!fullName || !email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    status: 400,
                    message: "All fields are required",
                }
            );
        }

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    status: 400,
                    message: "Email already exists",
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser(fullName, email, hashedPassword);
        return NextResponse.json({
            success: true,
            status: 201,
            message: "Account created successfully, please login to continue.",
            data: { id: user.id },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                code: 500,
                message: "Something went wrong",
            }
        );
    }
}