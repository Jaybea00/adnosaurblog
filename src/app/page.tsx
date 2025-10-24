import Link from "next/link";
import AnimatedNotifications from "@/components/AnimatedNotifications";
import StatsCounters from "@/components/StatsCounters";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your product research method
            <br />
            is losing you <span className="text-primary">time and money.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Product research is crucial to your success as an eCommerce
            entrepreneur, and yet, you're likely not using the right strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Post-analysis Facebook ads
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Efficient way to find most popular Facebook ads. You see
                competitive advertising in your niche and learn what is working
                in real-time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Amazon best seller
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use Amazon's best-seller list to identify trending products.
                However, this method doesn't distinguish between saturated and
                competitive niches.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Aliexpress hot products
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Browse AliExpress trending products. These products often have
                high competition, making it difficult to stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Watch how Adnosaur helps you find
            <br />
            unsaturated <span className="text-primary">
              fashion products
            </span>{" "}
            in your country.
          </h2>

          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
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

          <div className="text-center mt-8">
            <Link
              href="https://trial.adnosaur.com/"
              className="inline-block bg-primary hover:bg-primary/90 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors"
            >
              Try the automatic fashion winners list
            </Link>
            <div className="mt-4 text-sm text-gray-600">
              Try for free •{" "}
              <span className="text-primary">No Login required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Competitors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Your smartest competitors are
            <br />
            already using <span className="text-primary">Adnosaur!</span>
          </h2>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="h-64 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">
                    Chart visualization placeholder
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        "Since using Adnosaur, I've been able to identify
                        winning products much faster. The data is accurate and
                        the interface is super easy to use. I can't imagine
                        going back to manual research!"
                      </p>
                      <div className="font-semibold text-gray-900">
                        John Entrepreneur
                      </div>
                      <div className="text-sm text-gray-600">
                        eCommerce Store Owner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Features that <span className="text-gray-400">set us apart</span>
          </h2>

          <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-bold text-gray-900">
                      Feature
                    </th>
                    <th className="text-center p-6 font-bold text-primary">
                      Adnosaur
                    </th>
                    <th className="text-center p-6 font-bold text-gray-600">
                      Competitor 1
                    </th>
                    <th className="text-center p-6 font-bold text-gray-600">
                      Competitor 2
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-6 text-gray-700">Facebook ads</td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-700">
                      Tiktok Influencers ads
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-700">
                      Search unsaturated fashion products
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-700">
                      Import products to your website
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="w-6 h-6 bg-primary rounded-full mx-auto"></div>
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
            Product research tools lose their edge when used by everybody.
            Therefore, we will only allow 500 dropshippers to work with us. Lock
            in your seat now with up to 80% discount!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-lg font-bold text-gray-900 mb-4">
                Starter plan
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$10</span>
                <span className="text-gray-400 line-through ml-2">
                  from $49,99
                </span>
              </div>
              <a
                href="https://api.adnosaur.com/api/v3/stripe/create-checkout-session?planId=prod_St9CwEsOdJ7C9r&amount=10"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors mb-6 text-center"
              >
                Get started
              </a>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    2000 credits
                    <span className="group relative inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-xs cursor-help">
                      i
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64 text-left z-10">
                        <div className="font-semibold mb-2">
                          Credit usage information:
                        </div>
                        <ul className="space-y-1">
                          <li>
                            - 10 credits will be deducted
                            <br />
                            each time new entries are
                            <br />
                            loaded on the store or
                            <br />
                            product page.
                          </li>
                          <li>
                            - 10 credits will be deducted
                            <br />
                            each time a product or store
                            <br />
                            detail page is opened.
                          </li>
                          <li>
                            - 1 credit will be deducted for
                            <br />
                            each ad loaded on the ads
                            <br />
                            page.
                          </li>
                        </ul>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></span>
                      </span>
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Pre-set filters to find winners
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Magic search</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    WhatsApp customer service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Access to 5M+ fashion dropshipping ads
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Access to 550K+ fashion dropshipping products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Access to 115K+ fashion dropshipping stores
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Advanced filters on ads, products, and stores
                  </span>
                </li>
              </ul>
            </div>

            {/* Basic Plan (Most Popular) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-bold text-gray-900">
                  Basic plan
                </div>
                <div className="bg-gray-100 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$30</span>
                <span className="text-gray-400 line-through ml-2">
                  from $74,99
                </span>
              </div>
              <a
                href="https://api.adnosaur.com/api/v3/stripe/create-checkout-session?planId=prod_St9EWjEjmIhmeO&amount=30"
                className="block w-full bg-primary hover:bg-primary/90 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors mb-6 text-center"
              >
                Get started
              </a>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">
                    Everything in the starter plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    10000 credits
                    <span className="group relative inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-xs cursor-help">
                      i
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64 text-left z-10">
                        <div className="font-semibold mb-2">
                          Credit usage information:
                        </div>
                        <ul className="space-y-1">
                          <li>
                            - 10 credits will be deducted
                            <br />
                            each time new entries are
                            <br />
                            loaded on the store or
                            <br />
                            product page.
                          </li>
                          <li>
                            - 10 credits will be deducted
                            <br />
                            each time a product or store
                            <br />
                            detail page is opened.
                          </li>
                          <li>
                            - 1 credit will be deducted for
                            <br />
                            each ad loaded on the ads
                            <br />
                            page.
                          </li>
                        </ul>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></span>
                      </span>
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    One-click import competitors' product pages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    12 hand-picked bestsellers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Connect up to three stores
                  </span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-bold text-gray-900">Pro Plan</div>
                <div className="bg-gray-100 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                  Beta
                </div>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$40</span>
                <span className="text-gray-400 line-through ml-2">
                  from $99,99
                </span>
              </div>
              <a
                href="https://wa.me/31622253931?text=Hey%20Sam%2C%20I%20would%20love%20to%20be%20a%20beta%20tester%20for%20Adnosaur.%20Are%20there%20any%20spots%20left%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors mb-6 text-center"
              >
                Send us a message
              </a>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">
                    Everything in the Basic plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Unlimited credits & stores connected
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">200 AI credits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    AI-generated product pages (1 credit per product page)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    AI-generated branded product images (5 credit per image)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    AI-generated branded product videos (10 credits per video)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Auto-push products
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-4 border border-white rounded-2xl p-6">
            <details className="border-b border-gray-200 pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  How does Adnosaur save me time and money?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                Adnosaur is essentially the Facebook ads library on steroids.
                You can filter all ads, see all competitor stores for each
                product, and easily list the products you want to sell in your
                store.
              </div>
            </details>

            <details className="border-b border-gray-200 pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  How can I find the best products to sell?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                <p className="mb-2">
                  Watch this video to get started:
                  https://www.youtube.com/watch?v=2JxBEhrkVWQ
                </p>
                <p>
                  We recommend that you develop your own filters and strategy
                  over time.
                </p>
              </div>
            </details>

            <details className="border-b border-gray-200 pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  How can I estimate the saturation of a product?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                Use our saturation analysis tools to see how many competitors
                are selling similar products and evaluate market opportunities.
              </div>
            </details>

            <details className="border-b border-gray-200 pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  Why does Adnosaur focus on fashion only?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                Fashion is one of the largest and most dynamic eCommerce
                categories. By specializing in fashion, we can provide more
                accurate data and better insights specific to this market.
              </div>
            </details>

            <details className="border-b border-gray-200 pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  What is unique about Adnosaur?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                Adnosaur combines powerful ad tracking, competitor analysis, and
                product research tools in one platform, specifically optimized
                for fashion products.
              </div>
            </details>

            <details className="pb-4 group">
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <span className="text-gray-400 text-3xl flex-shrink-0 group-open:hidden leading-none">
                  +
                </span>
                <span className="text-gray-400 text-3xl flex-shrink-0 hidden group-open:inline leading-none">
                  ×
                </span>
                <span className="flex-1 font-semibold text-gray-900 text-base">
                  Why won't we add Pinterest and TikTok?
                </span>
              </summary>
              <div className="mt-3 ml-12 text-gray-600 text-sm leading-relaxed">
                We focus on Facebook ads because they provide the most
                comprehensive data and are the primary advertising platform for
                fashion products. This allows us to deliver higher quality
                insights.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
