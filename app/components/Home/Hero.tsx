import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[680px] overflow-hidden bg-[#142B4A] text-white lg:min-h-[760px]"
    >
      {/* Full-section background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center lg:bg-[position:center_55%]"
        style={{
          backgroundImage: "url('/images/hero-electronics.png')",
        }}
        role="img"
        aria-label="Professional electronics repair workshop"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Extra contrast on the bottom */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[760px] lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Hero content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-orange-300 backdrop-blur-sm">
            <ShieldCheck size={18} className="text-[#F59E0B]" />
            Reliable Electrical & Electronic Services
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Expert Repairs.
            <span className="mt-2 block text-[#F59E0B]">
              Trusted Service.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Looking for reliable electrical and electronic appliance
            repairs? Upul Electricals is here to help you with
            professional service and dependable solutions.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3.5 font-semibold text-[#142B4A] shadow-lg transition hover:bg-orange-400"
            >
              Explore Our Services
              <ArrowRight size={20} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-[#142B4A]/30 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <PhoneCall size={19} />
              Contact Us
            </Link>
          </div>

          {/* Trust message */}
          <div className="mt-10 flex items-center gap-3 border-t border-white/20 pt-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F59E0B]">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="font-semibold text-white">
                Service You Can Trust
              </p>
              <p className="mt-1 text-sm text-gray-300">
                Dedicated support for your electronic appliances.
              </p>
            </div>
          </div>
        </div>

        {/* Empty right column preserves the image composition */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
