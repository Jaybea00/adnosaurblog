import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNotification from "@/components/FloatingNotification";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const polySans = localFont({
  src: "../../public/PolySans-Median.ttf",
  variable: "--font-polysans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashion dropshipping research - Find your next fashion winner today",
  description: "Increase your winning product rate up to 31% — without wasting time and money testing saturated products",
  icons: {
    icon: "/footerLogo.png",
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
      className={`${polySans.variable} ${geist.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable}`}
    >
      <body>
        <Header />
        <main className="min-h-screen pt-0  md:pt-20">{children}</main>
        <Footer />
        <FloatingNotification />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
