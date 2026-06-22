import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const result = await db.query(`
            SELECT *
            FROM members
            ORDER BY created_at DESC
        `);

        return NextResponse.json({
            success: true,
            data: result.rows,
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch members",
            },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const result = await db.query(
            `
            INSERT INTO members
            (
                business_id,
                full_name,
                phone,
                email,
                joining_date,
                monthly_fee
            )
            VALUES
            ($1,$2,$3,$4,$5,$6)
            RETURNING *
            `,
            [
                body.businessId,
                body.fullName,
                body.phone,
                body.email,
                body.joiningDate,
                body.monthlyFee,
            ]
        );

        return NextResponse.json({
            success: true,
            data: result.rows[0],
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to create member",
            },
            { status: 500 }
        );
    }
}