"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#142B4A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Business Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Upul Electricals logo"
            width={160}
            height={160}
            priority
            className="h-12 w-28 object-contain"
          />

          <div>
            <h1 className="text-lg font-bold leading-tight text-white sm:text-xl">
              Upul Electricals
            </h1>
            <p className="text-xs text-slate-300">
              Electronics & Repair Services
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-12 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-orange-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 md:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        className="inline-flex items-center justify-center rounded-lg bg-[#142B4A] p-2.5 text-white transition-colors duration-200 hover:bg-[#F59E0B] hover:text-[#142B4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 lg:hidden"
        >
          {menuOpen ? (
            <X size={26} strokeWidth={2} />
          ) : (
            <Menu size={26} strokeWidth={2} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#142B4A] px-5 py-4 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-white text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

