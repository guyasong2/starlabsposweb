"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    q: "Starlabs POS fonctionne-t-il sans connexion Internet ?",
    a: "Oui, le logiciel est conçu pour fonctionner 100% hors ligne. Toutes vos données (ventes, stocks, employés) sont stockées localement sur votre ordinateur. Une connexion n'est requise que pour les mises à jour logicielles ou la synchronisation multi-boutiques (Plan Enterprise).",
  },
  {
    id: "faq-2",
    q: "Sur quel matériel le logiciel peut-il être installé ?",
    a: "Starlabs POS est compatible avec les environnements Windows (10, 11), macOS et Linux. Il fonctionne de manière fluide sur du matériel standard de bureau (à partir de 4 Go de RAM).",
  },
  {
    id: "faq-3",
    q: "Proposez-vous une assistance pour la configuration initiale ?",
    a: "Absolument. Nous proposons un accompagnement de bout en bout incluant l'installation, le paramétrage de votre catalogue produits et la formation de vos caissiers. Notre équipe technique s'assure que vous êtes opérationnel le jour même.",
  },
  {
    id: "faq-4",
    q: "Est-il possible de gérer plusieurs points de vente simultanément ?",
    a: "Oui, notre plan Enterprise inclut un tableau de bord cloud centralisé qui consolide les données de toutes vos succursales en temps réel, vous permettant d'avoir une vue globale sur l'ensemble de votre réseau.",
  },
  {
    id: "faq-5",
    q: "Le logiciel gère-t-il les paiements Mobile Money ?",
    a: "Oui. L'interface de caisse permet de catégoriser les paiements par espèces, cartes bancaires, ou Mobile Money (MTN, Orange), facilitant ainsi votre réconciliation comptable en fin de journée.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("faq-1");

  return (
    <section id="faq" className="section-py">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <span className="tagline">Foire Aux Questions</span>
          <h2 className="heading-lg">Questions Fréquentes</h2>
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
            Vous avez une demande spécifique ?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-blue font-semibold hover:underline bg-transparent border-0 cursor-pointer p-0"
            >
              Contactez notre équipe de support.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
