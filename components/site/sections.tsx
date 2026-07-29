"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  FileSpreadsheet,
  Bell,
  Shield,
  Smartphone,
  ArrowRight,
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
                La gestion de point de vente, <span className="text-brand-blue">simplifiée.</span>
              </h1>
              <p className="text-body-lg mt-6 max-w-xl">
                Un logiciel de caisse robuste et fiable conçu pour les entreprises du Cameroun. Gérez vos ventes, stocks et rapports sans dépendre d'une connexion internet.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button onClick={() => setDemoOpen(true)} className="btn btn-primary btn-lg">
                  Réserver une démo
                </button>
                <a href="#features" className="btn btn-secondary btn-lg">
                  Découvrir les fonctionnalités
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-8 flex items-center gap-6 text-body-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> 14 jours d'essai
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> 100% Hors ligne
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> Support local
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
    title: "Caisse Rapide",
    desc: "Traitez vos encaissements instantanément. Compatible avec les paiements en espèces, Mobile Money et terminaux bancaires.",
  },
  {
    id: "feat-inventory",
    icon: <Package size={24} />,
    title: "Gestion des Stocks",
    desc: "Suivi en temps réel. Recevez des alertes automatiques de réapprovisionnement pour éviter les ruptures.",
  },
  {
    id: "feat-reports",
    icon: <BarChart3 size={24} />,
    title: "Tableaux de Bord",
    desc: "Visualisez vos performances de vente, vos marges et l'activité de vos caissiers en un coup d'œil.",
  },
  {
    id: "feat-cashiers",
    icon: <Users size={24} />,
    title: "Comptes Multiples",
    desc: "Créez des profils dédiés pour vos employés avec des droits d'accès stricts et des journaux d'activité.",
  },
  {
    id: "feat-excel",
    icon: <FileSpreadsheet size={24} />,
    title: "Exports Comptables",
    desc: "Générez des rapports au format Excel (.xlsx) facilement intégrables dans vos logiciels de comptabilité.",
  },
  {
    id: "feat-offline",
    icon: <Smartphone size={24} />,
    title: "100% Hors Ligne",
    desc: "Ne dépendez plus d'internet. Le logiciel fonctionne localement sur votre machine (Windows, Mac, Linux).",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-py bg-surface-alt">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="tagline">Fonctionnalités</span>
          <h2 className="heading-lg">Outils complets pour commerçants exigeants</h2>
          <p className="text-body-md mt-4">
            Tout ce dont vous avez besoin pour piloter votre activité commerciale de A à Z, rassemblé dans une interface claire et intuitive.
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
  { value: "500+", label: "Boutiques Équipées" },
  { value: "98%",  label: "Taux de Satisfaction" },
  { value: "24/7", label: "Assistance Technique" },
  { value: "XAF",  label: "Devise Native" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-py">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tagline">Notre Expertise</span>
            <h2 className="heading-lg mb-6">Développé au Cameroun, pour les réalités locales</h2>
            <div className="space-y-4 text-body-md">
              <p>
                Starlabs Group conçoit des solutions logicielles qui répondent aux véritables défis des entreprises africaines. Nous savons qu'une connexion internet instable ne doit pas bloquer vos ventes.
              </p>
              <p>
                C'est pourquoi Starlabs POS a été pensé dès le premier jour comme une solution de bureau robuste, sécurisée, et capable de fonctionner en totale autonomie, tout en gérant nativement vos transactions en Francs CFA (XAF).
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
            <span className="tagline">Démonstration</span>
            <h2 className="heading-md mb-4">Prêt à optimiser votre gestion ?</h2>
            <p className="text-body-md mb-8">
              Laissez-nous vous montrer comment Starlabs POS s'adapte à votre secteur d'activité. Réservez un échange de 30 minutes avec un expert.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Audit rapide de vos besoins actuels</span>
              </div>
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Présentation de l'interface en direct</span>
              </div>
              <div className="flex items-center gap-3 text-body-md">
                <CheckCircle2 size={20} className="text-brand-blue" />
                <span>Configuration de votre période d'essai</span>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border-medium">
              <h3 className="font-semibold text-text-main mb-4">Ou contactez-nous directement :</h3>
              <div className="space-y-3">
                <a href="tel:+237600000000" className="flex items-center gap-3 text-body-md hover:text-brand-blue">
                  <Phone size={18} /> +237 6XX XXX XXX
                </a>
                <a href="mailto:contact@starlabsgroup.com" className="flex items-center gap-3 text-body-md hover:text-brand-blue">
                  <Mail size={18} /> contact@starlabsgroup.com
                </a>
                <div className="flex items-center gap-3 text-body-md">
                  <MapPin size={18} /> Yaoundé, Cameroun
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card">
            <h3 className="heading-md !text-xl mb-6">Demander une démo</h3>
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
              Solutions logicielles professionnelles pour la gestion d'entreprise en Afrique centrale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-main mb-4">Produit</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="nav-link !text-sm">Fonctionnalités</a></li>
              <li><a href="#pricing" className="nav-link !text-sm">Tarifs</a></li>
              <li><a href="#demo" className="nav-link !text-sm">Demander une démo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-main mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="nav-link !text-sm">À propos</a></li>
              <li><a href="#contact" className="nav-link !text-sm">Contact</a></li>
              <li><a href="#faq" className="nav-link !text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-light pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm">© {year} Starlabs Group. Tous droits réservés.</p>
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
