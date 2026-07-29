"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import DemoDialog from "./DemoDialog";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing",  label: "Pricing" },
  { href: "#about",    label: "About Us" },
  { href: "#faq",      label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled ? "bg-white shadow-sm py-3 border-b border-border-light" : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}>
            <Logo width={140} height={45} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => handleNav("#contact")} className="btn btn-secondary btn-sm">
              Contact
            </button>
            <button onClick={() => setDemoOpen(true)} className="btn btn-primary btn-sm">
              Free Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text-main"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-xl font-semibold text-text-main text-left bg-transparent border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-4 border-t border-border-light pt-6">
            <button onClick={() => { setMobileOpen(false); setDemoOpen(true); }} className="btn btn-primary w-full">
              Book a Demo
            </button>
            <button onClick={() => handleNav("#contact")} className="btn btn-secondary w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}

      <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
