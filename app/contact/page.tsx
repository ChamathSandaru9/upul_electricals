import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+94 XX XXX XXXX",
    description: "Contact us for service inquiries.",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@upulelectricals.com",
    description: "Send us your questions by email.",
  },
  {
    icon: MapPin,
    title: "Business Location",
    value: "Add your business address",
    description: "Update this with your actual location.",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Add your opening hours",
    description: "Check availability before visiting.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#142B4A] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-orange-400">
            Contact Us
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's Talk About Your{" "}
            <span className="text-orange-400">
              Electrical Needs
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Have a question about our services? Get in touch
            with Upul Electricals to discuss your requirements
            and find out how we can help.
          </p>

          <a
            href="tel:+94XXXXXXXXX"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            <Phone size={19} />
            Call Us
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* Contact Details */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Get in Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#142B4A] sm:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Choose a contact method below to reach our team.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#142B4A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words font-medium text-gray-800">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {/* Phone Contact */}
          <div className="rounded-2xl bg-[#142B4A] p-8 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500">
              <Phone size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Speak With Us
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Call us to ask about available services, discuss
              an appliance problem, or find out what to do next.
            </p>

            <a
              href="tel:+94XXXXXXXXX"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold transition hover:bg-orange-600"
            >
              Call Upul Electricals
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Email Contact */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Mail size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#142B4A]">
              Send Us an Email
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Prefer email? Send us your questions or explain
              the service you are looking for.
            </p>

            <a
              href="mailto:info@upulelectricals.com"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              <MessageCircle size={18} />
              Email Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#142B4A] sm:text-3xl">
            Connect With Us
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Follow Upul Electricals on social media for business
            updates and information.
          </p>

          {/* <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              <span className="text-lg font-bold">f</span>
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div> */}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-orange-50 p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#142B4A]">
              Looking for a Particular Service?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Explore our services to learn more about the
              assistance available.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#142B4A] px-6 py-3.5 font-semibold text-white transition hover:bg-orange-500"
          >
            Explore Services
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}