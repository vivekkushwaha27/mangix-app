import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
    const result = await db.query(
        `SELECT * FROM users WHERE email = $1`, [email]
    );
    return result.rows[0];
}

export async function createUser(fullName: string, email: string, password: string) {
    const result = await db.query(
        `INSERT INTO users(full_name,email,password)
        VALUES($1,$2,$3)
        RETURNING *`,
        [fullName, email, password,]
    );
    return result.rows[0];
}