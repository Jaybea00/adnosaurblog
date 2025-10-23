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
