import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JR Compliance - Expert Business Registration & Compliance Services",
  description: "JR Compliance offers comprehensive corporate and technical compliance services including company registration, GST registration, FSSAI license, PSARA license, BIS registration, AERB registration, EPR services, and WPC approval.",
  keywords: "company registration, GST registration, FSSAI license, PSARA license, BIS registration, AERB registration, EPR services, WPC approval, compliance services, business registration India",
  authors: [{ name: "JR Compliance" }],
  icons: {
    icon: [
      // { url: "/JRlogo2.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/JRlogo2.png",
    apple: "/JRlogo2.png",
  },
  openGraph: {
    title: "JR Compliance - Expert Business Registration & Compliance Services",
    description: "Your trusted partner for all corporate and technical compliance needs in India.",
    url: "https://jrcompliance.com",
    siteName: "JR Compliance",
    locale: "en_IN",
    type: "website",
    images: ["/JRlogo2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K938HN3');`}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K938HN3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
