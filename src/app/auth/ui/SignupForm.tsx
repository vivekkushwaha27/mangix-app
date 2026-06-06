"use client";

import { useState } from "react";
import Link from "next/link";
import Loader from "./Loader";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Mock API call
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      console.log("Signup Success");
    } catch (error) {
      console.error(error);
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