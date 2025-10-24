import Link from "next/link";
import AnimatedNotifications from "@/components/AnimatedNotifications";
import StatsCounters from "@/components/StatsCounters";
import ProductSearchCards from "@/components/ProductSearchCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";

// Small helper for green/orange round badges with a white check
const CircleCheck = ({ color = "green" }: { color?: "green" | "orange" }) => (
  <div
    className={`w-5 h-5 rounded-full mx-auto flex items-center justify-center ${
      color === "orange" ? "bg-orange-400" : "bg-primary"
    }`}
  >
    <svg
      className="w-3 h-3 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

// Image/Video tooltip badge (supports single image, video, or before/after pair)
const InfoBadge = ({
  src,
  videoSrc,
  beforeSrc,
  afterSrc,
  title = "More info",
}: {
  src?: string;
  videoSrc?: string;
  beforeSrc?: string;
  afterSrc?: string;
  title?: string;
}) => (
  <span className="relative inline-flex items-center group" aria-label="info" title={title}>
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-700 text-[10px] font-bold leading-none bg-white">i</span>
    <span
      className="absolute left-1/2 z-50 mt-2 -translate-x-[-25%] -translate-y-15 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
      role="tooltip"
    >
      {/* Video tooltip */}
      {videoSrc ? (
        <span className="relative block w-24 sm:w-28 h-48 bg-white rounded-xl shadow-xl border-2 border-black overflow-hidden">
          <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </span>
      ) : src ? (
        /* Single image tooltip */
        <span className="relative block w-24 sm:w-28 h-56 bg-white rounded-xl shadow-xl border-2 border-black overflow-hidden">
          <Image src={src} alt={title} fill className="object-cover" />
        </span>
      ) : (
        <span className="block w-44 sm:w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <span className="relative block h-24 w-44 sm:w-56">
            {beforeSrc && (
              <Image src={beforeSrc} alt="Before" fill className="object-cover" />
            )}
            <span className="absolute top-1 right-1 text-[10px] bg-black/70 text-white px-1.5 rounded">Before</span>
          </span>
          <span className="relative block h-24 w-44 sm:w-56 border-t border-gray-200">
            {afterSrc && (
              <Image src={afterSrc} alt="After" fill className="object-cover" />
            )}
            <span className="absolute top-1 right-1 text-[10px] bg-black/70 text-white px-1.5 rounded">After</span>
          </span>
        </span>
      )}
    </span>
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative text-white py-12  overflow-visible flex items-center justify-center min-h-[90vh]">
        <div className="max-w-[1200px] w-full mx-auto px-4">
          {/* Contained card with rounded corners */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 pb-32 md:pb-90 relative overflow-hidden">
            <div className="text-center relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Find and list unsaturated{" "}
                <span className="text-primary">
                  winning
                  <br />
                  fashion products
                </span>{" "}
                in seconds.
              </h1>

              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-4xl mx-auto">
                Increase your winning product rate up to 31%* — without wasting
                time and money testing saturated products.
              </p>

              <div className="space-y-3 mb-8 max-w-2xl mx-auto text-left text-base">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white">
                    <span className="font-semibold">
                      Copy product listings:
                    </span>{" "}
                    Copy the product page of your competitors in one click.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white">
                    <span className="font-semibold">Hand-picked winners:</span>{" "}
                    Get products matched directly to your niche and country.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white">
                    <span className="font-semibold">Limited to 500 users:</span>{" "}
                    Keeping products unsaturated and profits high.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Link
                  href="https://trial.adnosaur.com/"
                  className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-2xl transition-colors text-base"
                >
                  Find unsaturated fashion winners now
                </Link>
                <button className="border border-white/30 text-white hover:bg-white/5 font-medium py-4 px-8 rounded-2xl transition-colors text-base">
                  See how it works
                </button>
              </div>

              {/* Stats Cards with Images - Positioned at bottom edge */}
              <div className="absolute left-4 right-4 md:left-12 md:right-12 -bottom-20 md:-bottom-115 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 perspective-1000">
                {/* Before Card */}
                <div className="relative transform md:-rotate-3 hover:rotate-0 transition-transform duration-300 md:scale-x-90">
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black text-sm md:text-base font-extrabold px-5 py-2 rounded-full shadow-[1px_7px_0_rgba(0,0,0,1)]
 z-10"
                  >
                    Before
                  </div>
                  <img
                    src="/Image 1.png"
                    alt="Before - Total sales €1,782"
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>

                {/* After Card */}
                <div className="relative transform md:rotate-3 hover:rotate-0 transition-transform duration-300 md:scale-x-90">
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black text-sm md:text-base font-extrabold px-5 py-2 rounded-full shadow-[1px_7px_0_rgba(0,0,0,1)]
 z-10"
                  >
                    After
                  </div>
                  <div className="relative">
                    <img
                      src="/Image 2.png"
                      alt="After - Total sales €247,058"
                      className="w-full h-auto rounded-xl shadow-xl"
                    />
                    {/* Animated Notifications Overlay */}
                    <AnimatedNotifications />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counters */}
      {/* inserted after hero */}
      <StatsCounters
        stats={[
          { id: "stores", label: "STORES LISTED", value: 115426 },
          { id: "products", label: "PRODUCTS LISTED", value: 568962 },
          { id: "ads", label: "ADS SCRAPED & UPDATED DAILY", value: 5144710 },
        ]}
      />

      {/* Product Research Method Section */}
      <section className="py-25 px-4 bg-transparent ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-15">
            Your product research method
            <br />
            is losing you <span className="text-[#bfbfbd]">time and money.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-8">
           Don’t base your product research on only one successful ad or inaccurate Shopify revenue trackers. Use the following method to analyze every competitor for each product before running ads and increase your winning product rate to 31%*.
          </p>

              {/* Product Search Cards Section */}
      <section className="px-4 bg-transparent">
        <ProductSearchCards />
      </section>
        </div>
      </section>

      {/* Video Section */}
      <section className=" px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center leading-15">
            Watch how Adnosaur helps you find
            <br />
            <span className="text-[#949494]">
              unsaturated fashion products
            </span>{" "}
            in your country.
          </h2>

          <div className="mt-12 rounded-[2.5rem] overflow-hidden ">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/3sqzo_CmXWM"
                title="Adnosaur Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://trial.adnosaur.com/"
                className="inline-block bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-2xl transition-colors"
              >
                Find unsaturated fashion winners now
              </Link>
              <Link
                href="https://trial.adnosaur.com/"
                className="inline-block border-1 border-gray-300 hover:border-gray-500bg-transparent text-gray-700 font-medium py-4 px-8 rounded-2xl transition-colors"
              >
                Try for free <span className="text-gray-400">- No login required</span>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Competitors Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center leading-16">
            Your smartest competitors are
            <br />
            already using <span className="text-[#949494]">Adnosaur!</span>
          </h2>

          {/* testimonial section */}
          <TestimonialCarousel
            testimonials={[
              {
                id: 1,
                quote:
                  "I have used Adnosaur for the past 7 months. Our winning rate went from 16% to 31% in the first two weeks of usage, which was crazy. Currently, we are at around 28%. The tool is great, but what is even better is the support from Sam and Tim. They are always ready to answer any questions and have even hopped on a call a few times to help me.",
                name: "Anne",
                title: "7 Figure Dropshipper",
                avatar: "/Anne.avif",
                chartImage: "/AnneSlide.avif",
              },
              {
                id: 2,
                quote:
                  "The only tool I ever worked with that keeps improving and listens to its client base. Stumbled across the owners on Discord, had a quick conversation, tried it, and never looked back.",
                name: "Aiden",
                title: "7 Figure Dropshipper",
                avatar: "/Aiden.avif",
                chartImage: "/AidenSlide.avif",
              },
              {
                id: 3,
                quote:
                  "Long-time user here. I recently got access to the small beta group testing out the AI-generated product page, product images, and product videos. The videos are still a little rough, but this is a real game-changer. I can now brand my full store without any photo shoot.",
                name: "Brian",
                title: "8 Figure Dropshipper",
                avatar: "/Brian.avif",
                chartImage: "/BrianSlide.avif",
              },
            ]}
          />
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 px-4 bg-transparent overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-900 mb-12 ">
            Features that <span className="text-gray-400">set us apart</span>
          </h2>

          <div className="bg-white rounded-2xl overflow-visible">
            <div>
              <table className="w-full">
                <thead>
                  <tr className="">
                    <th className="text-left py-5 px-4 font-medium text-xs text-gray-500 bg-white rounded-l-full"></th>
                    <th className="text-center py-5 px-4 font-semibold text-xs text-gray-900 relative  border-t-4 border-[#8fff87] bg-[#F6FFF4] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-primary before:rounded-t-full">
                      Adnosaur
                    </th>
                    <th className="text-center py-5 px-4 font-medium text-xs text-gray-500  border-gray-200 bg-white">
                      Competitor 1
                    </th>
                    <th className="text-center py-5 px-4 font-medium text-xs text-gray-500  border-gray-200 bg-white rounded-r-full">
                      Competitor 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Spacer row to create a gap between header and first row */}
                  <tr aria-hidden className="h-3 bg-[#f9f9f7]"><td colSpan={4} className="p-0"></td></tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-xs text-gray-900">Facebook ads</td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-xs text-gray-900">
                      Tiktok/Pinterest ads
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-xs text-gray-900">
                      Import/copy competitor product listings
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs"><CircleCheck /></span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-xs text-gray-900">
                      Product focused approach
                       <div className="text-[10px] text-gray-400 mt-0.5">See all competitors for each product</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck color="orange" />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">  <CircleCheck color="orange" /></span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="text-xs text-gray-900">Focus</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Only focuses on one specific niche and platform.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="text-xs text-gray-900">Fair pricing</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Don’t work with coaches who take 50% affiliate fee.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                       <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="text-xs text-gray-900">Protection against saturation</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Only work with a limited number of dropshippers.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                       <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                        <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-900">AI product listing</span>
                        <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-medium">BETA</span>
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Replace your product lister with better quality AI listings.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                       <CircleCheck color="orange" />
                      
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                     <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-900">AI product images</span>
                        <InfoBadge src="/firsttooltipImg.avif" title="Preview" />
                        <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-medium">BETA</span>
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Brand your store with AI fashion models.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <CircleCheck color="orange" />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-900">AI product videos</span>
                        <InfoBadge videoSrc="/tooltipvideo.mp4" title="Video Preview" />
                        <span className="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-medium">BETA</span>
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Brand your store with AI fashion videos.</div>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200 bg-[#F6FFF4]">
                      <CircleCheck />
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                    <td className="py-3 px-4 text-center border-l border-gray-200">
                      <span className="text-gray-400 text-xs">×</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Lock in your seat for a{" "}
            <span className="text-primary">fair price</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the plan that works best for you. All plans include our core
            features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-semibold text-gray-600 mb-2">
                Starter plan
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">$10</div>
              <div className="text-sm text-gray-500 mb-6">per month</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    10 product searches
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Email support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-6 rounded-full transition-colors">
                Choose plan
              </button>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-gray-600 mb-2">
                Growth plan
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">$30</div>
              <div className="text-sm text-gray-500 mb-6">per month</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    100 product searches
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Advanced analytics
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Priority support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Export to Shopify
                  </span>
                </li>
              </ul>
              <button className="w-full bg-primary hover:bg-primary/90 text-gray-900 font-bold py-3 px-6 rounded-full transition-colors">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-semibold text-gray-600 mb-2">
                Pro plan
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">$40</div>
              <div className="text-sm text-gray-500 mb-6">per month</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Unlimited searches
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    All features included
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Custom integrations
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">API access</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-6 rounded-full transition-colors">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-gray-900 text-lg">
                How does Adnosaur save me time and money?
              </summary>
              <p className="mt-4 text-gray-600">
                Adnosaur automates the product research process, allowing you to
                find winning products in seconds rather than hours. This means
                you can focus on growing your business instead of spending time
                on manual research.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-gray-900 text-lg">
                What are the best product discovery tools?
              </summary>
              <p className="mt-4 text-gray-600">
                Adnosaur provides comprehensive tools including Facebook ads
                analysis, TikTok influencer tracking, and unsaturated product
                discovery specifically for fashion products.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-gray-900 text-lg">
                Can I use Adnosaur for other niches or is it just fashion?
              </summary>
              <p className="mt-4 text-gray-600">
                While Adnosaur is optimized for fashion products, many of its
                features can be valuable for other product categories as well.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-gray-900 text-lg">
                Why does Adnosaur focus on fashion products?
              </summary>
              <p className="mt-4 text-gray-600">
                Fashion is one of the largest and most dynamic eCommerce
                categories. By specializing in fashion, we can provide more
                accurate data and better insights specific to this market.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-gray-900 text-lg">
                What is more about Adnosaur and pricing?
              </summary>
              <p className="mt-4 text-gray-600">
                Adnosaur offers flexible pricing plans to suit businesses of all
                sizes. We provide transparent pricing with no hidden fees, and
                you can cancel anytime.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to learn more about product research?
          </h2>
          <p className="text-gray-600 mb-8">
            Check out our blog for tips, strategies, and insights on finding
            winning products.
          </p>
          <Link
            href="/blog"
            className="inline-block border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Visit our blog
          </Link>
        </div>
      </section>
    </div>
  );
}
