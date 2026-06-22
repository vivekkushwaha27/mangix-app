export default function DashboardPage() {
    const stats = [
        {
            title: "Businesses",
            value: "2",
        },
        {
            title: "Members",
            value: "78",
        },
        {
            title: "Revenue",
            value: "₹18,500",
        },
        {
            title: "Pending",
            value: "₹4,200",
        },
    ];

    const businesses = [
        {
            id: 1,
            name: "Vivek Gym",
            type: "Gym",
        },
        {
            id: 2,
            name: "Dance Academy",
            type: "Dance",
        },
    ];

    const members = [
        "Rahul Sharma",
        "Anjali Gupta",
        "Rohit Singh",
        "Aman Verma",
    ];

    const activities = [
        "New member added",
        "Payment received",
        "Business created",
        "Member updated",
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">

            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold">
                    Welcome Back 👋
                </h1>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Manage your businesses,
                    members and payments
                    from one dashboard.
                </p>
            </div>

            {/* Stats */}

            <div
                className="
                    mt-8
                    grid
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
            >
                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="
                            rounded-2xl
                            border
                            p-6
                        "
                    >
                        <p className="text-sm text-slate-500">
                            {item.title}
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            {item.value}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}

            <div className="mt-10">
                <h2 className="text-xl font-semibold">
                    Quick Actions
                </h2>

                <div
                    className="
                        mt-4
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    <button
                        className="
                            rounded-xl
                            bg-blue-600
                            px-4
                            py-4
                            text-white
                        "
                    >
                        Add Business
                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            px-4
                            py-4
                        "
                    >
                        Add Member
                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            px-4
                            py-4
                        "
                    >
                        Record Payment
                    </button>

                    <button
                        className="
                            rounded-xl
                            border
                            px-4
                            py-4
                        "
                    >
                        Send WhatsApp
                    </button>
                </div>
            </div>

            {/* Main Section */}

            <div
                className="
                    mt-10
                    grid
                    gap-6
                    lg:grid-cols-3
                "
            >

                {/* Businesses */}

                <div
                    className="
                        rounded-2xl
                        border
                        p-6
                    "
                >
                    <h2 className="text-xl font-semibold">
                        Businesses
                    </h2>

                    <div className="mt-4 space-y-3">
                        {businesses.map(
                            (business) => (
                                <div
                                    key={
                                        business.id
                                    }
                                    className="
                                        rounded-lg
                                        border
                                        p-3
                                    "
                                >
                                    <p className="font-medium">
                                        {
                                            business.name
                                        }
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {
                                            business.type
                                        }
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Members */}

                <div
                    className="
                        rounded-2xl
                        border
                        p-6
                    "
                >
                    <h2 className="text-xl font-semibold">
                        Recent Members
                    </h2>

                    <div className="mt-4 space-y-3">
                        {members.map(
                            (member) => (
                                <div
                                    key={
                                        member
                                    }
                                    className="
                                        rounded-lg
                                        border
                                        p-3
                                    "
                                >
                                    {member}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Activity */}

                <div
                    className="
                        rounded-2xl
                        border
                        p-6
                    "
                >
                    <h2 className="text-xl font-semibold">
                        Recent Activity
                    </h2>

                    <div className="mt-4 space-y-3">
                        {activities.map(
                            (
                                activity,
                                index
                            ) => (
                                <div
                                    key={
                                        index
                                    }
                                    className="
                                        rounded-lg
                                        border
                                        p-3
                                    "
                                >
                                    {
                                        activity
                                    }
                                </div>
                            )
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}