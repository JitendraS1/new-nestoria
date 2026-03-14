import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";
import { getLocalBusinessSchema } from "../utils/SchemaMarkup";

const TermsAndConditions = () => {
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
              Terms & <span className="text-blue-300">Conditions</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-file-contract mr-2"></i>
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

      {/* Terms and Conditions Content */}
      <section className="py-16 md:py-24 bg-white">
        <ParallaxScroll speed={0.05}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-blue max-w-none">
                <div className="text-center mb-12 md:mb-16">
                  <h6 className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 uppercase tracking-wider">
                    Legal Agreement
                  </h6>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                    Our <span className="text-blue-600">Terms & Conditions</span>
                  </h2>
                  <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 sm:mb-8"></div>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Agreement to Terms */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-handshake text-blue-600 mr-3"></i>
                      1. Agreement to Terms
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      By accessing and using www.nestoriagroup.com (the "Website"), you agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
                    </p>
                  </article>

                  {/* Services Overview */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-building text-blue-600 mr-3"></i>
                      2. Services Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Nestoria Group is a real estate developer offering advisory, sales, and investment services for residential, commercial, and industrial properties, particularly in Dholera Special Investment Region (SIR). The information provided on this website is for general informational purposes and does not constitute a binding legal offer or financial advice until formal agreements are signed.
                    </p>
                  </article>

                  {/* Property Information and Accuracy */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-info-circle text-blue-600 mr-3"></i>
                      3. Property Information and Accuracy
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      While we strive to ensure that all property details, layouts, pricing, and Dholera SIR infrastructure updates on the Website are accurate and up to date, we make no warranties or representations regarding the completeness or accuracy of the information. Property prices and availability are subject to change without prior notice. Visual representations, including images and gallery pictures, are indicative and may differ from actual developments.
                    </p>
                  </article>

                  {/* Intellectual Property Rights */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-copyright text-blue-600 mr-3"></i>
                      4. Intellectual Property Rights
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      All content, logos, text, graphics, images, software, and overall design of this Website are the exclusive property of Nestoria Group and are protected by Indian and international copyright laws. You may not reproduce, distribute, or use any content from our Website for commercial purposes without our express written consent.
                    </p>
                  </article>

                  {/* User Conduct */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-user-check text-blue-600 mr-3"></i>
                      5. User Conduct
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                      When using our Website, you agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                      <li>Submit false or misleading information via our contact forms.</li>
                      <li>Attempt to gain unauthorized access to our servers, databases, or website infrastructure.</li>
                      <li>Use the Website for any unlawful activities or to upload malicious software.</li>
                    </ul>
                  </article>

                  {/* Limitation of Liability */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-balance-scale text-blue-600 mr-3"></i>
                      6. Limitation of Liability
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      To the maximum extent permitted by law, Nestoria Group, its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website, your reliance on any information provided on the Website, or your real estate investment decisions.
                    </p>
                  </article>

                  {/* Third-Party Services and External Links */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-external-link-alt text-blue-600 mr-3"></i>
                      7. Third-Party Services and External Links
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Our website may reference external entities, government bodies (e.g., regarding Dholera SIR), or link to third-party websites. These links are provided for convenience only. Nestoria Group does not endorse or take responsibility for the content, policies, or practices of external sites.
                    </p>
                  </article>

                  {/* Governing Law and Jurisdiction */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-gavel text-blue-600 mr-3"></i>
                      8. Governing Law and Jurisdiction
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this Website shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.
                    </p>
                  </article>

                  {/* Changes to Terms */}
                  <article className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-sync-alt text-blue-600 mr-3"></i>
                      9. Changes to Terms
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Effective Date." Continued use of the website implies acceptance of the updated terms.
                    </p>
                  </article>

                  {/* Contact Information */}
                  <article className="bg-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-blue-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center">
                      <i className="fas fa-envelope text-blue-600 mr-3"></i>
                      10. Contact Information
                    </h3>
                    <p className="text-blue-700 leading-relaxed text-base sm:text-lg mb-4">
                      For any questions regarding these Terms and Conditions, please reach out to us:
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

export default TermsAndConditions;