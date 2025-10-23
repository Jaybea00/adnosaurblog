import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Logo and Description - Left Side */}
          <div className="md:max-w-md">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/footerLogo.png"
                alt="Adnosaur Logo"
                className="h-8 w-auto max-w-24"
              />
              <img
                src="/footer2.png"
                alt="Adnosaur Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm w-1/3">
              *Within two weeks, our biggest beta client's winning rate improved
              from 16% to 31% on average across six stores.
            </p>
          </div>

          {/* Links Sections - Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 lg:gap-30">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">PRACTICAL LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://app.adnosaur.com/login"
                    className="text-gray-800 hover:text-primary transition-colors text-sm"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://trial.adnosaur.com/"
                    className="text-gray-800 hover:text-primary transition-colors text-sm"
                  >
                    Try now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">CONTACT US</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://adnosaur.com/contact"
                    className="text-gray-800 hover:text-primary transition-colors text-sm"
                  >
                    Support page
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://support@adnosaur.com/"
                    className="text-gray-800 hover:text-primary transition-colors text-sm"
                  >
                    support@adnosaur.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">FOLLOW US</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.tiktok.com/@adnosaur"
                    className="flex items-center space-x-2 text-gray-800  transition-colors group text-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="#8fff87"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span>Tiktok</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adnosaur/"
                    className="flex items-center space-x-2 text-gray-800  transition-colors group text-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="#8fff87"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Adnosaur"
                    className="flex items-center space-x-2 text-gray-800  transition-colors group text-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="#8fff87"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-tertiary mt-4 pt-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-gray-800 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Adnosaur. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="https://blog.adnosaur.com/privacy-statement-eu/"
                className="text-gray-800 hover:text-primary transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://blog.adnosaur.com/terms-and-conditions"
                className="text-gray-800 hover:text-primary transition-colors underline"
              >
                Terms of Service
              </Link>
              <Link
                href="https://blog.adnosaur.com/cookie-policy-eu/"
                className="text-gray-800 hover:text-primary transition-colors underline"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
