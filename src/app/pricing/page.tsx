import Link from "next/link";

const plans = [
    {
        id: "free",
        name: "Free",
        price: "$0",
        active: true,
        badge: "Available Now",
        badgeClass:
            "bg-green-100 text-green-700",
        description:
            "Perfect for small businesses getting started.",
        features: [
            "Create up to 2 businesses",
            "50 members per business",
            "Member management",
            "Payment tracking",
            "Basic reports",
        ],
    },
    {
        id: "starter",
        name: "Starter",
        price: "$5",
        active: false,
        badge: "Coming Soon",
        badgeClass:
            "bg-amber-100 text-amber-700",
        description:
            "Designed for growing businesses.",
        features: [
            "Create up to 10 businesses",
            "150 members per business",
            "Advanced reports",
            "WhatsApp reminders",
            "Priority support",
        ],
    },
];

const faqs = [
    {
        question:
            "Is the Free Plan really free?",
        answer:
            "Yes. You can create up to 2 businesses with 50 members per business at no cost.",
    },
    {
        question:
            "Can I upgrade later?",
        answer:
            "Yes. Upgrading will be available when paid plans launch.",
    },
    {
        question:
            "Who can use MANAGIX?",
        answer:
            "Gyms, Dance Academies, Coaching Institutes, Music Schools, Art Classes and similar businesses.",
    },
];

export default function PricingPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

            {/* Hero */}

            <section className="text-center">
                <h1 className="text-4xl font-bold md:text-5xl">
                    Simple Pricing For Every Business
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
                    MANAGIX helps Gym, Dance,
                    Coaching, Music and Art
                    Class owners manage
                    members, payments,
                    reports and WhatsApp
                    communication from a
                    single dashboard.
                </p>
            </section>

            {/* Pricing Cards */}

            <section className="mt-12 grid gap-6 lg:grid-cols-2">

                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="
                            rounded-3xl
                            border
                            p-6
                            md:p-8
                            shadow-sm
                        "
                    >
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-2xl font-bold">
                                {plan.name}
                            </h2>

                            <span
                                className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    ${plan.badgeClass}
                                `}
                            >
                                {plan.badge}
                            </span>
                        </div>

                        <div className="mt-6">
                            <span className="text-5xl font-bold">
                                {plan.price}
                            </span>

                            <span className="ml-2 text-slate-500">
                                / month
                            </span>
                        </div>

                        <p className="mt-4 text-slate-600 dark:text-slate-300">
                            {plan.description}
                        </p>

                        <ul className="mt-8 space-y-3">
                            {plan.features.map(
                                (feature) => (
                                    <li
                                        key={
                                            feature
                                        }
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-green-500">
                                            ✓
                                        </span>

                                        <span>
                                            {
                                                feature
                                            }
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>

                        <Link
                            href={
                                plan.active
                                    ? "/login"
                                    : "#"
                            }
                            className={`
                                mt-8
                                block
                                w-full
                                rounded-xl
                                py-3
                                text-center
                                font-medium

                                ${
                                    plan.active
                                        ? "bg-blue-600 text-white"
                                        : "cursor-not-allowed border opacity-60"
                                }
                            `}
                        >
                            {plan.active
                                ? "Get Started"
                                : "Coming Soon"}
                        </Link>
                    </div>
                ))}
            </section>

            {/* SEO Content */}

            <section className="mt-20">
                <h2 className="text-3xl font-bold">
                    Why Choose MANAGIX?
                </h2>

                <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
                    <p>
                        MANAGIX is a modern
                        business management
                        platform designed for
                        Gym owners, Dance
                        Academies, Coaching
                        Institutes, Music
                        Schools and Art
                        Classes.
                    </p>

                    <p>
                        Manage members,
                        monitor payments,
                        generate reports and
                        communicate with
                        customers from a
                        single dashboard.
                    </p>

                    <p>
                        Whether you manage
                        20 members or
                        hundreds of students,
                        MANAGIX helps you
                        organize your
                        business efficiently.
                    </p>
                </div>
            </section>

            {/* FAQ */}

            <section className="mt-20">
                <h2 className="text-3xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="mt-8 space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={
                                faq.question
                            }
                            className="
                                rounded-xl
                                border
                                p-4
                                md:p-6
                            "
                        >
                            <h3 className="font-semibold">
                                {
                                    faq.question
                                }
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    md:text-base
                                    text-slate-600
                                    dark:text-slate-300
                                "
                            >
                                {
                                    faq.answer
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}

            <section className="mt-20">
                <div
                    className="
                        rounded-3xl
                        border
                        p-8
                        md:p-10
                        text-center
                    "
                >
                    <h2 className="text-3xl font-bold">
                        Start Managing Your Business Today
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Track members,
                        payments, reports and
                        WhatsApp
                        notifications from a
                        single dashboard.
                    </p>

                    <Link
                        href="/login"
                        className="
                            mt-6
                            inline-block
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-medium
                            text-white
                        "
                    >
                        Login to MANAGIX
                    </Link>
                </div>
            </section>
        </div>
    );
}