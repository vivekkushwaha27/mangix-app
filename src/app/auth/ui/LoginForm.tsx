"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Loader from "./Loader";
import { login } from "@/services/auth.service";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const result = await login(
                email,
                password
            );

            if (result.success) {
                router.push("/dashboard");
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert(error instanceof Error ? error.message : "Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}

            <div
                className="
          w-full
          max-w-md
          rounded-2xl
          border
          p-8
          shadow-sm
        "
            >
                <h1 className="text-3xl font-bold">
                    Welcome Back
                </h1>

                <p className="mt-2 text-gray-500">
                    Login to your account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="
                w-full
                rounded-lg
                border
                px-4
                py-3
                outline-none
              "
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="
                w-full
                rounded-lg
                border
                px-4
                py-3
                outline-none
              "
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="
              w-full
              rounded-lg
              bg-blue-600
              py-3
              font-medium
              text-white
            "
                    >
                        {isLoading
                            ? "Logging In..."
                            : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-semibold text-blue-600"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </>
    );
}