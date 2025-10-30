import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNotification from "@/components/FloatingNotification";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/PolySans-Median.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap"
        />
      </head>
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
