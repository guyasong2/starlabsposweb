import type { Metadata } from "next";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://starlabsgroup.com"),
  title: {
    default: "Starlabs POS — Smart Point of Sale for Cameroon Businesses",
    template: "%s | Starlabs POS",
  },
  description:
    "Starlabs POS is a powerful desktop point-of-sale system built for Cameroonian businesses. Manage sales, inventory, products, cashiers and reports — all in XAF.",
  keywords: [
    "POS software Cameroon",
    "point of sale Cameroon",
    "logiciel caisse Cameroun",
    "Starlabs",
    "starlabsgroup",
    "inventory management",
    "sales reporting",
    "XAF pos",
    "caisse enregistreuse Cameroun",
  ],
  authors: [{ name: "Starlabs Group", url: "https://starlabsgroup.com" }],
  creator: "Starlabs Group",
  publisher: "Starlabs Group",
  openGraph: {
    type: "website",
    locale: "en_CM",
    alternateLocale: "fr_CM",
    url: "https://starlabsgroup.com",
    siteName: "Starlabs POS",
    title: "Starlabs POS — Smart Point of Sale for Cameroon Businesses",
    description:
      "Manage your shop, track inventory, and grow your business with Starlabs POS. Built for Cameroonian businesses, priced in XAF.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starlabs POS Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starlabs POS — Smart Point of Sale",
    description:
      "The POS software built for Cameroonian businesses. Manage sales, inventory & reports.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Starlabs POS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Windows, macOS, Linux",
              offers: {
                "@type": "Offer",
                priceCurrency: "XAF",
                price: "25000",
              },
              description:
                "Point-of-sale desktop application for Cameroonian businesses",
              publisher: {
                "@type": "Organization",
                name: "Starlabs Group",
                url: "https://starlabsgroup.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
