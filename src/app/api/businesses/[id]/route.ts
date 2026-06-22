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
            FROM businesses
            WHERE id = $1
            `,
            [id]
        );

        if (result.rows.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Business not found",
                },
                { status: 404 }
            );
        }

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
            UPDATE businesses
            SET
                name = $1,
                type = $2,
                phone = $3,
                address = $4,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $5
            RETURNING *
            `,
            [
                body.name,
                body.type,
                body.phone,
                body.address,
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
            DELETE FROM businesses
            WHERE id = $1
            `,
            [id]
        );

        return NextResponse.json({
            success: true,
            message: "Business deleted",
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