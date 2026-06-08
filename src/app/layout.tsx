import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContact from "@/components/layout/StickyContact";
import QuoteModal from "@/components/modals/QuoteModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virasatinteriors.com"),
  title: {
    default: "Virasat Interiors | Bespoke Luxury Interiors",
    template: "%s | Virasat Interiors",
  },
  description: "Exquisite interior design services in Mumbai, Vasai Virar, Dadar, Borivali, Malad, Ghatkopar, and surrounding areas. Premium luxury modular kitchens, wardrobes, and home interiors.",
  keywords: [
    "Interior Designers in Mumbai",
    "Luxury Interior Designers Vasai Virar",
    "Best Interior Designers Dadar",
    "Modular Kitchen Borivali",
    "Home Decor Malad",
    "Living Room Makeover Ghatkopar",
    "Bespoke Luxury Interiors Mumbai",
    "Virasat Interiors",
  ],
  authors: [{ name: "Virasat Interiors" }],
  creator: "Virasat Interiors",
  publisher: "Virasat Interiors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Virasat Interiors | Bespoke Luxury Interiors",
    description: "Exquisite interior design services in Mumbai, Vasai Virar, Dadar, Borivali, Malad, Ghatkopar, and surrounding areas. Premium luxury modular kitchens, wardrobes, and home interiors.",
    url: "https://virasatinteriors.com",
    siteName: "Virasat Interiors",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Virasat Interiors Premium Design Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virasat Interiors | Bespoke Luxury Interiors",
    description: "Exquisite interior design services in Mumbai, Vasai Virar, Dadar, Borivali, Malad, Ghatkopar, and surrounding areas. Premium luxury modular kitchens, wardrobes, and home interiors.",
    images: ["/images/hero.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesign",
              "name": "Virasat Interiors",
              "image": "https://virasatinteriors.com/images/hero.png",
              "@id": "https://virasatinteriors.com/#website",
              "url": "https://virasatinteriors.com",
              "telephone": "+91 89994 51189",
              "email": "virasatinterior@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-1804 Shree Krishna Elegance, Opposite Deep Sky Building, Madhuban",
                "addressLocality": "Vasai East",
                "addressRegion": "Maharashtra",
                "postalCode": "401208",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.3918,
                "longitude": 72.8397
              },
              "hasMap": "https://share.google/VIYpHKtU51YYsoezv",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61589067932145",
                "https://www.instagram.com/virasatinterior"
              ],
              "areaServed": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Mumbai"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Vasai Virar"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Dadar"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Borivali"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Malad"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Ghatkopar"
                }
              ]
            })
          }}
        />
        <Navbar />
        <StickyContact />
        <QuoteModal />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
