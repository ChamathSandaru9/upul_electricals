
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold text-[#142B4A] sm:text-4xl">
            Contact Upul Electricals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Have questions about our electrical or appliance
            repair services? We are here to help.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#142B4A] sm:text-3xl">
              We're Ready to Help You
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Contact our team to learn more about our services,
              discuss your requirements, or get assistance with
              your electrical appliances.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {/* Phone */}
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md">
                <div className="shrink-0 rounded-lg bg-orange-100 p-3 text-orange-600">
                  <Phone size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#142B4A]">
                    Phone
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    +94 XX XXX XXXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md">
                <div className="shrink-0 rounded-lg bg-orange-100 p-3 text-orange-600">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-[#142B4A]">
                    Email
                  </h4>
                  <p className="mt-2 break-words text-sm text-gray-600">
                    info@upulelectricals.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md">
                <div className="shrink-0 rounded-lg bg-orange-100 p-3 text-orange-600">
                  <MapPin size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#142B4A]">
                    Location
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Add your business address here
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md">
                <div className="shrink-0 rounded-lg bg-orange-100 p-3 text-orange-600">
                  <Clock size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#142B4A]">
                    Opening Hours
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Add your business hours here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Call-to-Action */}
          <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl bg-[#142B4A] p-8 text-white sm:p-10 lg:p-12">
            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-orange-500/10" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-xl bg-orange-500 p-4">
                <MessageCircle size={30} />
              </div>

              <h3 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                Need Help With Your Electrical Appliances?
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-300">
                Get in touch with Upul Electricals to discuss
                your requirements and find out how we can help.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <Link
                href="tel:+94XXXXXXXXX"
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                <Phone size={19} />
                Contact Us
                <ArrowRight size={19} />
              </Link>

              <p className="mt-4 text-sm text-gray-400">
                We're happy to answer your questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

