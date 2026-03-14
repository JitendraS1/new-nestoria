import React from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";
import servicebanner from "/src/assets/img/services.webp"
import residentialimg from "/src/assets/img/Residential-project.webp"
import commercialimg from "/src/assets/img/COMMERCIAL-project.webp"
import industrialimg from "/src/assets/img/Industrial-project.webp"
function Services() {
  return (
    <div className="overflow-hidden bg-[#673a37]">
      {/* Page Header */}
      <ParallaxSection
        backgroundImage={servicebanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
         <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Our <span className="text-blue-300">Services</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions for residential, commercial, and industrial investments in Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Explore Services
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Get Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </ParallaxSection>
      

      {/* Services Overview */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h6 className="text-blue-600 font-semibold text-lg mb-4 uppercase tracking-wider">
              What We Offer
            </h6>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Nestoria Group, we offer comprehensive real estate services
              focused on Dholera SIR. Our expertise spans across residential,
              commercial, and industrial sectors, providing end-to-end solutions
              for investors and buyers.
            </p>
          </div>
          <ParallaxScroll
            speed={0.05}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-home fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Residential Plots
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Premium residential plots in strategic locations within
                  Dholera SIR, perfect for building your dream home or for
                  investment purposes.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-building fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Commercial Properties
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic commercial plots and properties in high-growth areas
                  of Dholera SIR, ideal for businesses looking to establish a
                  presence in this emerging hub.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-industry fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Industrial Plots
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Large industrial plots in designated industrial zones of
                  Dholera SIR, suitable for manufacturing, warehousing, and
                  other industrial operations.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-search fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Property Consultation
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Expert consultation services to help you identify the right
                  property based on your requirements, budget, and investment
                  goals.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-file-contract fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Legal Assistance
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive legal assistance for property documentation,
                  registration, and compliance with local regulations and laws.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-chart-line fa-2x text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Investment Advisory
                </h4>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Strategic investment advisory services to help you maximize
                  returns on your real estate investments in Dholera SIR.
                </p>
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </ParallaxScroll>
        </div>
      </section>

      {/* Residential Plots Section */}
      <ParallaxSection
        backgroundImage={servicebanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(243, 244, 246, 0.95), rgba(243, 244, 246, 0.85))"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in text-shadow">
                Our Specialty
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                Residential Plots in Dholera SIR
              </h2>
              <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
              <p className="text-gray-600 mb-6 animate-fade-in">
                Our residential plots in Dholera SIR offer the perfect
                opportunity to build your dream home in India's first planned
                smart city. With various plot sizes available, we cater to
                different needs and budgets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Prime Locations</h6>
                    <p className="text-gray-500 text-sm">Strategic areas</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Clear Titles</h6>
                    <p className="text-gray-500 text-sm">Legal assurance</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Flexible Payment</h6>
                    <p className="text-gray-500 text-sm">Easy options</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">High Appreciation</h6>
                    <p className="text-gray-500 text-sm">Value growth</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 animate-fade-in">
                Our residential plots are strategically located in areas with
                excellent connectivity, proximity to essential amenities, and
                planned infrastructure development. Investing in a residential
                plot in Dholera SIR today means securing a valuable asset for
                the future.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                Enquire Now
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={residentialimg}
                    alt="Residential Plots in Dholera SIR"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">
                      Premium Plots
                    </span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Commercial Properties Section */}
      <ParallaxSection
        backgroundImage={servicebanner}
        height="auto"
        overlayColor="rgba(243, 244, 246, 0.92)"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={commercialimg}
                    alt="Commercial Properties in Dholera SIR"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">
                      Business Spaces
                    </span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in text-shadow">
                Business Opportunities
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                Commercial Properties in Dholera SIR
              </h2>
              <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
              <p className="text-gray-600 mb-6 animate-fade-in">
                Our commercial properties in Dholera SIR offer excellent
                opportunities for businesses looking to establish a presence in
                this emerging economic hub. From retail spaces to office
                complexes, we have options to suit various business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Strategic Business Locations
                    </h6>
                    <p className="text-gray-500 text-sm">Prime areas</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      High Footfall Areas
                    </h6>
                    <p className="text-gray-500 text-sm">Customer traffic</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Modern Infrastructure
                    </h6>
                    <p className="text-gray-500 text-sm">Smart facilities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Growth Potential</h6>
                    <p className="text-gray-500 text-sm">Future value</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Investing in commercial properties in Dholera SIR offers
                significant advantages, including proximity to industrial zones,
                excellent connectivity, and a growing population base. Our team
                can help you identify the right commercial property based on
                your business requirements.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Industrial Plots Section */}
      <ParallaxSection
        backgroundImage={servicebanner}
        height="auto"
        overlayColor="rgba(243, 244, 246, 0.92)"
        speed={0.3}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <h6 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider animate-fade-in text-shadow">
                Industrial Growth
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                Industrial Plots in Dholera SIR
              </h2>
              <div className="h-1 w-24 bg-blue-600 mb-6 animate-slide-up"></div>
              <p className="text-gray-600 mb-6 animate-fade-in">
                Our industrial plots in Dholera SIR are designed to meet the
                needs of manufacturing, warehousing, and other industrial
                operations. Located in designated industrial zones, these plots
                offer excellent infrastructure and connectivity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Strategic Industrial Locations
                    </h6>
                    <p className="text-gray-500 text-sm">Prime zones</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Excellent Connectivity
                    </h6>
                    <p className="text-gray-500 text-sm">Transport links</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Robust Infrastructure
                    </h6>
                    <p className="text-gray-500 text-sm">Ready utilities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 mr-4 bg-blue-100 p-3 rounded-full">
                    <i className="fa fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      Government Incentives
                    </h6>
                    <p className="text-gray-500 text-sm">Tax benefits</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Dholera SIR's status as a key node in the Delhi-Mumbai
                Industrial Corridor makes it an ideal location for industrial
                operations. With planned logistics hubs, freight corridors, and
                an international airport, the region offers excellent
                connectivity for businesses with national and international
                operations.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                Enquire Now
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <ParallaxScroll speed={-0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={industrialimg}
                    alt="Industrial Plots in Dholera SIR"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-3xl font-bold px-6 py-3 border-2 border-white rounded-md">
                      Industrial Zones
                    </span>
                  </div>
                </div>
              </ParallaxScroll>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage={servicebanner}
        height="auto"
        overlayColor="#673a377e"
        speed={0.5}
        className="py-20"
      >
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <ParallaxScroll direction="up" speed={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Invest in <span className="text-blue-600">Dholera SIR?</span>
              </h2>
              <div className="w-24 h-1 bg-blue-300 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                Our team of experts is ready to guide you through the investment
                process and help you find the perfect property in Dholera SIR.
                Contact us today to schedule a consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="fas fa-phone mr-2"></i>Contact Us
                </Link>
                <Link
                  to="/about"
                  className="inline-block bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-white hover:border-blue-300 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="fas fa-info-circle mr-2"></i>Learn More
                </Link>
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default Services;
