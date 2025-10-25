"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  chartImage: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Adjust the container height to the current slide to avoid large blank spaces
  useEffect(() => {
    const updateHeight = () => {
      const el = slideRefs.current[currentIndex];
      if (el) {
        setContainerHeight(el.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
  <div className="mt-12 relative max-w-[320px] md:max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-4 shadow-sm overflow-hidden">
        <div
          className="relative overflow-hidden transition-[height] duration-300"
          style={{ height: containerHeight }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="min-w-full flex flex-col md:flex-row items-center gap-5"
              >
                {/* Chart/Image Section */}
                <div className="flex-1 max-w-xs overflow-hidden rounded-2xl border border-gray-200">
                  <div className="bg-white rounded-2xl p-0 min-h-[10px] flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.chartImage}
                      alt="Analytics Chart"
                      width={200}
                      height={158}
                      className="w-full h-auto max-w-[280px] scale-110"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 relative font-roboto">
                  <div className="space-y-6">
                    <p className="text-black font-medium text-base leading-relaxed">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-11 w-10 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Next testimonial"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gray-700 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
