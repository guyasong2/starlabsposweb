"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/app/actions/lead";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm({ mode = "contact" }: { mode?: "contact" | "demo" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await submitLead({
      ...form,
      type: mode,
    });

    if (result.success) {
      setStatus("success");
    } else {
      console.error("Failed to submit lead:", result.error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-green-50 border border-green-100 rounded-lg">
        <CheckCircle2 size={48} className="text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-text-main mb-2">
          {mode === "demo" ? "Demande confirmée" : "Message envoyé"}
        </h3>
        <p className="text-body-sm text-text-muted">
          {mode === "demo"
            ? "Un expert Starlabs vous contactera d'ici quelques heures pour planifier votre démonstration."
            : "Notre équipe a bien reçu votre message et reviendra vers vous rapidement."}
        </p>
        <button
          className="btn btn-secondary btn-sm mt-6"
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", business: "", message: "" }); }}
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-red-50 border border-red-100 rounded-lg">
        <h3 className="text-xl font-semibold text-text-main mb-2">
          Une erreur est survenue
        </h3>
        <p className="text-body-sm text-text-muted">
          Veuillez réessayer plus tard ou nous contacter par téléphone.
        </p>
        <button
          className="btn btn-secondary btn-sm mt-6"
          onClick={() => setStatus("idle")}
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-text-main mb-1.5">
            Nom complet <span className="text-brand-red">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            placeholder="Ex: Jean Dupont"
            className="form-input"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium text-text-main mb-1.5">
            Email professionnel <span className="text-brand-red">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            placeholder="jean@entreprise.com"
            className="form-input"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-phone" className="block text-sm font-medium text-text-main mb-1.5">
            Téléphone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            placeholder="+237 6XX XXX XXX"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lead-business" className="block text-sm font-medium text-text-main mb-1.5">
            Nom de l'entreprise
          </label>
          <input
            id="lead-business"
            name="business"
            type="text"
            placeholder="Ex: Starlabs Group"
            className="form-input"
            value={form.business}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-text-main mb-1.5">
          {mode === "demo" ? "Détails ou disponibilités" : "Votre message"} <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          required
          rows={4}
          placeholder={
            mode === "demo"
              ? "Précisez vos disponibilités ou les fonctionnalités qui vous intéressent..."
              : "Comment pouvons-nous vous aider ?"
          }
          className="form-input resize-y"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Traitement en cours...
          </>
        ) : (
          <>
            <Send size={18} /> 
            {mode === "demo" ? "Confirmer la demande" : "Envoyer le message"}
          </>
        )}
      </button>

      <p className="text-xs text-text-light text-center mt-3">
        Vos données sont traitées de manière confidentielle et ne seront pas partagées.
      </p>
    </form>
  );
}
