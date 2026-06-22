"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

type User = {
    userId: number;
    email: string;
    fullName: string;
    imageUrl?: string | null;
};

function getInitials(fullName: string) {
    const names = fullName
        .trim()
        .split(" ")
        .filter(Boolean);

    if (names.length >= 2) {
        return (
            names[0][0] +
            names[1][0]
        ).toUpperCase();
    }

    return names[0]
        ?.substring(0, 2)
        ?.toUpperCase() || "U";
}

export default function MobileMenu({
    user,
}: {
    user: User | null;
}) {
    const [open, setOpen] =
        useState(false);

    const handleLogout =
        async () => {
            try {
                await fetch(
                    "/api/auth/logout",
                    {
                        method: "POST",
                    }
                );
            } finally {
                window.location.href =
                    "/login";
            }
        };

    return (
        <div className="md:hidden">
            <button
                onClick={() =>
                    setOpen(!open)
                }
                className="rounded-lg border p-2"
            >
                {open ? (
                    <X size={22} />
                ) : (
                    <Menu size={22} />
                )}
            </button>

            {open && (
                <div
                    className="
                        absolute
                        top-16
                        left-0
                        w-full
                        z-50
                        bg-white
                        dark:bg-slate-900
                        border-b
                        border-slate-200
                        dark:border-slate-700
                        shadow-lg
                    "
                >
                    <div className="flex flex-col p-4">

                        {user ? (
                            <>
                                <div className="mb-4 flex items-center gap-3">

                                    {user?.imageUrl ? (
                                        <img
                                            src={
                                                user.imageUrl
                                            }
                                            alt={
                                                user.fullName
                                            }
                                            className="
                                                h-10
                                                w-10
                                                rounded-full
                                                object-cover
                                            "
                                        />
                                    ) : (
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-blue-600
                                                text-white
                                            "
                                        >
                                            {getInitials(
                                                user?.fullName || ""
                                            )}
                                        </div>
                                    )}

                                    <span>
                                        Hi{" "}
                                        {
                                            user?.fullName?.split(
                                                " "
                                            )[0]
                                        }
                                    </span>
                                </div>

                                <Link href="/dashboard" className="py-3">
                                    Dashboard
                                </Link>

                                <Link href="/businesses" className="py-3">
                                    Businesses
                                </Link>

                                <Link href="/members" className="py-3">
                                    Members
                                </Link>

                                <Link href="/profile" className="py-3">
                                    Profile
                                </Link>

                                <button
                                    onClick={
                                        handleLogout
                                    }
                                    className="
                                        py-3
                                        text-left
                                        text-red-500
                                    "
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/" className="py-3">
                                    Home
                                </Link>

                                <Link href="/pricing" className="py-3">
                                    Pricing
                                </Link>

                                <Link href="/contact" className="py-3">
                                    Contact
                                </Link>

                                <Link
                                    href="/login"
                                    className="
                                        mt-2
                                        rounded-lg
                                        border
                                        px-4
                                        py-3
                                        text-center
                                    "
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/signup"
                                    className="
                                        mt-2
                                        rounded-lg
                                        bg-blue-600
                                        px-4
                                        py-3
                                        text-center
                                        text-white
                                    "
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}

                        <div className="mt-4 flex items-center justify-between">
                            <span>Theme</span>

                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}