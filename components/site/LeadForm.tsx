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

  return (
    <div className="relative">
      {status === "success" && (
        <div key="success-state" className="flex flex-col items-center justify-center text-center py-12 px-6 bg-green-50 border border-green-100 rounded-lg">
          <CheckCircle2 size={48} className="text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-text-main mb-2">
            {mode === "demo" ? "Request Confirmed" : "Message Sent"}
          </h3>
          <p className="text-body-sm text-text-muted">
            {mode === "demo"
              ? "A Starlabs expert will contact you within a few hours to schedule your demonstration."
              : "Our team has received your message and will get back to you shortly."}
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm mt-6"
            onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", business: "", message: "" }); }}
          >
            New Request
          </button>
        </div>
      )}

      {status === "error" && (
        <div key="error-state" className="flex flex-col items-center justify-center text-center py-12 px-6 bg-red-50 border border-red-100 rounded-lg">
          <h3 className="text-xl font-semibold text-text-main mb-2">
            An error occurred
          </h3>
          <p className="text-body-sm text-text-muted">
            Please try again later or contact us by phone.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm mt-6"
            onClick={() => setStatus("idle")}
          >
            Try Again
          </button>
        </div>
      )}

      {(status === "idle" || status === "loading") && (
        <form key="form-state" onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-text-main mb-1.5">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                required
                placeholder="e.g. John Doe"
                className="form-input"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lead-email" className="block text-sm font-medium text-text-main mb-1.5">
                Business Email <span className="text-brand-red">*</span>
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="form-input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-phone" className="block text-sm font-medium text-text-main mb-1.5">
                Phone Number
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="+237 678-11-38-41"
                className="form-input"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lead-business" className="block text-sm font-medium text-text-main mb-1.5">
                Company Name
              </label>
              <input
                id="lead-business"
                name="business"
                type="text"
                placeholder="e.g. Starlabs Group"
                className="form-input"
                value={form.business}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-message" className="block text-sm font-medium text-text-main mb-1.5">
              {mode === "demo" ? "Details or Availability" : "Your Message"} <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="lead-message"
              name="message"
              required
              rows={4}
              placeholder={
                mode === "demo"
                  ? "Specify your availability or the features you are interested in..."
                  : "How can we help you?"
              }
              className="form-input resize-y"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            {status === "loading" && <Loader2 size={18} className="animate-spin" />}
            {status !== "loading" && <Send size={18} />}
            <span>
              {status === "loading" ? "Processing..." : mode === "demo" ? "Confirm Request" : "Send Message"}
            </span>
          </button>

          <p className="text-xs text-text-light text-center mt-3">
            Your data is treated confidentially and will not be shared.
          </p>
        </form>
      )}
    </div>
  );
}
