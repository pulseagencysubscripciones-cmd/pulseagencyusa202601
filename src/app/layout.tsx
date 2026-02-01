import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#070A14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pulseagencyusa.com'),
  title: {
    default: "PULSE AGENCY — Ordena tu marca con precisión estratégica",
    template: "%s | PULSE AGENCY"
  },
  description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días. Agencia de alto valor para negocios digitales en USA y Latam.",
  keywords: ["branding", "marketing strategy", "pulse agency", "high value brand", "diagnostico de marca", "agencia de marketing", "negocios digitales"],
  authors: [{ name: "Pulse Agency", url: "https://pulseagencyusa.com" }],
  creator: "Pulse Agency",
  publisher: "Pulse Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://pulseagencyusa.com",
    siteName: "PULSE AGENCY",
    title: "PULSE AGENCY — Branding de Alto Valor",
    description: "Directrices estratégicas para escalar tu marca en 7 días. Diagnóstico práctico para ordenar tu mensaje y atraer clientes de alto valor.",
    images: [
      {
        url: "/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Pulse Agency - Branding Estratégico",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSE AGENCY — Ordena tu marca en 7 días",
    description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas.",
    images: ["/thumbnail.webp"],
    creator: "@pulseagencyusa", // Placeholder if valid
  },
  verification: {
    google: "verification_token", // Add actual token if available to user
  },
  alternates: {
    canonical: "https://pulseagencyusa.com",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pulse Agency",
  "url": "https://pulseagencyusa.com",
  "logo": "https://pulseagencyusa.com/logo.webp",
  "sameAs": [
    "https://instagram.com/pulseagencyusa",
    "https://linkedin.com/company/pulseagencyusa"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555", // Placeholder
    "contactType": "customer service",
    "areaServed": ["US", "ES", "MX", "CO", "AR"],
    "availableLanguage": ["Spanish", "English"]
  },
  "offers": {
    "@type": "Offer",
    "name": "Pulse Visibility Sprint",
    "description": "Diagnóstico de marca y estrategia en 7 días",
    "price": "27.00",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXJ4R4F7');
          `}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} min-h-screen bg-[#070A14] text-white antialiased selection:bg-cyan-400/30 selection:text-cyan-400`}>
          {/* End Google Tag Manager (noscript) */}
          {children}
      </body>
    </html>
  );
}
