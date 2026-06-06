"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Loader from "./Loader";
import toast from "react-hot-toast";
import { signup } from "@/services/auth.service";

export default function SignupForm() {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const [fullName, setFullName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSubmit = async (
        e: React.SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            if (!fullName.trim()) {
                toast.error("Full Name is required");
                return;
            }

            if (!email.trim()) {
                toast.error("Email is required");
                return;
            }

            if (!password.trim()) {
                toast.error("Password is required");
                return;
            }

            setIsLoading(true);

            const result = await signup(
                fullName,
                email,
                password
            );

            if (result.success) {
                toast.success(result.message || "Account created successfully");
                router.push("/login");
                return;
            } else {
                toast.error(result.message || "Signup failed");
                return;
            }
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Signup failed"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}

            <div
                className={`
      w-full
      max-w-md
      rounded-2xl
      border
      p-8
      shadow-sm
      transition-opacity

      ${isLoading
                        ? "pointer-events-none opacity-60"
                        : ""
                    }
    `}
            >
                <h1 className="text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mt-2 text-gray-500">
                    Start using MANAGIX
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(
                                    e.target.value
                                )
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
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
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
                                setPassword(
                                    e.target.value
                                )
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
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-blue-600"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
}