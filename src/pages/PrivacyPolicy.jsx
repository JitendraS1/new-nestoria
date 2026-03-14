import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";
import { getLocalBusinessSchema } from "../utils/SchemaMarkup";

const PrivacyPolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate local business schema for SEO
  const businessSchema = getLocalBusinessSchema({
    name: "Nestoria Group",
    description: "Leading real estate developer in Dholera SIR, Gujarat offering residential, commercial and industrial properties.",
    url: "https://nestoriagroup.com",
    telephone: "+91-9213005611",
    email: "info@nestoriagroup.com",
    address: {
      streetAddress: "3rd Floor, Sarthik Annexe, Satellite Road",
      addressLocality: "Iskon Cross Road, Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN"
    },
    geo: {
      latitude: "23.0358",
      longitude: "72.5456"
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00"
  });

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Helmet */}
      <div className="hidden">
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </div>
      
      {/* Page Header */}
      <ParallaxSection
        backgroundImage={"/src/assets/img/about.webp"}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Privacy <span className="text-blue-300">Policy</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-shield-alt mr-2"></i>
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-home mr-2"></i>
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <ParallaxScroll speed={0.05}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-blue max-w-none">
                <div className="text-center mb-12 md:mb-16">
                  <h6 className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 uppercase tracking-wider">
                    Information Protection
                  </h6>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                    Our <span className="text-blue-600">Privacy Policy</span>
                  </h2>
                  <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 sm:mb-8"></div>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Introduction */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-info-circle text-blue-600 mr-3"></i>
                      1. Introduction
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Welcome to www.nestoriagroup.com, operated by Nestoria Group ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our real estate services, including inquiries regarding properties in Dholera SIR and other regions.
                    </p>
                  </article>

                  {/* Information Collection */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-database text-blue-600 mr-3"></i>
                      2. Information We Collect
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                      We may collect the following types of information:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Personal Information:</h4>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                          Name, email address, phone number, physical address, and any other details you provide when filling out our contact forms, subscribing to our newsletter, or requesting property consultations.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Non-Personal Information:</h4>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                          Browser type, IP address, device information, operating system, and pages visited on our site. We collect this data through cookies and similar tracking technologies to improve user experience.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* How We Use Information */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-tools text-blue-600 mr-3"></i>
                      3. How We Use Your Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                      <li>Provide, operate, and maintain our website.</li>
                      <li>Respond to your real estate inquiries, schedule site visits, or process investment advisory requests.</li>
                      <li>Send periodic emails, including newsletters, updates regarding Dholera SIR projects, and promotional materials (you may opt out at any time).</li>
                      <li>Improve our website, services, and customer support.</li>
                      <li>Comply with legal obligations and property documentation requirements.</li>
                    </ul>
                  </article>

                  {/* Sharing Information */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-share-alt text-blue-600 mr-3"></i>
                      4. Sharing Your Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                      We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Service Providers:</h4>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                          With trusted third-party vendors who assist us in website hosting, email delivery, or real estate marketing, under strict confidentiality agreements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements:</h4>
                        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                          When required by law, regulation, or a government request (e.g., property registration protocols in Gujarat/India).
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Cookies and Tracking */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-cookie-bite text-blue-600 mr-3"></i>
                      5. Cookies and Tracking
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.
                    </p>
                  </article>

                  {/* Data Security */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-shield-alt text-blue-600 mr-3"></i>
                      6. Data Security
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.
                    </p>
                  </article>

                  {/* Third-Party Links */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-external-link-alt text-blue-600 mr-3"></i>
                      7. Third-Party Links
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Our website may contain links to third-party sites (e.g., government portals for Dholera SIR news or social media platforms). We are not responsible for the privacy practices of these external sites.
                    </p>
                  </article>

                  {/* Contact Us */}
                  <article className="bg-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-blue-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-envelope text-blue-600 mr-3"></i>
                      8. Contact Us
                    </h3>
                    <p className="text-blue-700 leading-relaxed text-base sm:text-lg mb-4">
                      If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
                    </p>
                    <div className="space-y-3">
                      <p className="text-blue-700">
                        <strong>Address:</strong> 3rd Floor, Sarthik Annexe, Satellite Road, Iskon Cross Road, Ahmedabad - 380015, Gujarat, India
                      </p>
                      <p className="text-blue-700">
                        <strong>Phone:</strong> +91-9213005611
                      </p>
                      <p className="text-blue-700">
                        <strong>Email:</strong> <a href="mailto:info@nestoriagroup.com" className="text-blue-600 hover:text-blue-800 underline">info@nestoriagroup.com</a>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;