import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Unauthorized",
                status: 401,
            });
        }

        const result = await db.query(
            `
            SELECT
                b.*,
                COUNT(m.id)::INTEGER AS member_count
            FROM businesses b
            LEFT JOIN members m
                ON m.business_id = b.id
            WHERE b.user_id = $1
            GROUP BY b.id
            ORDER BY b.created_at DESC
            `,
            [user.userId]
        );

        return NextResponse.json({
            success: true,
            status: 200,
            data: result.rows,
        });
    } catch {
        return NextResponse.json({
            success: false,
            status: 500,
            message: "Failed to fetch businesses",
        });
    }
}

export async function POST(request: Request) {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Unauthorized",
                status: 401,
            });
        }

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
                user.userId,
                body.name,
                body.type,
                body.phone,
                body.address,
            ]
        );

        return NextResponse.json({
            success: true,
            status: 201,
            message:
                "Business created successfully",
            data: result.rows[0],
        });
    } catch {
        return NextResponse.json({
            success: false,
            status: 500,
            message:
                "Failed to create business",
        });
    }
}