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
  title: "PULSE AGENCY — Ordena tu marca con precisión estratégica",
  description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días. Agencia de alto valor para negocios digitales.",
  keywords: ["branding", "marketing strategy", "pulse agency", "high value brand", "diagnostico de marca"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pulseagencyusa.com",
    title: "PULSE AGENCY — Branding de Alto Valor",
    description: "Directrices estratégicas para escalar tu marca en 7 días.",
    images: [{ url: "/logo.webp" }]
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
      </head>
      <body className={`${outfit.className} min-h-screen bg-[#070A14] text-white antialiased selection:bg-cyan-400/30 selection:text-cyan-400`}>
          {/* End Google Tag Manager (noscript) */}
          {children}
      </body>
    </html>
  );
}
