"use client";

import { Check, X } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "25 000",
    period: "/ mois",
    desc: "Idéal pour les petites boutiques individuelles.",
    badge: null,
    features: [
      { text: "1 terminal de caisse",         included: true },
      { text: "Jusqu'à 200 produits",          included: true },
      { text: "Historique des ventes",         included: true },
      { text: "Rapports basiques",             included: true },
      { text: "Comptes multi-caissiers",       included: false },
      { text: "Gestion de stock avancée",      included: false },
      { text: "Support prioritaire",           included: false },
    ],
    cta: "Démarrer l'essai gratuit",
    variant: "secondary" as const,
  },
  {
    id: "professional",
    name: "Professional",
    price: "55 000",
    period: "/ mois",
    desc: "Pour les commerces en croissance nécessitant un contrôle total.",
    badge: "Populaire",
    features: [
      { text: "Terminaux illimités",           included: true },
      { text: "Produits illimités",            included: true },
      { text: "Historique complet",            included: true },
      { text: "Rapports et analyses avancés",  included: true },
      { text: "Comptes multi-caissiers",       included: true },
      { text: "Gestion de stock avancée",      included: true },
      { text: "Support prioritaire 12h",       included: false },
    ],
    cta: "Demander une démo",
    variant: "accent" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "120 000",
    period: "/ mois",
    desc: "Solutions sur-mesure pour les grandes chaînes et supermarchés.",
    badge: null,
    features: [
      { text: "Multi-boutiques centralisé",    included: true },
      { text: "Produits & terminaux illimités",included: true },
      { text: "Tableaux de bord BI",           included: true },
      { text: "API et intégrations tierces",   included: true },
      { text: "Rôles et permissions sur-mesure",included: true },
      { text: "Synchronisation Cloud",         included: true },
      { text: "Support dédié 24/7",            included: true },
    ],
    cta: "Contacter les ventes",
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
          <span className="tagline">Tarification</span>
          <h2 className="heading-lg">Une tarification transparente, en XAF</h2>
          <p className="text-body-md mt-4">
            Choisissez le plan adapté à la taille de votre entreprise. Tous nos abonnements incluent l'installation, les mises à jour et un essai de 14 jours.
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
                  <span className="font-semibold text-text-main">XAF</span>
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
