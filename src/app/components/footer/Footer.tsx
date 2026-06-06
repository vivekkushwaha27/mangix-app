import Link from "next/link";

import { APP_CONFIG } from "@/config/app.config";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-background">
            <div
                className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <h2 className="text-xl font-bold">
                            {APP_CONFIG.appName}
                        </h2>

                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            Manage students, attendance,
                            batches and payments from a
                            single platform.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Product
                        </h3>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link href="/features">
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link href="/pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Legal
                        </h3>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="
            mt-10
            border-t
            border-slate-200
            pt-6
            text-center
            text-sm
            text-slate-500
            dark:border-slate-800
          "
                >
                    © {currentYear} {APP_CONFIG.appName}.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}