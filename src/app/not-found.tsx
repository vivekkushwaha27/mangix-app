import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="
                flex
                min-h-[70vh]
                flex-col
                items-center
                justify-center
                px-4
                text-center
            "
        >
            <div className="flex text-4xl font-extrabold tracking-wider">
                <span className="text-red-500">M</span>
                <span className="text-orange-500">A</span>
                <span className="text-yellow-500">N</span>
                <span className="text-green-500">A</span>
                <span className="text-cyan-500">G</span>
                <span className="text-blue-500">I</span>
                <span className="text-purple-500">X</span>
            </div>

            <h1
                className="
                    mt-6
                    text-4xl
                    font-bold
                    md:text-5xl
                "
            >
                Page Not Found
            </h1>

            <p
                className="
                    mt-4
                    max-w-md
                    text-slate-600
                    dark:text-slate-300
                "
            >
                The page you're looking for
                doesn't exist or may have been
                moved.
            </p>

            <div
                className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "
            >
                <Link
                    href="/"
                    className="
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        font-medium
                        text-white
                    "
                >
                    Go Home
                </Link>

                <Link
                    href="/contact"
                    className="
                        rounded-xl
                        border
                        px-6
                        py-3
                        font-medium
                    "
                >
                    Contact
                </Link>
            </div>

            <div
                className="
                    mt-12
                    text-sm
                    text-slate-500
                "
            >
                MANAGIX • Business Management Platform
            </div>
        </div>
    );
}