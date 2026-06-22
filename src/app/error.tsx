"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
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
            <h1 className="text-4xl font-bold">
                Something Went Wrong
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
                An unexpected error occurred.
            </p>

            <button
                onClick={reset}
                className="
                    mt-6
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    text-white
                "
            >
                Try Again
            </button>
        </div>
    );
}