import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: "👥",
      title: "Member Management",
      description:
        "Manage students, members and customer profiles in one place.",
    },
    {
      icon: "💰",
      title: "Payment Tracking",
      description:
        "Track paid, pending and overdue payments easily.",
    },
    {
      icon: "📊",
      title: "Reports & Analytics",
      description:
        "Get business insights with visual reports and summaries.",
    },
    {
      icon: "📱",
      title: "WhatsApp Notifications",
      description:
        "Send reminders, payment alerts and notices instantly.",
    },
    {
      icon: "🏢",
      title: "Multi Business Support",
      description:
        "Perfect for Gym, Coaching, Music, Dance and Swimming classes.",
    },
  ];

  const industries = [
    "🏋️ Gym",
    "💃 Dance Academy",
    "🏊 Swimming Club",
    "🎵 Music School",
    "🎨 Art Classes",
    "📚 Coaching Institute",
    "🧘 Yoga Studio",
    "⚽ Sports Academy",
    "more..",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              px-4
              py-2
              text-sm
            "
          >
            All-in-One Management Platform
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              md:text-6xl
            "
          >
            Manage Members,
            <br />
            Payments & more
            <br />
            with MANAGIX
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              text-slate-600
              dark:text-slate-300
            "
          >
            MANAGIX helps Gym, Dance, Swimming,
            Coaching, Music and Art Class owners
            manage admissions, payments, reports and communication
            from a single dashboard.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link
              href="/signup"
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-medium
                text-white
              "
            >
              Start Free
            </Link>

            <Link
              href="/login"
              className="
                rounded-xl
                border
                px-6
                py-3
                font-medium
              "
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {[
            "50+ Members",
            "25K+ Payments",
            "99.9% Uptime",
            "100% Support"
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border
                p-6
                text-center
              "
            >
              <h3 className="text-xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-24
        "
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Everything You Need
          </h2>

          <p
            className="
              mt-3
              text-slate-600
              dark:text-slate-300
            "
          >
            Built for modern business owners.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-2xl
                border
                p-6
                transition
                hover:-translate-y-1
              "
            >
              <div className="text-4xl">
                {feature.icon}
              </div>

              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-3
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10
        "
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Built For
          </h2>
        </div>

        <div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-2
            md:grid-cols-3
          "
        >
          {industries.map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border
                p-6
                text-center
                text-lg
                font-medium
              "
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      {/* <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-24
        "
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            One Dashboard.
            Everything Managed.
          </h2>

          <p
            className="
              mt-3
              text-slate-600
              dark:text-slate-300
            "
          >
            Members, payments, reports and more from one place.
          </p>
        </div>

        <div
          className="
            mt-12
            rounded-3xl
            border
            p-8
          "
        >
          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
            "
          >
            Dashboard Preview Coming Soon
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-24
        "
      >
        <div
          className="
            rounded-3xl
            border
            p-10
            text-center
          "
        >
          <h2 className="text-3xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              dark:text-slate-300
            "
          >
            Join MANAGIX and simplify member,
            payment, reports and more.
          </p>

          <Link
            href="/signup"
            className="
              mt-8
              inline-block
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-medium
              text-white
            "
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}