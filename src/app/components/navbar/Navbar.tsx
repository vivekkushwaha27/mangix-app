"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

import { APP_CONFIG } from "@/config/app.config";

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

export default function Navbar() {
    const [user, setUser] =
        useState<User | null>(null);

    const [profileOpen,
        setProfileOpen] =
        useState(false);

    const profileRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response =
                    await fetch(
                        "/api/auth/me",
                        {
                            credentials:
                                "include",
                        }
                    );

                if (!response.ok) {
                    return;
                }

                const result =
                    await response.json();

                setUser(result.user);
            } catch {
                setUser(null);
            }
        };

        loadUser();
    }, []);

    useEffect(() => {
        const handleClickOutside = (
            event: MouseEvent
        ) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(
                    event.target as Node
                )
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

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
        <header
            className="
                sticky
                top-0
                z-50
                bg-white
                dark:bg-slate-900
                border-b
                border-slate-200
                dark:border-slate-700
            "
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                <Link
                    href="/"
                    className="text-xl font-bold"
                >
                    {APP_CONFIG.appName}
                </Link>

                <nav className="hidden md:flex items-center gap-8">

                    {!user && (
                        <>
                            <Link href="/">
                                Home
                            </Link>

                            <Link href="/pricing">
                                Pricing
                            </Link>

                            <Link href="/contact">
                                Contact
                            </Link>
                        </>
                    )}

                    {user && (
                        <>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>

                            <Link href="/businesses">
                                Businesses
                            </Link>

                            <Link href="/members">
                                Members
                            </Link>
                        </>
                    )}
                </nav>

                <div className="hidden md:flex items-center gap-3">

                    <ThemeToggle />

                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="rounded-lg border px-4 py-2"
                            >
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div
                            ref={profileRef}
                            className="relative"
                        >
                            <button
                                onClick={() =>
                                    setProfileOpen(
                                        !profileOpen
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
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
                                            font-semibold
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
                            </button>

                            {profileOpen && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        mt-2
                                        w-52
                                        rounded-xl
                                        border
                                        bg-white
                                        dark:bg-slate-900
                                        shadow-lg
                                    "
                                >
                                    <Link
                                        href="/dashboard"
                                        className="
                                            block
                                            px-4
                                            py-3
                                        "
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/profile"
                                        className="
                                            block
                                            px-4
                                            py-3
                                        "
                                    >
                                        Profile
                                    </Link>

                                    <button
                                        onClick={
                                            handleLogout
                                        }
                                        className="
                                            block
                                            w-full
                                            px-4
                                            py-3
                                            text-left
                                            text-red-500
                                        "
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <MobileMenu user={user} />
            </div>
        </header>
    );
}