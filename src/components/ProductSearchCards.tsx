"use client";

import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export default function ProductSearchCards() {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Find winning Facebook ads",
      description:
        "Choose one of your hand-picked bestsellers or go to our Ads page and use the search, filter, and sort tools to find winning Facebook ads. You can use our predefined filters as your starting point.",
      iconPath: "/winningFbAds.svg",
    },
    {
      id: 2,
      title: "See who's selling the product",
      description:
        "Our in-depth product data shows all competitors actively advertising this product on Facebook, which will show you which countries the product is saturated in and which competitors get the best traction.",
      iconPath: "/product selling.svg",
    },
    {
      id: 3,
      title: "List the product on Shopify & start selling",
      description:
        "Found a good competitor? Copy their product listing with our one-click import feature, make some small changes, and start testing your new product.",
      iconPath: "/listproduct.svg",
    },
  ];

  return (
    <div className="max-w-[1100px] md:max-w-[900px] lg:max-w-[1400px] mx-auto px-2 md:px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 justify-items-center md:justify-items-stretch">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative bg-white rounded-2xl p-5 md:p-7 lg:p-8 transition-shadow w-full max-w-[400px] md:max-w-[320px] md:min-w-[300px] lg:max-w-none lg:min-w-[380px] mx-auto"
          >
            {/* Numbered Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#7DFF7D] rounded-full flex items-center justify-center shadow-lg z-10">
              <span className="text-black text-2xl font-bold">{card.id}</span>
            </div>

            {/* Icon/Image Area */}
            <div className=" mb-4 flex items-center justify-center">
              <Image
                src={card.iconPath}
                alt={card.title}
                width={600}
                height={450}
                className="w-full h-auto max-w-[360px] md:max-w-[300px] lg:max-w-none lg:min-w-[340px]"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed font-normal text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
