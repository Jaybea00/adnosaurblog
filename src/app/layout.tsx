import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNotification from "@/components/FloatingNotification";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
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
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <FloatingNotification />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
