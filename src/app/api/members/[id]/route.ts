import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const result = await db.query(
            `
            SELECT *
            FROM members
            WHERE id = $1
            `,
            [id]
        );

        return NextResponse.json({
            success: true,
            data: result.rows[0],
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Failed",
            },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const body = await request.json();

        const result = await db.query(
            `
            UPDATE members
            SET
                full_name = $1,
                phone = $2,
                email = $3,
                joining_date = $4,
                monthly_fee = $5,
                status = $6,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $7
            RETURNING *
            `,
            [
                body.fullName,
                body.phone,
                body.email,
                body.joiningDate,
                body.monthlyFee,
                body.status,
                id,
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
                message: "Failed to update",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await db.query(
            `
            DELETE FROM members
            WHERE id = $1
            `,
            [id]
        );

        return NextResponse.json({
            success: true,
            message: "Member deleted",
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete",
            },
            { status: 500 }
        );
    }
}