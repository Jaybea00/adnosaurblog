"use client";

import { useEffect, useRef, useState } from "react";

type VideoOnScrollProps = {
  videoId: string;
  className?: string;
  title?: string;
};

const BASE_QUERY = "mute=1&rel=0&modestbranding=1&playsinline=1";

export default function VideoOnScroll({
  videoId,
  className = "",
  title = "Video player",
}: VideoOnScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(
    `https://www.youtube.com/embed/${videoId}?${BASE_QUERY}`
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAutoplay(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldAutoplay) {
      setIframeSrc(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&${BASE_QUERY}`
      );
    }
  }, [shouldAutoplay, videoId]);

  return (
    <div ref={containerRef} className={className}>
      <div className="relative pb-[62%] md:pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
