"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "/screenshots/dashboard.png",
    label: "Dashboard",
    desc: "Real-time overview of sales performance",
  },
  {
    src: "/screenshots/products.png",
    label: "Catalog",
    desc: "Unified management of products, prices, and categories",
  },
  {
    src: "/screenshots/sales-history.png",
    label: "History",
    desc: "Complete traceability of transactions and receipts",
  },
  {
    src: "/screenshots/reports.png",
    label: "Analytics",
    desc: "Detailed reports on payment methods and trends",
  },
];

export default function AppPreview() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + screenshots.length) % screenshots.length);
  const next = () => setActive((a) => (a + 1) % screenshots.length);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors border ${
              active === i
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-white text-text-muted border-border-medium hover:border-text-light"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <div className="mockup-container bg-surface-alt p-2 pb-0">
        <div className="relative w-full rounded-t-sm overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={screenshots[active].src}
            alt={screenshots[active].label}
            fill
            className="object-cover border-t border-x border-border-light rounded-t-sm"
            priority={active === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-border-medium shadow-sm flex items-center justify-center text-text-main hover:bg-surface-alt transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-border-medium shadow-sm flex items-center justify-center text-text-main hover:bg-surface-alt transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <p className="text-center text-body-sm mt-3 font-medium">
        {screenshots[active].desc}
      </p>
    </div>
  );
}
