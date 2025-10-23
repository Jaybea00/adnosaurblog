"use client";

import { useState, useEffect } from "react";

const notifications = [
  {
    id: 1,
    logo: "/shopifyicon.png",
    title: "Shopify",
    message:
      "You have a new order for 2 items totaling 75,90 € from online store",
    time: "10min",
  },
  {
    id: 2,
    logo: "/shopifyicon.png",
    title: "Shopify",
    message:
      "You have a new order for 1 item totaling 39,90 € from online store",
    time: "15min",
  },
  {
    id: 3,
    logo: "/shopifyicon.png",
    title: "Shopify",
    message:
      "You have a new order for 3 items totaling 120,50 € from online store",
    time: "22min",
  },
];

export default function AnimatedNotifications() {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % notifications.length;
        setVisibleNotifications([next]);
        return next;
      });
    }, 3000); // Show new notification every 3 seconds

    // Show first notification immediately
    setVisibleNotifications([0]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 space-y-2 z-10">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`
            bg-[#cccaca] rounded-lg shadow-lg p-3 max-w-xs transform transition-all duration-500
            ${
              visibleNotifications.includes(index)
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
              <img
                src={notification.logo}
                alt="Shopify logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-gray-900 text-sm">
                  {notification.title}
                </span>
                <span className="text-xs text-gray-500">
                  {notification.time}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed text-left">
                {notification.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
