"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 font-polysans">
      <nav className="max-w-4xl mx-auto bg-navbar backdrop-blur-sm border border-gray-700 rounded-full shadow-lg">
        <div className="flex justify-between items-center h-14 pl-6 pr-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Adnosaur Logo"
              className="h-6 w-auto max-w-27"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/blog"
              className="text-sm text-white hover:text-primary transition-colors font-bold"
            >
              BLOG
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-white hover:text-primary transition-colors font-bold"
            >
              PRICING
            </Link>
            <Link
              href="/#faq"
              className="text-sm text-white hover:text-primary transition-colors font-bold"
            >
              FAQ'S
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white hover:text-primary transition-colors font-bold"
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://app.adnosaur.com/login/"
              className="text-sm text-white hover:text-white hover:bg-gray-600 transition-all font-bold border border-white hover:border-transparent rounded-full px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="https://trial.adnosaur.com/"
              className="bg-primary text-sm font-bold py-2 px-5 rounded-full"
            >
              <span>Try out - </span>
              <span className="text-gray-500">No login required</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-navbar border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col py-4">
              <Link
                href="/blog"
                className="px-6 py-3 text-sm text-white hover:bg-gray-700 hover:text-primary transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/#pricing"
                className="px-6 py-3 text-sm text-white hover:bg-gray-700 hover:text-primary transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="/#faq"
                className="px-6 py-3 text-sm text-white hover:bg-gray-700 hover:text-primary transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ'S
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-sm text-white hover:bg-gray-700 hover:text-primary transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="border-t border-gray-700 my-2"></div>
              <Link
                href="https://app.adnosaur.com/login/"
                className="mx-6 my-2 text-center text-sm text-white hover:bg-gray-600 transition-all font-bold border border-white rounded-full px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="https://trial.adnosaur.com/"
                className="mx-6 my-2 text-center bg-primary text-sm font-bold py-2 px-5 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Try out - </span>
                <span className="text-gray-500">No login required</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
