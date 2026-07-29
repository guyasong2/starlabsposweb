"use client";

import { useEffect } from "react";
import { X, CalendarCheck } from "lucide-react";
import LeadForm from "./LeadForm";

interface DemoDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoDialog({ open, onClose }: DemoDialogProps) {
  // Trap focus & ESC key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-surface-alt">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <CalendarCheck size={18} />
            </div>
            <div>
              <h2 className="font-semibold text-text-main">Book a Demo</h2>
              <p className="text-xs text-text-muted">Free · No commitment · 30 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-border-light text-text-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6">
          <LeadForm mode="demo" />
        </div>
      </div>
    </div>
  );
}
