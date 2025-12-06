'use client';

import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "TH">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "TH" : "EN"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-2 md:py-4 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-luxury-900 rounded-full flex items-center justify-center text-white font-bold font-thai text-sm">
            on
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            onnha
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="cursor-pointer flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-luxury-900 transition-colors group"
              aria-label="Toggle language"
            >
              <Globe
                size={16}
                strokeWidth={1.5}
                className="group-hover:text-luxury-500 transition-colors"
              />
              <span className="uppercase tracking-wide min-w-6">
                {language}
              </span>
            </button>

            <div className="h-4 w-px bg-gray-200"></div>

            <Link
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-luxury-500 transition-colors"
            >
              Sign in
            </Link>
          </div>

          <button
            type="button"
            className="cursor-pointer text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-luxury-600 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 cursor-pointer">
          <button
            type="button"
            onClick={toggleLanguage}
            className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 uppercase"
          >
            {language}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 p-2 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 md:hidden animate-fade-in shadow-xl">
          <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Language</span>
            <div className="flex gap-2 bg-gray-50 rounded-lg p-1 ">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`cursor-pointer px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === "EN"
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("TH")}
                className={`cursor-pointer px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === "TH"
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500"
                }`}
              >
                TH
              </button>
            </div>
          </div>

          <hr className="border-gray-100" />
          <Link href="#" className="text-base font-medium text-gray-900">
            Sign in
          </Link>
          <button
            type="button"
            className="cursor-pointer w-full text-center text-sm font-medium bg-gray-900 text-white px-5 py-3 rounded-lg"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
