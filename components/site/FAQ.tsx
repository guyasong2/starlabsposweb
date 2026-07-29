"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    q: "Does Starlabs POS work without an internet connection?",
    a: "Yes, the software is designed to work 100% offline. All your data (sales, inventory, employees) is stored locally on your computer. A connection is only required for software updates or multi-store synchronization (Enterprise Plan).",
  },
  {
    id: "faq-2",
    q: "What hardware can the software be installed on?",
    a: "Starlabs POS is compatible with Windows (10, 11), macOS, and Linux environments. It runs smoothly on standard desktop hardware (from 4GB of RAM).",
  },
  {
    id: "faq-3",
    q: "Do you offer assistance for initial setup?",
    a: "Absolutely. We offer end-to-end support including installation, product catalog setup, and cashier training. Our technical team ensures you are operational on the same day.",
  },
  {
    id: "faq-4",
    q: "Is it possible to manage multiple point-of-sale locations simultaneously?",
    a: "Yes, our Enterprise plan includes a centralized cloud dashboard that consolidates data from all your branches in real-time, giving you a global view of your entire network.",
  },
  {
    id: "faq-5",
    q: "Does the software support Mobile Money payments?",
    a: "Yes. The checkout interface allows you to categorize payments by cash, bank cards, or Mobile Money (MTN, Orange), making your end-of-day accounting reconciliation much easier.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("faq-1");

  return (
    <section id="faq" className="section-py">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <span className="tagline">Frequently Asked Questions</span>
          <h2 className="heading-lg">Common Questions</h2>
        </div>

        <div className="border-t border-border-medium">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-row">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-6 text-left transition-colors hover:bg-surface focus:outline-none"
              >
                <span className={`text-lg font-semibold ${open === faq.id ? "text-brand-blue" : "text-text-main"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-text-muted transition-transform duration-200 ${
                    open === faq.id ? "rotate-180 text-brand-blue" : ""
                  }`}
                />
              </button>
              
              {open === faq.id && (
                <div className="pb-6 pr-12 text-body-md animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-body-md">
            Have a specific request?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-blue font-semibold hover:underline bg-transparent border-0 cursor-pointer p-0"
            >
              Contact our support team.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
