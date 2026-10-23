import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  HeartHandshake,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* About Hero */}
      <section className="relative overflow-hidden bg-[#142B4A] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-400">
            About Us
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Getting to Know{" "}
            <span className="text-orange-400">
              Upul Electricals
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Discover our commitment to electrical services,
            electronic repairs, and practical solutions for
            everyday appliance needs.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Get in Touch
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* About the Business */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl">
              Practical Solutions for Your Electrical Needs
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Upul Electricals aims to provide helpful solutions
              for customers looking for electrical services,
              electronic repairs, and appliance assistance.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We understand the importance of dependable
              appliances in everyday life. Our goal is to make
              it easier for customers to learn about available
              services and get in touch when they need assistance.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Customer-focused service",
                "Practical repair solutions",
                "Clear communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-orange-500"
                  />
                  <span className="font-medium text-[#142B4A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Panel */}
          <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100 p-8 sm:min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-gray-100 to-blue-100" />

            <div className="relative max-w-sm text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-[#142B4A] text-orange-400 shadow-xl">
                <Wrench size={44} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#142B4A]">
                Service You Can Turn To
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Helping customers find practical solutions
                for their electrical and appliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Our Purpose
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#142B4A] sm:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              The principles that guide our approach to
              serving customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Target size={29} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#142B4A]">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To provide useful electrical and appliance
                solutions while focusing on customer needs,
                clear communication, and dependable service.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Eye size={29} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#142B4A]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To build lasting customer relationships and
                become a trusted choice for electrical services,
                electronic repairs, and appliance assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Why Upul Electricals
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#142B4A] sm:text-4xl">
              What Matters to Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We aim to make every customer interaction helpful,
              straightforward, and professional.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Customer Confidence",
                description:
                  "We aim to build confidence through clear information and honest communication.",
              },
              {
                icon: Wrench,
                title: "Practical Solutions",
                description:
                  "We focus on understanding customer needs and identifying suitable solutions.",
              },
              {
                icon: HeartHandshake,
                title: "Helpful Service",
                description:
                  "We want customers to feel welcome when asking questions about our services.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-7 transition hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#142B4A] text-orange-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#142B4A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#142B4A] p-8 text-white sm:p-10 md:flex-row md:items-center lg:p-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              How Can We Help You?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-gray-300">
              Explore our services or contact us to discuss
              your electrical and appliance requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold transition hover:bg-orange-600"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
