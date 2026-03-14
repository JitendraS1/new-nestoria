import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from '../components/ParallaxSection';
import faqbanner from '/src/assets/img/FAQ.webp'
const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'property', name: 'Property Related' },
    { id: 'investment', name: 'Investment' },
    { id: 'dholera', name: 'About Dholera SIR' },
    { id: 'legal', name: 'Legal & Documentation' }
  ];

  const faqs = {
    general: [
      {
        question: "Who is Nestoria Group?",
        answer: "Nestoria Group is a leading real estate developer specializing in properties within Dholera Special Investment Region (SIR). With years of experience in the industry, we offer residential, commercial, and industrial land parcels with a focus on trust, transparency, and client satisfaction."
      },
      {
        question: "How long has Nestoria Group been in business?",
        answer: "Nestoria Group has been operating in the real estate sector since 2010, with a specific focus on the Dholera SIR region. Over the years, we have built a strong reputation for delivering quality properties and exceptional customer service."
      },
      {
        question: "What services does Nestoria Group offer?",
        answer: "Nestoria Group offers a comprehensive range of real estate services including property sales, investment advisory, legal assistance for property documentation, site visits to Dholera SIR, property management, and ongoing customer support for all property-related matters."
      },
      {
        question: "How can I contact Nestoria Group?",
        answer: "You can contact us through multiple channels: visit our office in Dholera SIR, call us at +919213005611, email us at info@nestoriagroup.com, or fill out the contact form on our website. Our customer support team is available Monday to Saturday during business hours."
      },
      {
        question: "Does Nestoria Group have any ongoing projects?",
        answer: "Yes, Nestoria Group has several ongoing projects in different zones of Dholera SIR. These include residential townships, commercial complexes, and industrial plots. Please contact our sales team for information about our current and upcoming projects."
      }
    ],
    property: [
      {
        question: "What types of properties does Nestoria Group offer in Dholera SIR?",
        answer: "Nestoria Group offers a diverse range of properties in Dholera SIR, including residential plots, commercial properties, and industrial land parcels. Each property is strategically located to maximize investment potential and future growth."
      },
      {
        question: "What is the price range of properties in Dholera SIR?",
        answer: "The price of properties in Dholera SIR varies based on location, size, and type. Residential plots typically start from ₹X per square meter, commercial properties from ₹Y per square meter, and industrial plots from ₹Z per square meter. Please contact our sales team for current pricing details."
      },
      {
        question: "Are the properties offered by Nestoria Group ready to move in?",
        answer: "We offer both ready-to-develop plots and under-development properties. Our sales representatives can guide you through the available options based on your requirements and timeline for development or occupancy."
      },
      {
        question: "Can I customize my property according to my requirements?",
        answer: "Yes, when purchasing land parcels from Nestoria Group, you have the flexibility to develop the property according to your specific requirements, subject to the zoning regulations and building codes of Dholera SIR."
      },
      {
        question: "How can I schedule a site visit to see the properties?",
        answer: "You can schedule a site visit by contacting our office directly via phone, email, or by filling out the contact form on our website. Our team will arrange a convenient time for your visit and provide all necessary guidance."
      }
    ],
    investment: [
      {
        question: "Is Dholera SIR a good investment opportunity?",
        answer: "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city, strategic location within the Delhi-Mumbai Industrial Corridor, world-class infrastructure, and government backing. Early investors can benefit from significant appreciation potential."
      },
      {
        question: "What is the expected return on investment in Dholera SIR?",
        answer: "While specific returns cannot be guaranteed, investments in Dholera SIR have shown promising growth potential. The region's development as a smart city and its inclusion in the Delhi-Mumbai Industrial Corridor are expected to drive property values upward over the medium to long term."
      },
      {
        question: "What are the payment options available for property purchases?",
        answer: "We offer flexible payment options including lump sum payments, installment plans, and bank financing options. Our financial advisors can help you choose the best payment plan that suits your budget and requirements."
      },
      {
        question: "Are there any ongoing maintenance costs for properties in Dholera SIR?",
        answer: "Yes, there may be maintenance charges for common infrastructure and services in developed areas. These charges vary depending on the location and type of property. Our team will provide you with detailed information about any applicable maintenance costs."
      },
      {
        question: "Can NRIs invest in Dholera SIR properties through Nestoria Group?",
        answer: "Yes, Non-Resident Indians (NRIs) can invest in properties in Dholera SIR. We have a dedicated team to assist NRIs with the investment process, documentation, and compliance with relevant regulations. We also offer property management services for absentee owners."
      }
    ],
    dholera: [
      {
        question: "What is Dholera Special Investment Region (SIR)?",
        answer: "Dholera SIR is India's first planned smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). It is designed to be a global manufacturing and trading hub with world-class infrastructure, sustainable urban planning, and smart technology integration."
      },
      {
        question: "Where is Dholera SIR located?",
        answer: "Dholera SIR is strategically located in the state of Gujarat, approximately 100 km southwest of Ahmedabad. Its proximity to major ports, highways, and the proposed international airport makes it an ideal location for business and residence."
      },
      {
        question: "What infrastructure facilities are being developed in Dholera SIR?",
        answer: "Dholera SIR is being developed with world-class infrastructure including smart transportation networks, renewable energy sources, efficient water management systems, digital connectivity, industrial zones, and green spaces. The city is designed to provide a high quality of life with all modern amenities."
      },
      {
        question: "What is the current status of development in Dholera SIR?",
        answer: "Dholera SIR is being developed in phases, with significant progress already made in trunk infrastructure development. Various projects including roads, water systems, and power infrastructure are underway. The city is expected to be fully developed by 2040, with different zones becoming operational in phases."
      },
      {
        question: "What industries are expected to establish in Dholera SIR?",
        answer: "Dholera SIR is expected to attract industries in sectors such as electronics, pharmaceuticals, heavy engineering, defense, aviation, renewable energy, and IT/ITeS. The region is designed to be a major manufacturing hub with dedicated zones for different industrial sectors."
      }
    ],
    legal: [
      {
        question: "What documents are required for property purchase in Dholera SIR?",
        answer: "The required documents typically include identity proof (Aadhar Card, PAN Card, Passport), address proof, passport-sized photographs, and bank statements or income proof. Our legal team will guide you through the complete documentation process."
      },
      {
        question: "Is the title of the properties offered by Nestoria Group clear?",
        answer: "Yes, all properties offered by Nestoria Group come with clear titles. We conduct thorough legal verification of all properties before offering them to our clients. Additionally, we provide complete assistance with legal documentation during the purchase process."
      },
      {
        question: "What are the legal procedures involved in purchasing property in Dholera SIR?",
        answer: "The legal procedures include property verification, agreement preparation, payment processing, registration of the sale deed, and mutation of property records. Our legal team handles these procedures efficiently to ensure a smooth and transparent transaction process."
      },
      {
        question: "Are there any restrictions on property development in Dholera SIR?",
        answer: "Yes, property development in Dholera SIR must comply with the master plan and building regulations established by the Dholera Special Investment Regional Development Authority (DSIRDA). These regulations ensure planned and sustainable development of the region."
      },
      {
        question: "What taxes are applicable on property purchase in Dholera SIR?",
        answer: "Property purchases in Dholera SIR are subject to stamp duty, registration fees, and GST (if applicable). The exact tax amounts depend on the property value and current government rates. Our team will provide you with a detailed breakdown of all applicable taxes before the purchase."
      }
    ]
  };

  return (
    <div className="faq-page bg-white">
      <Helmet>
        <title>FAQ - Nestoria Group | Dholera SIR</title>
        <meta name="description" content="Find answers to frequently asked questions about Nestoria Group, Dholera SIR properties, investments, and more." />
      </Helmet>
      
      {/* Page Header */}
       <ParallaxSection
        backgroundImage={faqbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Frequently Asked <span className="text-blue-300">Questions</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Nestoria Group and Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <a
                href="#faq-content"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-question-circle mr-2"></i>
                  Browse FAQs
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:info@nestoriagroup.com"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Ask Question
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </ParallaxSection>
      
      

      {/* FAQ Content */}
      <section id="faq-content" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Help Center
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Find answers to common questions about our properties and services</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                      <i className="fas fa-list text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Categories</h3>
                  </div>
                  <div className="h-1 w-16 bg-blue-500 mb-6"></div>
                  <div className="flex flex-col space-y-3">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`px-4 py-3 md:py-4 rounded-lg text-left transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-medium text-sm md:text-base ${activeCategory === category.id 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                      <i className="fas fa-question-circle text-white text-xl"></i>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{categories.find(cat => cat.id === activeCategory).name}</h2>
                  </div>
                  <div className="h-1 w-24 bg-blue-500 mb-8"></div>
                  
                  <div className="space-y-4 md:space-y-6">
                    {faqs[activeCategory].map((faq, index) => (
                      <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1" key={index}>
                        <details className="group">
                          <summary 
                            className="flex justify-between items-center p-5 md:p-6 cursor-pointer bg-white hover:bg-blue-50 transition-all duration-300"
                          >
                            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 text-blue-600 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 md:px-6 py-4 md:py-5 bg-white text-gray-600 border-t border-gray-100">
                            <p className="leading-relaxed text-sm md:text-base">{faq.answer}</p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <ParallaxSection
          backgroundImage={faqbanner}
          height="auto"
          overlayColor="#673a377e"
          speed={0.4}
          className="py-16 md:py-24 relative z-10"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3 text-center">
                <h6 className="text-blue-300 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
                  Need More Help?
                </h6>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Didn't Find Your <span className="text-blue-300">Answer</span>?
                </h2>
                <div className="h-1 w-32 bg-white mx-auto mb-8"></div>
                <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
                  Our team is here to help you with any questions you may have about our properties or services in Dholera SIR.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 md:px-12 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                  >
                    <span className="flex items-center justify-center">
                      <i className="fas fa-phone mr-2"></i>
                      Contact Us
                    </span>
                  </Link>
                  <a 
                    href="mailto:info@nestoriagroup.com" 
                    className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 md:px-12 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg backdrop-blur-sm"
                  >
                    <span className="flex items-center justify-center">
                      <i className="fas fa-envelope mr-2"></i>
                      Email Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Stay <span className="text-blue-300">Updated</span>
            </h2>
            <div className="h-1 w-32 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on Dholera SIR development and investment opportunities.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.elements.email.value;
              
              // Simple email validation
              if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
              }
              
              try {
                const { ContactService } = await import('../services/ContactService');
                const result = await ContactService.sendContactForm({
                  name: "Newsletter Subscriber",
                  email,
                  phone: "",
                  subject: "Newsletter Subscription",
                  message: `Please subscribe ${email} to the newsletter.`
                });
                
                if (result.success) {
                  alert("Thank you for subscribing!");
                  e.target.reset();
                } else {
                  alert(result.message || "Failed to subscribe.");
                }
              } catch (error) {
                console.error('Error subscribing to newsletter:', error);
                alert("Failed to subscribe. Please try again later.");
              }
            }}>
              <input 
                type="email"
                name="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/70 text-lg"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Subscribe
                </span>
              </button>
            </form>
            <p className="text-sm mt-6 text-white/70">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
