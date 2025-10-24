"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Notification {
  id: number;
  title: string;
  message: string;
  icon: string;
  timeAgo: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Adnosaur",
    message: "7 Hot fashion products have been spotted!",
    icon: "/footerLogo.png",
    timeAgo: "2m ago",
  },
  {
    id: 2,
    title: "Adnosaur",
    message: "Your hand-picked winners are ready check them out now!",
    icon: "/footerLogo.png",
    timeAgo: "2m ago",
  },
];

export default function FloatingNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Robust loop: show for 5s, hide for 2s, then advance and show next
    let showTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const schedule = () => {
      showTimer = setTimeout(() => {
        setIsVisible(false);
        hideTimer = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
          setIsVisible(true);
          schedule();
        }, 2000); // hidden duration
      }, 5000); // visible duration
    };

    schedule();

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const currentNotification = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-gray-100 rounded-2xl shadow-lg px-4 py-3 flex items-start gap-3 max-w-sm border border-gray-200">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
          <Image
            src={currentNotification.icon}
            alt={currentNotification.title}
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="font-bold text-gray-900 text-sm">
              {currentNotification.title}
            </h4>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {currentNotification.timeAgo}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-snug">
            {currentNotification.message}
          </p>
        </div>
      </div>
    </div>
  );
}
