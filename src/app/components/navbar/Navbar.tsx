import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import { APP_CONFIG } from "@/config/app.config";
import MobileMenu from "./MobileMenu";
import { navbarLinks } from "@/app/data/navbar";

export default function Navbar() {
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
                    {navbarLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-medium hover:opacity-70"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />

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
                </div>

                <MobileMenu />
            </div>
        </header>
    );
}