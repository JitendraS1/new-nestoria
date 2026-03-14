import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from '../components/ParallaxSection';
import aboutbanner from '/src/assets/img/about.webp'
import shivsirimg from '/src/assets/img/team/management/shivji.webp'
import mohansirimg from '/src/assets/img/team/management/mohanji.webp'
import nitinsirimg from '/src/assets/img/team/management/nitinji.webp'
import dholeradpmap from '/src/assets/img/icon/dholera-dp-map.webp'
function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Us - Nestoria Group | Most Trusted Real Estate Developer</title>
        <meta name="description" content="Nestoria Group is one of the fastest-growing real estate companies with prime focus on Dholera Special Investment Region. Learn about our journey, vision and achievements." />
      </Helmet>
      {/* Page Header */}
      <ParallaxSection
        backgroundImage={aboutbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              About <span className="text-blue-300">Us</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Learn about Nestoria Group's journey, vision, and commitment to excellence in Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/land-deals"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  View Properties
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={aboutbanner} 
                  alt="About Nestoria Group" 

                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-3 border-2 border-white rounded-lg mb-6 sm:mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Discover Nestoria
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-5 w-24 h-24 sm:w-32 sm:h-32 flex flex-col justify-center items-center shadow-2xl rounded-2xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">15+</h1>
                  <h2 className="text-xs sm:text-sm md:text-base font-semibold text-white">Years</h2>
                  <h5 className="text-[10px] sm:text-xs md:text-sm text-white">Experience</h5>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:pl-0 sm:pl-6">
                <h6 className="text-blue-600 font-semibold text-base sm:text-lg mb-2 sm:mb-3 uppercase tracking-wider">
                  About Us
                </h6>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  We Are Your Trusted <span className="text-blue-600">Partner</span> In Dholera SIR
                </h2>
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-600 to-blue-400 mb-6 sm:mb-8"></div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  Nestoria Buildcon Pvt. Ltd. is one of the fastest-growing real estate companies with the prime focus on Dholera Special Investment Region. We have been emblem of trust, transparency, and customer-oriented solutions for 15 years.
                </p>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  In 2010, we started our journey from Gwalior, Madhya Pradesh. Our passion to help others in choosing the perfect property based on their requirement and our hard work led us to the path of success.
                </p>
                <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  We continued our journey in Real Estate with a vision of opportunistic investment which led us to Dholera SIR. In 2018, we started our engagement in Dholera SIR. A roadmap to one of the best smart cities in the world with state-of-the-art facilities and international connectivity caught our eyes and compelled us to showcase this potential to the people and help them go with the future.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
                  {[
                    "Premium Land Parcels",
                    "Strategic Locations",
                    "Legal Documentation",
                    "Investment Advisory",
                    "Transparent Dealings",
                    "Client Satisfaction"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start p-3 sm:p-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 border-blue-500"
                    >
                      <div className="flex-shrink-0 mr-2.5 sm:mr-3 bg-gradient-to-br from-blue-100 to-blue-200 p-1.5 sm:p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <i className="fa fa-check text-blue-600 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-1.5 sm:mb-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">5000</h1>
                      <span className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-bold">+</span>
                    </div>
                    <h6 className="text-gray-600 font-semibold text-base sm:text-lg">Happy Clients</h6>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-1.5 sm:mb-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">50</h1>
                      <span className="text-green-500 text-xl sm:text-2xl md:text-3xl font-bold">+</span>
                    </div>
                    <h6 className="text-gray-600 font-semibold text-base sm:text-lg">Projects Completed</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <ParallaxSection
        backgroundImage={aboutbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.4}
        className="py-16 md:py-24 lg:py-32 flex items-center justify-center text-center relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-300 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Our Foundation
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-300">Vision & Mission</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">Guiding principles that drive our business forward and shape our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm h-full p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-3xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-eye text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Our Vision</h3>
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-300 to-blue-500 mb-6"></div>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">To be the most trusted and preferred real estate developer in Dholera SIR, known for our commitment to quality, transparency, and customer satisfaction.</p>
                <p className="text-gray-200 leading-relaxed text-lg">We envision Dholera SIR as a global manufacturing and trading hub, and we aim to play a pivotal role in its development by providing premium real estate solutions to investors and businesses.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm h-full p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-3xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-bullseye text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Our Mission</h3>
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-300 to-green-500 mb-6"></div>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">To provide premium land parcels and real estate solutions in Dholera SIR, helping investors capitalize on the immense growth potential of India's first planned smart city.</p>
                <p className="text-gray-200 leading-relaxed text-lg">We are committed to maintaining the highest standards of transparency, legal compliance, and customer service, ensuring that our clients' investments are secure and profitable.</p>
              </div>
            </div>
          </div>
        </div>
        </ParallaxSection>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Our Foundation
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">The principles that guide our business and relationships, ensuring we deliver exceptional value to our clients</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "fa fa-handshake",
                title: "Trust",
                desc: "We build lasting relationships with our clients based on trust and mutual respect.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "fa fa-balance-scale",
                title: "Integrity",
                desc: "We conduct our business with the highest standards of integrity and ethical practices.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "fa fa-gem",
                title: "Excellence",
                desc: "We strive for excellence in everything we do, from property selection to client service.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "fa fa-users",
                title: "Client Focus",
                desc: "Our clients' needs and satisfaction are at the center of all our decisions and actions.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 md:p-8 text-center h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-t-4 border-blue-500 hover:border-blue-400">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <i className={`${value.icon} text-2xl md:text-3xl`}></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Leadership Team
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-600">Leadership</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Meet the visionary leaders dedicated to your success in Dholera SIR</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "Shivkumar Singh Tomar",
                position: "Chairman",
                image: shivsirimg,
                description: "Dholera is India's first platinum-rated industrial smart city, comprising the largest land parcels in southeast Asia. Dholera is committed to increasing transport efficiency and improving trade flows based on the strategic pillars of sustainability, digitisation, and innovation.",
                color: "from-blue-500 to-blue-600"
              },
              {
                name: "Mohan Singh Tomar",
                position: "Chief Executive Officer",
                image: mohansirimg,
                description: "We have an experienced management team equipped with technical knowledge and domain expertise that has led us to gain 5500+ Happy Customers. Recently, we were awarded 'Rajiv Gandhi Global Excellence Award – 2022 – New Delhi'.",
                color: "from-green-500 to-green-600"
              },
              {
                name: "Nitin Singh Tomar",
                position: "Director",
                image: nitinsirimg,
                description: "It's always a pleasure to have a creative and energetic force on board. Out of the box thinking, passion to grow, and creativity to serve our clients are some of his attributes. His energy and team management help the entire group to be on a same page and work smart to achieve our vision.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-4 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={leader.image} 
                      alt={leader.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-blue-600 font-semibold text-sm">Leadership</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h5 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{leader.name}</h5>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">{leader.position}</p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                <i className="fas fa-exclamation-triangle text-white text-xl"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Disclaimer</h3>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 mb-8"></div>
            <div className="text-gray-600 text-sm md:text-base space-y-4 leading-relaxed">
              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">Nestoria Buildcon Pvt. Ltd. is a rapidly growing real estate company specializing in Dholera Smart City. We have earned a reputation for trust, transparency, and customer-centric solutions over our 13-year presence in the industry.</p>
              <p>The content displayed on our website(s), including images, renderings, copy, and other materials collectively referred to as "Website Content," are purely indicative and artistic in nature. They do not represent actual buildings, landscapes, or facilities. The Website Content was created prior to the implementation of relevant regulations and may include content related to future project phases or different projects altogether.</p>
              <p>Until the Website Content is fully updated, it should not be considered as an advertisement, invitation, solicitation, offer, or sale of any product offerings. We disclaim any responsibility for any consequences arising from actions taken by individuals or authorities relying on the provided material/information.</p>
              <p>The primary purpose of the Website Content is to support the government's initiative to develop the Dholera Greenfield region into a sophisticated smart city. We advise investors to independently verify all details, including area, services, sales and payment terms, and other relevant information with the Nestoria Buildcon Pvt. Ltd. Sales Team Only.</p>
              <p>We strongly recommend avoiding unauthorized or unverified websites/brokers (online/offline) for information on Nestoria Buildcon Pvt. Ltd. projects. Information about projects displayed on the website(s) is indicative and for reference purposes only. Artist's impressions, products, features, etc., are presented as illustrations and for reference only.</p>
              <p>The actual land parcels and final prices of the mentioned plots may differ due to future alterations. While we have made every effort to ensure the accuracy of the website, Nestoria Buildcon Pvt. Ltd. shall not be liable for any loss, claim, damage, errors, directly or indirectly, consequential or incidental, suffered by any person due to the use or inability to use this website.</p>
              <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 font-medium">Please note that this disclaimer is intended to provide general information and should not be considered legal advice. It is advisable to consult legal professionals for specific advice and clarification regarding relevant regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Invest in <span className="text-blue-300">Dholera SIR</span>?</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mb-8"></div>
              <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">Contact our expert team today to explore premium investment opportunities in Dholera SIR. We'll guide you through every step of your investment journey with personalized solutions and expert advice.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 md:px-12 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg">
                  <span className="flex items-center justify-center">
                    <i className="fas fa-phone mr-2"></i>
                    Contact Us Now
                  </span>
                </Link>
                <Link to="/land-deals" className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 md:px-12 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <i className="fas fa-search mr-2"></i>
                    View Properties
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 group">
                <img 
                  className="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  src={dholeradpmap} 
                  alt="Dholera SIR" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl font-bold px-6 py-4 border-2 border-white rounded-lg mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Dholera
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
