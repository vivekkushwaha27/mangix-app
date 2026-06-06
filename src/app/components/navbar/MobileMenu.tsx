"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { navbarLinks } from "@/app/data/navbar";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="rounded-lg border p-2" aria-label="Menu">
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {open && (
                <div
                    className="absolute top-16 left-0 w-full z-50 bg-white text-black dark:bg-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 shadow-lg">
                    <div className="flex flex-col p-4">
                        {navbarLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-3 font-medium"
                                onClick={() => setOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}

                        <hr className="my-3" />

                        <div className="flex items-center justify-between py-3">
                            <span className="font-medium">
                                Theme
                            </span>

                            <ThemeToggle />
                        </div>

                        <hr className="my-2" />                       

                        <Link href="/login" className="mt-2 rounded-lg bg-green-600 px-4 py-3 text-center text-white" onClick={() => setOpen(false)}>
                            Login
                        </Link>

                        <Link href="/signup" className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-white" onClick={() => setOpen(false)}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}