import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    status: 401,
                }
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: number;
            email: string;
            fullName?: string;
            imageUrl?: string;
            role: string;
        };

        return NextResponse.json({ success: true, user: decoded, });
    } catch {
        return NextResponse.json(
            {
                success: false,
                status: 400
            }
        );
    }
}