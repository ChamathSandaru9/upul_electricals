import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Wrench,
  Zap,
  Refrigerator,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "TV Repair",
    description:
      "Get assistance with television problems, display issues, and other common TV faults.",
    features: [
      "Television troubleshooting",
      "Display and picture issues",
      "General TV fault diagnosis",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    title: "Electronic Repairs",
    description:
      "Explore repair assistance for electronic equipment experiencing faults or performance problems.",
    features: [
      "Electronic fault diagnosis",
      "Equipment troubleshooting",
      "Repair assessment",
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Electrical Services",
    description:
      "Get help with suitable electrical service requirements and electrical troubleshooting.",
    features: [
      "Electrical fault identification",
      "Electrical troubleshooting",
      "Service consultations",
    ],
  },
  {
    number: "04",
    icon: Refrigerator,
    title: "Appliance Repair",
    description:
      "Find assistance for household appliances that are not working as expected.",
    features: [
      "Appliance fault diagnosis",
      "Performance troubleshooting",
      "Repair assessment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#142B4A] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-400">
            Our Services
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Electrical & Appliance Solutions{" "}
            <span className="text-orange-400">
              You Can Explore
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Discover the services offered by Upul Electricals,
            from television and electronic repairs to electrical
            services and household appliance assistance.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* Services Cards */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#142B4A] sm:text-4xl">
              Explore Our Services
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Learn more about our service categories and contact
              us to discuss your specific requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-[#142B4A] group-hover:text-orange-400">
                      <Icon size={28} />
                    </div>

                    <span className="text-sm font-bold text-gray-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#142B4A]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-orange-500"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className="mt-7 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-[#142B4A] transition hover:text-orange-600"
                  >
                    Ask About This Service
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#142B4A] sm:text-4xl">
              How to Get Started
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Contact Us",
                description:
                  "Tell us about your appliance, equipment, or electrical service needs.",
              },
              {
                number: "02",
                title: "Discuss Your Needs",
                description:
                  "Explain the problem so the appropriate service options can be discussed.",
              },
              {
                number: "03",
                title: "Find a Solution",
                description:
                  "Confirm the available service and next steps directly with our team.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <span className="text-4xl font-bold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#142B4A]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#142B4A] p-8 text-white sm:p-10 md:flex-row md:items-center lg:p-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need Help With an Appliance?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-gray-300">
              Contact Upul Electricals to discuss your needs
              and find out which services are available.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            <MessageCircle size={19} />
            Get in Touch
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
