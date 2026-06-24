"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
    Building2,
    Eye,
    Pencil,
    Plus,
    Search,
    Trash2,
    Users,
    Phone,
    MapPin,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

type Business = {
    id: number;
    name: string;
    type: string;
    phone: string;
    address: string;
    status: string;
    member_count?: number;
    image_url?: string;
};

export default function DashboardPage() {
    const [loading, setLoading] =
        useState(true);

    const [businesses,
        setBusinesses] =
        useState<Business[]>([]);

    const [search,
        setSearch] =
        useState("");

    const [status,
        setStatus] =
        useState("active");

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        loadBusinesses();
        loadUser();
    }, []);

    const loadBusinesses =
        async () => {
            try {
                const response =
                    await fetch(
                        "/api/businesses"
                    );

                const result =
                    await response.json();

                if (
                    result.success
                ) {
                    setBusinesses(
                        result.data
                    );
                }
            } finally {
                setLoading(
                    false
                );
            }
        };

    const loadUser =
        async () => {
            try {
                const response = await fetch("/api/auth/me");
                const result = await response.json();
                console.log("User data:", result.user.fullName); // Log the user data to the console
                if (result.success) {
                    setUser(result.user);
                }
            } finally {
                setLoading(false);
            }
        };

    const filteredBusinesses =
        useMemo(() => {
            return businesses.filter(
                (
                    business
                ) =>
                    business.status ===
                    status &&
                    business.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }, [
            businesses,
            search,
            status,
        ]);

    const handleDelete =
        async (
            id: number
        ) => {
            if (
                !confirm(
                    "Delete business?"
                )
            ) {
                return;
            }

            try {
                await fetch(
                    `/api/businesses?id=${id}`,
                    {
                        method:
                            "DELETE",
                    }
                );

                setBusinesses(
                    (
                        prev
                    ) =>
                        prev.filter(
                            (
                                x
                            ) =>
                                x.id !==
                                id
                        )
                );
            } catch {
                alert(
                    "Failed to delete"
                );
            }
        };

    return (
        <div className="mx-auto max-w-7xl px-4 py-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-lg font-semibold">
                        Welcome back, {user?.fullName} 👋
                    </h1>

                    <p className="text-sm text-slate-500">
                        Manage your businesses
                    </p>
                </div>

                <Link
                    href="/businesses/create"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-3
                        text-white
                    "
                >
                    <Plus size={18} />
                    <span className="hidden sm:block">
                        New Business
                    </span>
                </Link>
            </div>

            {/* Sticky Filter */}

            <div
                className="
                    sticky
                    top-16
                    z-20
                    mt-6
                    bg-white
                    dark:bg-slate-950
                    pb-4
                "
            >
                <div className="flex flex-col gap-3 md:flex-row">

                    <div className="relative flex-1">

                        <Search
                            size={18}
                            className="
                                absolute
                                left-3
                                top-3.5
                                text-slate-400
                            "
                        />

                        <input
                            value={
                                search
                            }
                            onChange={(
                                e
                            ) =>
                                setSearch(
                                    e
                                        .target
                                        .value
                                )
                            }
                            placeholder="Search business..."
                            className="
                                w-full
                                rounded-xl
                                border
                                pl-10
                                pr-4
                                py-3
                            "
                        />
                    </div>

                    <div className="flex gap-2">

                        <button
                            onClick={() =>
                                setStatus(
                                    "active"
                                )
                            }
                            className={`
                                rounded-xl
                                px-4
                                py-3
                                border
                                ${status ===
                                    "active"
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : ""
                                }
                            `}
                        >
                            Active
                        </button>

                        <button
                            onClick={() =>
                                setStatus(
                                    "deleted"
                                )
                            }
                            className={`
                                rounded-xl
                                px-4
                                py-3
                                border
                                ${status ===
                                    "deleted"
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : ""
                                }
                            `}
                        >
                            Deleted
                        </button>

                    </div>
                </div>
            </div>

            {/* Empty State */}

            {!loading &&
                filteredBusinesses.length ===
                0 && (
                    <div
                        className="
                            mt-10
                            rounded-2xl
                            border
                            p-10
                            text-center
                        "
                    >
                        <Building2
                            size={64}
                            className="
                                mx-auto
                                text-slate-400
                            "
                        />

                        <h2 className="mt-4 text-xl font-semibold">
                            No Businesses Found
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Create your first
                            business to get
                            started.
                        </p>

                        <Link
                            href="/businesses/create"
                            className="
                                mt-5
                                inline-flex
                                rounded-xl
                                bg-blue-600
                                px-5
                                py-3
                                text-white
                            "
                        >
                            Create Business
                        </Link>
                    </div>
                )}

            {/* Business List */}

            <div
                className="
                    mt-6
                    grid
                    gap-4
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {filteredBusinesses.map(
                    (
                        business
                    ) => (
                        <div
                            key={
                                business.id
                            }
                            className="
                                rounded-2xl
                                border
                                p-5
                            "
                        >
                            {/* <div className="flex items-start justify-between">

                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {
                                            business.name
                                        }
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {
                                            business.type
                                        }
                                    </p>
                                </div>

                                <span
                                    className="
                                        rounded-full
                                        border
                                        px-3
                                        py-1
                                        text-xs
                                    "
                                >
                                    {
                                        business.status
                                    }
                                </span>
                            </div> */}

                            <div className="flex items-start justify-between">
                                <div
                                    className="
            flex
            h-12
            w-12
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-slate-100
            text-sm
            font-semibold
            text-slate-600
        "
                                >
                                    {business.image_url ? (
                                        <img
                                            src={business.image_url}
                                            alt={business.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        "BS"
                                    )}
                                </div>

                                <div className="flex-1 ml-3">
                                    <h2 className="text-lg font-semibold">
                                        {business.name}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {business.type}
                                    </p>
                                </div>

                                <span
                                    className="
            rounded-full
            border
            px-3
            py-1
            text-xs
        "
                                >
                                    {business.status}
                                </span>
                            </div>

                            <div className="mt-4 space-y-2 text-sm">

                                <div className="flex items-center gap-2">
                                    <Users size={16} />
                                    {
                                        business.member_count ??
                                        0
                                    }{" "}
                                    Members
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone size={16} />
                                    {
                                        business.phone
                                    }
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    {
                                        business.address
                                    }
                                </div>

                            </div>

                            <div className="mt-5 flex gap-2">

                                <Link
                                    href={`/businesses/${business.id}`}
                                    className="
                                        flex-1
                                        rounded-lg
                                        border
                                        py-2
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Eye size={18} />
                                </Link>

                                <Link
                                    href={`/businesses/${business.id}/edit`}
                                    className="
                                        flex-1
                                        rounded-lg
                                        border
                                        py-2
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Pencil size={18} />
                                </Link>

                                <button
                                    onClick={() =>
                                        handleDelete(
                                            business.id
                                        )
                                    }
                                    className="
                                        flex-1
                                        rounded-lg
                                        border
                                        py-2
                                        flex
                                        items-center
                                        justify-center
                                        text-red-500
                                    "
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}