import Link from "next/link";

export const metadata = {
  title: "Contact Us | MANAGIX",
  description:
    "Get in touch with MANAGIX. Contact our project manager for business inquiries, support, partnerships, and product information.",
};

function SkeletonAvatar() {
  return (
    <div
      className="
        mx-auto
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-slate-200
        to-slate-300
        dark:from-slate-700
        dark:to-slate-800
        shadow-inner
      "
    >
      {/* Head */}
      <div className="relative flex flex-col items-center">
        <div
          className="
            h-6
            w-6
            rounded-full
            bg-slate-400/60
            dark:bg-slate-500/40
          "
        />

        {/* Body */}
        <div
          className="
            mt-1
            h-8
            w-10
            rounded-t-full
            bg-slate-400/40
            dark:bg-slate-500/30
          "
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  const contacts = [
    {
      name: "Nanam Choudhary",
      title: "Project Manager",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <span className="inline-flex rounded-full border px-4 py-2 text-sm">
            Contact MANAGIX
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Let's Connect
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Have questions about MANAGIX? Need support, partnership information, or a product demo?
            Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex justify-center">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                bg-white
                p-8
                text-center
                shadow-sm
                transition
                hover:-translate-y-1
                dark:bg-slate-900
              "
            >
              {/* Avatar */}
              <SkeletonAvatar />

              {/* Name */}
              <h2 className="mt-6 text-2xl font-bold">
                {contact.name}
              </h2>

              {/* Title */}
              <p className="mt-2 text-sm font-medium text-blue-600">
                {contact.title}
              </p>

              {/* Contact Button ONLY */}
              <a
                href="/contact"
                className="
                  mt-8
                  inline-block
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              How Can We Help?
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Reach out to us for any of the following.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📞", title: "Product Demo" },
              { icon: "💡", title: "Business Inquiry" },
              { icon: "🤝", title: "Partnership" },
              { icon: "🛠️", title: "Technical Support" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6 text-center"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 font-semibold">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-3xl border p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Discover how MANAGIX can simplify member management, payments, reporting, and communication.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
            >
              Start Free
            </Link>

            <Link
              href="/"
              className="rounded-xl border px-6 py-3 font-medium"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}