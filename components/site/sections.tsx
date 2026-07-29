"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  FileSpreadsheet,
  Smartphone,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

/* ── Inline social SVGs ── */
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconTwitterX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import AppPreview from "./AppPreview";
import LeadForm from "./LeadForm";
import DemoDialog from "./DemoDialog";
import Logo from "./Logo";

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative bg-pattern min-h-screen flex items-center"
        style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Copy */}
            <div>
              <span className="tagline">Starlabs POS 2.0</span>
              <h1 className="heading-xl">
                Point of sale management, <span className="text-brand-blue">simplified.</span>
              </h1>
              <p className="text-body-lg mt-6 max-w-xl">
                A robust and reliable POS software designed for businesses in Cameroon. Manage your sales, inventory, and reports without relying on an internet connection.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button onClick={() => setDemoOpen(true)} className="btn btn-primary btn-lg">
                  Book a Demo
                </button>
                <a href="#features" className="btn btn-secondary btn-lg">
                  Discover Features
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-8 flex items-center gap-6 text-body-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> 14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> 100% Offline
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> Local support
                </div>
              </div>
            </div>

            {/* Right Preview */}
            <div className="relative">
              <AppPreview />
            </div>
          </div>
        </div>
      </section>

      <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   FEATURES SECTION
───────────────────────────────────────────────────────────── */
const features = [
  {
    id: "feat-pos",
    icon: <ShoppingCart size={24} />,
    title: "Fast Checkout",
    desc: "Process payments instantly. Compatible with cash, Mobile Money, and bank terminals.",
  },
  {
    id: "feat-inventory",
    icon: <Package size={24} />,
    title: "Inventory Management",
    desc: "Real-time tracking. Receive automatic restocking alerts to prevent shortages.",
  },
  {
    id: "feat-reports",
    icon: <BarChart3 size={24} />,
    title: "Analytics Dashboards",
    desc: "Visualize your sales performance, margins, and cashier activity at a glance.",
  },
  {
    id: "feat-cashiers",
    icon: <Users size={24} />,
    title: "Multiple Accounts",
    desc: "Create dedicated profiles for your employees with strict access rights and activity logs.",
  },
  {
    id: "feat-excel",
    icon: <FileSpreadsheet size={24} />,
    title: "Accounting Exports",
    desc: "Generate reports in Excel format (.xlsx) easily integrated into your accounting software.",
  },
  {
    id: "feat-offline",
    icon: <Smartphone size={24} />,
    title: "100% Offline",
    desc: "Stop depending on the internet. The software runs locally on your machine (Windows, Mac, Linux).",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-py bg-surface-alt">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="tagline">Features</span>
          <h2 className="heading-lg">Comprehensive tools for demanding merchants</h2>
          <p className="text-body-md mt-4">
            Everything you need to manage your business from A to Z, gathered in a clean and intuitive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.id} className="card">
              <div className="w-12 h-12 rounded bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="heading-md !text-lg mb-2">{f.title}</h3>
              <p className="text-body-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Shops Equipped" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Technical Support" },
  { value: "Local", label: "Currencies" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-py">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tagline">Our Expertise</span>
            <h2 className="heading-lg mb-6">Developed in Cameroon, for local realities</h2>
            <div className="space-y-4 text-body-md">
              <p>
                Starlabs Group designs software solutions that address the true challenges of African businesses. We know that an unstable internet connection shouldn't stop your sales.
              </p>
              <p>
                That's why Starlabs POS was built from day one as a robust, secure desktop solution capable of operating completely independently, natively managing your local transactions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-brand-blue mb-1">{s.value}</div>
                  <div className="text-sm font-medium text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-alt rounded-lg p-10 flex flex-col items-center justify-center border border-border-light text-center">
            <Logo width={200} height={70} />
            <p className="mt-8 text-sm font-semibold tracking-wider text-text-muted uppercase">
              Enable · Engage · Empower · Enhance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
export function ContactSection() {
  return (
    <section id="contact" className="section-py bg-surface-alt">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Demo Pitch */}
          <div>
            <span className="tagline">Demonstration</span>
            <h2 className="heading-md mb-4">Ready to optimize your management?</h2>
            <p className="text-body-md mb-8">
              Let us show you how Starlabs POS adapts to your industry. Book a 30-minute meeting with an expert.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Quick audit of your current needs</span>
              </div>
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Live interface presentation</span>
              </div>
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Configuration of your trial period</span>
              </div>
            </div>

            <div className="pt-8 border-t border-border-medium">
              <h3 className="font-semibold text-text-main mb-4">Or contact us directly:</h3>
              <div className="space-y-3">
                <a href="mailto:service@starlabsgroups.com" className="flex items-center gap-3 text-body-md hover:text-brand-blue">
                  <Mail size={18} className="shrink-0" /> service@starlabsgroups.com
                </a>
                <a href="tel:+237683433528" className="flex items-center gap-3 text-body-md hover:text-brand-blue">
                  <Phone size={18} className="shrink-0" /> +(237) 683-433-528 (MTN CM)
                </a>
                <a href="tel:+14693510688" className="flex items-center gap-3 text-body-md hover:text-brand-blue">
                  <Phone size={18} className="shrink-0" /> +1 (469) 351-0688 (USA)
                </a>
                <div className="flex items-center gap-3 text-body-md mt-2">
                  <MapPin size={18} className="shrink-0" /> Buea, Cameroon
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card">
            <h3 className="heading-md !text-xl mb-6">Request a Demo</h3>
            <LeadForm mode="demo" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-main pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Logo width={140} height={45} />
            <p className="text-body-sm mt-4 max-w-sm">
              Professional software solutions for business management in Central Africa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-main mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="nav-link !text-sm">Features</a></li>
              <li><a href="#pricing" className="nav-link !text-sm">Pricing</a></li>
              <li><a href="#demo" className="nav-link !text-sm">Request a Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-main mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="nav-link !text-sm">About Us</a></li>
              <li><a href="#contact" className="nav-link !text-sm">Contact</a></li>
              <li><a href="#faq" className="nav-link !text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-light pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm">© {year} Starlabs Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-muted hover:text-brand-blue"><IconFacebook /></a>
            <a href="#" className="text-text-muted hover:text-brand-blue"><IconTwitterX /></a>
            <a href="#" className="text-text-muted hover:text-brand-blue"><IconLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
