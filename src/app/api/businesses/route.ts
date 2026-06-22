import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                    status: 401,
                }
            );
        }

        const result = await db.query(
            `
            SELECT *
            FROM businesses
            WHERE user_id = $1
            ORDER BY created_at DESC
            `,
            [user.userId]
        );
        return NextResponse.json({
            success: true,
            status: 200,
            data: result.rows,
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: "Failed to fetch businesses",
            }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const result = await db.query(
            `
            INSERT INTO businesses
            (
                user_id,
                name,
                type,
                phone,
                address
            )
            VALUES
            ($1,$2,$3,$4,$5)
            RETURNING *
            `,
            [
                body.userId,
                body.name,
                body.type,
                body.phone,
                body.address,
            ]
        );

        return NextResponse.json({
            success: true,
            status: 201,
            message: "Business created successfully",
            data: result.rows[0],
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: "Failed to create business",
            }
        );
    }
}