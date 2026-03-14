import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactService from "../services/ContactService";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";
import { getLocalBusinessSchema } from "../utils/SchemaMarkup";
import contactbannerimg from "/src/assets/img/contact.webp";

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Generate local business schema for SEO
  const businessSchema = getLocalBusinessSchema({
    name: "Nestoria Group",
    description: "Premier real estate developer in Dholera SIR, Gujarat offering residential, commercial and industrial properties.",
    url: "https://nestoriagroup.com",
    telephone: "+91-9274411705",
    email: "info@nestoriagroup.com",
    address: {
      streetAddress: "Dholera SIR",
      addressLocality: "3rd Floor, Sarthik Annex, Satellite Road",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN"
    },
    geo: {
      latitude: "23.0269442",
      longitude: "72.5094251"
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00"
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    // Phone is optional but if provided, validate it
    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");
    setSubmitted(false);
    try {
      const res = await ContactService.sendContactForm(formData);
      if (res.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(
          res.message ||
            "Failed to send message. Please try again later or contact us directly at info@nestoriagroup.com"
        );
      }
    } catch (err) {
      setError(
        "Failed to send message. Please try again later or contact us directly at info@nestoriagroup.com"
      );
    }
    setLoading(false);
  };

  const faqs = [
    {
      question:
        "What types of properties does Nestoria Group offer in Dholera SIR?",
      answer:
        "Nestoria Group offers a diverse range of properties in Dholera SIR, including residential plots, commercial properties, and industrial land parcels. Each property is strategically located to maximize investment potential and future growth.",
    },
    {
      question: "How can I schedule a site visit to Dholera SIR?",
      answer:
        "You can schedule a site visit by contacting our office directly via phone, email, or by filling out the contact form on our website. Our team will arrange a convenient time for your visit and provide all necessary guidance.",
    },
    {
      question:
        "What are the payment options available for property purchases?",
      answer:
        "We offer flexible payment options including lump sum payments, installment plans, and bank financing options. Our financial advisors can help you choose the best payment plan that suits your budget and requirements.",
    },
    {
      question: "Is Dholera SIR a good investment opportunity?",
      answer:
        "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city, strategic location within the Delhi-Mumbai Industrial Corridor, world-class infrastructure, and government backing. Early investors can benefit from significant appreciation potential.",
    },
    {
      question:
        "What documents are required for property purchase in Dholera SIR?",
      answer:
        "The required documents typically include identity proof (Aadhar Card, PAN Card, Passport), address proof, passport-sized photographs, and bank statements or income proof. Our legal team will guide you through the complete documentation process.",
    },
  ];

  return (
    <div className="w-full">
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Nestoria Group | Real Estate Developer in Dholera SIR</title>
        <meta name="description" content="Contact Nestoria Group for premium real estate investment opportunities in Dholera SIR. Our team of experts is ready to assist you with residential, commercial, and industrial properties." />
        <meta name="keywords" content="contact Nestoria Group, Dholera SIR real estate contact, property investment inquiry, real estate developer contact" />
        <link rel="canonical" href="https://nestoriagroup.com/contact" />
        
        {/* Add schema markup for local business */}
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>
      
      {/* Page Header */}
      <ParallaxSection
        backgroundImage={contactbannerimg}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
         <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Contact <span className="text-blue-300">Us</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team of real estate experts in Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <a
                href="#contact-form"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="tel:+919213005611"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </ParallaxSection>
      

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <ParallaxScroll speed={0.05} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <h6 className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 uppercase tracking-wider">
                Get In Touch
              </h6>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Contact <span className="text-blue-600">Information</span>
              </h2>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">Reach out to us through any of these channels for immediate assistance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-smooth animation-delay-1 border-t-4 border-blue-500 hover-lift-smooth">
                <div className="text-center">
                  <div className="mb-5 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white animate-scale-in-smooth group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-map-marker-alt text-base sm:text-xl md:text-2xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Our Office
                  </h3>
                  <p className="text-gray-600 mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">
                    3rd Floor, Sarthik Annex, Satellite Road,
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Iscon Cross Road, Ahmedabad - 380015, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-smooth animation-delay-2 border-t-4 border-green-500 hover-lift-smooth">
                <div className="text-center">
                  <div className="mb-5 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white animate-scale-in-smooth animation-delay-300 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-phone-alt text-base sm:text-xl md:text-2xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    Phone & Email
                  </h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                    <a
                      href="tel:+919213005611"
                      className="hover:text-green-600 transition-colors font-semibold text-base sm:text-lg"
                    >
                      +919213005611
                    </a>
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    <a
                      href="mailto:info@nestoriagroup.com"
                      className="hover:text-green-600 transition-colors"
                    >
                      info@nestoriagroup.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-smooth animation-delay-3 border-t-4 border-purple-500 hover-lift-smooth">
                <div className="text-center">
                  <div className="mb-5 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white animate-scale-in-smooth animation-delay-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-clock text-base sm:text-xl md:text-2xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    Office Hours
                  </h3>
                  <p className="text-gray-600 mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">
                    Monday - Saturday : 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left border-l-4 border-blue-500">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-headset text-white text-base sm:text-xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Customer Support
                  </h3>
                </div>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-500 to-blue-400 mb-4 sm:mb-6"></div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                  Our dedicated customer support team is available to assist you
                  with any inquiries or concerns you may have about our
                  properties or services.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    <strong className="text-gray-800">Support Email:</strong>{" "}
                    <a
                      href="mailto:support@nestoriagroup.com"
                      className="text-blue-600 hover:text-blue-500 transition-colors font-semibold"
                    >
                      support@nestoriagroup.com
                    </a>
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    <strong className="text-gray-800">Support Phone:</strong>{" "}
                    <a
                      href="tel:+919213005611"
                      className="text-blue-600 hover:text-blue-500 transition-colors font-semibold"
                    >
                      +919213005611
                    </a>
                  </p>
                </div>
              </div>
              <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right border-l-4 border-purple-500">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-share-alt text-white text-base sm:text-xl"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    Connect With Us
                  </h3>
                </div>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-purple-400 mb-4 sm:mb-6"></div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                  Follow us on social media to stay updated with the latest
                  news, property listings, and developments in Dholera SIR.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="http://www.youtube.com/@nestoriagroup"
                    className="group/social w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube text-base sm:text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/nestoria.group"
                    className="group/social w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-base sm:text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/nestoriagroup"
                    className="group/social w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-base sm:text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nestoriagroup"
                    className="group/social w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-base sm:text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <ParallaxScroll speed={0.03} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16 animate-fade-in">
                <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
                  Get In Touch
                </h6>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Send Us a <span className="text-blue-600">Message</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 animate-scale-in"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  We'd love to hear from you. Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>
              </div>

              {submitted ? (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in"
                  role="alert"
                >
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>
                      Thank you for your message! We will get back to you
                      shortly.
                    </span>
                  </div>
                </div>
              ) : error ? (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 animate-fade-in"
                  role="alert"
                >
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    <span>{error}</span>
                  </div>
                </div>
              ) : null}

              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in animation-delay-1 border-t-4 border-blue-500">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8" aria-label="Contact form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="animate-fade-in animation-delay-2">
                      <label
                        htmlFor="name"
                        className="block text-gray-800 font-semibold mb-2 sm:mb-3 text-sm md:text-base"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                          errors.name 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300 focus:bg-blue-50"
                        }`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1.5 text-xs"></i>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="animate-fade-in animation-delay-3">
                      <label
                        htmlFor="email"
                        className="block text-gray-800 font-semibold mb-2 sm:mb-3 text-sm md:text-base"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                          errors.email 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300 focus:bg-blue-50"
                        }`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1.5 text-xs"></i>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="animate-fade-in animation-delay-4">
                      <label
                        htmlFor="phone"
                        className="block text-gray-800 font-semibold mb-2 sm:mb-3 text-sm md:text-base"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                          errors.phone 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300 focus:bg-blue-50"
                        }`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1.5 text-xs"></i>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="animate-fade-in animation-delay-5">
                      <label
                        htmlFor="subject"
                        className="block text-gray-800 font-semibold mb-2 sm:mb-3 text-sm md:text-base"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                          errors.subject 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300 focus:bg-blue-50"
                        }`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                        required
                        aria-required="true"
                        aria-invalid={errors.subject ? "true" : "false"}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-red-500 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1.5 text-xs"></i>
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="animate-fade-in animation-delay-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-800 font-semibold mb-2 sm:mb-3 text-sm md:text-base"
                    >
                      Your Message *
                    </label>
                    <textarea
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] ${
                        errors.message 
                          ? "border-red-500 bg-red-50" 
                          : "border-gray-300 focus:bg-blue-50"
                      }`}
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here..."
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <i className="fas fa-exclamation-circle mr-1.5 text-xs"></i>
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-6 sm:mt-8 md:mt-10 animate-fade-in animation-delay-7">
                    <button
                      type="submit"
                      className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:px-12 rounded-lg transition-all duration-300 flex items-center justify-center mx-auto transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base md:text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        <ParallaxScroll speed={0.04} className="z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
                Our Location
              </h6>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Find <span className="text-blue-600">Us</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 animate-scale-in"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Visit our office in Ahmedabad for personalized assistance and property consultations
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white animate-fade-in animation-delay-1 group hover:shadow-3xl transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.181259658562!2d72.508794!3d23.0265226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0011439e3d%3A0x5d04ddda8181c13e!2sNestoria%20Group!5e0!3m2!1sen!2sin!4v1706572800000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nestoria Group Office Location"
                className="w-full h-full group-hover:scale-105 transition-transform duration-700"
              ></iframe>
            </div>
          </div>
        </ParallaxScroll>
      </section>

      {/* FAQ Section */}
      <ParallaxSection
        backgroundImage={contactbannerimg}
        height="auto"
        overlayColor="#673a377e"
        speed={0.2}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h6 className="text-blue-300 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Help Center
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-blue-300">Questions</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mx-auto mb-8 animate-scale-in"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our properties and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  className="group bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden animate-fade-in animation-delay-dynamic transform hover:-translate-y-1 transition-all duration-500"
                  style={{ "--index": index }}
                  key={index}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 md:p-8 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm md:text-base pr-4">{faq.question}</span>
                      <span className="transition group-open:rotate-180 text-blue-600 flex-shrink-0">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-6 md:p-8 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                      <p className="text-sm md:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16 animate-fade-in animation-delay-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h3>
                <p className="text-white/90 mb-6 text-lg">Our team is here to help you with any additional questions</p>
                <a
                  href="mailto:info@nestoriagroup.com"
                  className="group inline-flex items-center bg-gradient-to-r from-white to-blue-100 text-blue-600 hover:from-blue-50 hover:to-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center">
                    <i className="fas fa-envelope mr-2"></i>
                    Email Us
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Contact;
