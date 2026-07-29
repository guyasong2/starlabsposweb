"use client";

import { Check, X } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "25 000",
    period: "/ month",
    desc: "Ideal for small independent shops.",
    badge: null,
    features: [
      { text: "1 POS terminal",                included: true },
      { text: "Up to 200 products",            included: true },
      { text: "Sales history",                 included: true },
      { text: "Basic reports",                 included: true },
      { text: "Multi-cashier accounts",        included: false },
      { text: "Advanced inventory management", included: false },
      { text: "Priority support",              included: false },
    ],
    cta: "Start Free Trial",
    variant: "secondary" as const,
  },
  {
    id: "professional",
    name: "Professional",
    price: "55 000",
    period: "/ month",
    desc: "For growing businesses requiring total control.",
    badge: "Popular",
    features: [
      { text: "Unlimited terminals",           included: true },
      { text: "Unlimited products",            included: true },
      { text: "Complete sales history",        included: true },
      { text: "Advanced analytics & reports",  included: true },
      { text: "Multi-cashier accounts",        included: true },
      { text: "Advanced inventory management", included: true },
      { text: "12h priority support",          included: false },
    ],
    cta: "Book a Demo",
    variant: "accent" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "120 000",
    period: "/ month",
    desc: "Custom solutions for large chains and supermarkets.",
    badge: null,
    features: [
      { text: "Centralized multi-store",       included: true },
      { text: "Unlimited products & terminals",included: true },
      { text: "Business Intelligence dashboard",included: true },
      { text: "API & third-party integrations",included: true },
      { text: "Custom roles & permissions",    included: true },
      { text: "Cloud synchronization",         included: true },
      { text: "24/7 dedicated support",        included: true },
    ],
    cta: "Contact Sales",
    variant: "secondary" as const,
  },
];

export default function Pricing() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-py">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="tagline">Pricing</span>
          <h2 className="heading-lg">Transparent pricing</h2>
          <p className="text-body-md mt-4">
            Choose the plan tailored to your business size. All subscriptions include installation, updates, and a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative flex flex-col ${
                plan.badge ? "border-brand-blue ring-1 ring-brand-blue" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="heading-md !text-xl mb-2">{plan.name}</h3>
                <p className="text-body-sm min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text-main">{plan.price}</span>
                  <span className="font-semibold text-text-main">FCFA</span>
                </div>
                <div className="text-sm text-text-muted mt-1">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {f.included ? (
                      <Check size={18} className="text-brand-blue shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-border-medium shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "text-body-sm !text-text-main" : "text-body-sm"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleNav(plan.variant === "accent" ? "#demo" : "#contact")}
                className={`btn w-full btn-${plan.variant}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
