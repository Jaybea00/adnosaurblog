"use client";

import dynamic from "next/dynamic";

const FloatingNotification = dynamic(
  () => import("@/components/FloatingNotification"),
  { ssr: false }
);
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), {
  ssr: false,
});

export default function LazyClientComponents() {
  return (
    <>
      <FloatingNotification />
      <WhatsAppFloat />
    </>
  );
}
