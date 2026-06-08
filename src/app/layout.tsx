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
  description: "Exquisite interior design services for residential and commercial spaces. Heritage aesthetics meets modern luxury in modular kitchens, wardrobes, and living rooms.",
  keywords: [
    "Interior Design Mumbai",
    "Bespoke Luxury Interiors",
    "Modular Kitchen Mumbai",
    "Heritage Home Decor",
    "Premium Wardrobes",
    "Living Room Makeover",
    "Virasat Interiors",
    "Home Interior Services India",
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
    description: "Exquisite interior design services for residential and commercial spaces. Heritage aesthetics meets modern luxury in modular kitchens, wardrobes, and living rooms.",
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
    description: "Exquisite interior design & luxury home styling. Heritage elements styled with contemporary aesthetics.",
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
