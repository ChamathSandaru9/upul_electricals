import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#142B4A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Business Information */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Upul <span className="text-orange-400">Electricals</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Your trusted destination for electrical services,
              electronic repairs, and appliance solutions.
            </p>

            {/* <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-lg bg-white/10 p-3 transition hover:bg-orange-500"
              >
                <span className="text-sm font-bold">f</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg bg-white/10 p-3 transition hover:bg-orange-500"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-orange-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="transition hover:text-orange-400"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#why-choose-us"
                  className="transition hover:text-orange-400"
                >
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition hover:text-orange-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>TV Repair</li>
              <li>Electronic Repairs</li>
              <li>Electrical Services</li>
              <li>Appliance Repair</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold">Contact Information</h3>

            <div className="mt-5 space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <a
                  href="tel:+94XXXXXXXXX"
                  className="transition hover:text-orange-400"
                >
                  +94 XX XXX XXXX
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <a
                  href="mailto:info@upulelectricals.com"
                  className="break-all transition hover:text-orange-400"
                >
                  info@upulelectricals.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <span>Add your business address here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Upul Electricals.
              All rights reserved.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 transition hover:text-orange-400"
            >
              Back to top
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
