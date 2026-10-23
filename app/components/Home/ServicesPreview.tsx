import Link from "next/link";
import {
  ArrowRight,
  Tv,
  CircuitBoard,
  Plug,
  Refrigerator,
} from "lucide-react";

const services = [
  {
    icon: Tv,
    title: "TV Repair",
    description:
      "Professional television troubleshooting and repair to help get your TV working properly again.",
  },
  {
    icon: CircuitBoard,
    title: "Electronic Repairs",
    description:
      "Careful diagnosis and repair of supported electronic devices and components.",
  },
  {
    icon: Plug,
    title: "Electrical Services",
    description:
      "Reliable electrical troubleshooting and repair services for your electrical needs.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Repair",
    description:
      "Practical repair solutions for supported household electrical appliances.",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#D97706]">
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
            Our Professional
            <span className="text-[#F59E0B]"> Services</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Explore our repair and maintenance services, delivered
            with care, attention to detail, and a commitment to
            dependable solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#142B4A] text-white transition-colors duration-300 group-hover:bg-[#F59E0B] group-hover:text-[#142B4A]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#142B4A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#142B4A] transition-colors hover:text-[#D97706]"
                >
                  Learn More
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#142B4A] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#F59E0B] hover:text-[#142B4A]"
          >
            Contact Us for Service
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
