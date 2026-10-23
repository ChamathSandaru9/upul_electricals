import {
  ShieldCheck,
  Wrench,
  BadgeCheck,
  Headset,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "We aim to provide dependable service and clear communication throughout the repair process.",
  },
  {
    icon: Wrench,
    title: "Careful Repairs",
    description:
      "We focus on identifying problems carefully and finding suitable repair solutions for your devices.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Focus",
    description:
      "We pay attention to detail and aim for quality workmanship in every service we provide.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "We are here to help you understand your repair needs and choose the right service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#B45309]">
            Why Upul Electricals?
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
            Service You Can
            <span className="text-[#F59E0B]"> Trust</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We focus on dependable service, careful repairs, and
            helping customers find practical solutions for their
            electrical and electronic needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#142B4A] text-white transition-colors duration-300 group-hover:bg-[#F59E0B] group-hover:text-[#142B4A]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#142B4A]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl bg-[#142B4A] px-6 py-8 text-center sm:px-10 sm:py-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Need Help With Your Appliances?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Get in touch with Upul Electricals to discuss your
            repair needs and available services.
          </p>

          <Link
            href="#contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3.5 font-semibold text-[#142B4A] transition-colors hover:bg-orange-400"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
