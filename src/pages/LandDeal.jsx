import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import residentialPlot from '../assets/img/residential-plot.svg';
import commercialProperty from '../assets/img/commercial-property.svg';
import industrialPlot from '../assets/img/industrial-plot.svg';
import LandDealService from '../services/LandDealService';
import teamBg from '/src/assets/img/icon/counter-bg-2.webp';
import Industrialimg from '/src/assets/img/Industrial-project.webp';
import COMMERCIALimg from '/src/assets/img/COMMERCIAL-landdeal.webp';
import Residentialimg from '/src/assets/img/Residential-land.webp';

function LandDeal() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type";
    }
    
    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
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
    
    // Clear error when user starts typing/selecting
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
    try {
      const res = await LandDealService.sendLandDealInquiry(formData);
      if (res.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          budget: "",
          message: "",
        });
        setErrors({});
      } else {
        setError(res.message || "Failed to send inquiry. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send inquiry. Please try again later.");
    }
    setLoading(false);
  };

  // Land deal data
  const landDeals = [
    {
      id: 1,
      title: "Premium Residential Land Parcel",
      location: "Town Planning Scheme 1, Dholera SIR",
      area: "200 sq. yards",
      // price: "₹25 Lakhs",
      type: "residential",
      features: ["Corner Plot", "Near Park", "Road Facing", "DMIC Proximity"],
      description: "Prime residential plot in the heart of Dholera SIR with excellent connectivity and future appreciation potential.",
      image: Residentialimg
    },
    {
      id: 2,
      title: "Commercial Land Parcel",
      location: "Central Business District, Dholera SIR",
      area: "500 sq. yards",
      // price: "₹75 Lakhs",
      type: "commercial",
      features: ["Main Road Access", "High Visibility", "Corner Property", "Near Metro Station"],
      description: "Strategic commercial land parcel ideal for retail, office space, or mixed-use development in the upcoming business hub of Dholera.",
      image: COMMERCIALimg
    },
    {
      id: 3,
      title: "Industrial land Parcel",
      location: "Industrial Zone, Dholera SIR",
      area: "1500 sq. yards",
      // price: "₹1.2 Crore",
      type: "industrial",
      features: ["Near Port Connectivity", "Power Substation Proximity", "Water Supply", "Waste Management"],
      description: "Large industrial land parcel with excellent infrastructure support, ideal for manufacturing units, warehouses, or logistics facilities.",
      image: Industrialimg
    },
    {
      id: 4,
      title: "Residential land parcel Package",
      location: "Residential Zone 2, Dholera SIR",
      area: "150 sq. yards",
      // price: "₹18 Lakhs",
      type: "residential",
      features: ["Gated Community", "Park View", "Near School", "24/7 Security"],
      description: "Affordable residential land parcel in a planned community with modern amenities and excellent growth potential.",
      image: Residentialimg
    },
    {
      id: 5,
      title: "Premium Commercial Corner",
      location: "Town Center, Dholera SIR",
      area: "300 sq. yards",
      // price: "₹60 Lakhs",
      type: "commercial",
      features: ["Prime Location", "High Footfall", "Wide Frontage", "Multiple Access Points"],
      description: "Prime commercial property at a strategic location ideal for retail, showroom, or hospitality ventures with high visibility.",
      image: COMMERCIALimg
    },
    {
      id: 6,
      title: "Industrial Land with Shed",
      location: "Manufacturing Hub, Dholera SIR",
      area: "2000 sq. yards",
      // price: "₹2.5 Crore",
      type: "industrial",
      features: ["Pre-built Shed", "Heavy Power Connection", "Effluent Treatment", "Logistics Support"],
      description: "Ready-to-use industrial property with pre-built shed, ideal for immediate business setup with all necessary infrastructure in place.",
      image: Industrialimg
    }
  ];

  // Filter land deals based on active filter
  const filteredDeals = activeFilter === 'all' 
    ? landDeals 
    : landDeals.filter(deal => deal.type === activeFilter);

  return (
    <div className="land-deals-page">
    
      {/* Page Header */}
      <header className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-blue-700" style={{backgroundImage: "url('/src/assets/img/land-deals-banner.webp')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Premium Land Investment <span className="text-blue-300">Opportunities</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Discover exclusive residential, commercial & industrial land parcels in India's first smart city with unlimited growth potential
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <a 
                href="#contact-section" 
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Inquire Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#land-deals" 
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  View Land Deals
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                  <i className="fas fa-gavel text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">100% Legal Verification</h3>
                <p className="text-blue-100">Every land parcel comes with complete legal verification and due diligence</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                  <i className="fas fa-certificate text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Clear Title</h3>
                <p className="text-blue-100">All properties have clear, marketable title with no legal encumbrances</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                  <i className="fas fa-stamp text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Government Approved TP Schemes</h3>
                <p className="text-blue-100">All land deals are part of government-approved Town Planning Schemes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="land-deals" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Property Portfolio
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Available <span className="text-blue-600">Land Deals</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Discover premium land opportunities across different zones in Dholera SIR</p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button 
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base transform hover:-translate-y-1 hover:scale-105 ${activeFilter === 'all' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                onClick={() => setActiveFilter('all')}
              >
                All Properties
              </button>
              <button 
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base transform hover:-translate-y-1 hover:scale-105 ${activeFilter === 'residential' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                onClick={() => setActiveFilter('residential')}
              >
                Residential
              </button>
              <button 
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base transform hover:-translate-y-1 hover:scale-105 ${activeFilter === 'commercial' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                onClick={() => setActiveFilter('commercial')}
              >
                Commercial
              </button>
              <button 
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base transform hover:-translate-y-1 hover:scale-105 ${activeFilter === 'industrial' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                onClick={() => setActiveFilter('industrial')}
              >
                Industrial
              </button>
            </div>
          </div>

          {/* Land Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredDeals.length > 0 ? (
              filteredDeals.map(deal => (
                <div key={deal.id} className="group animate-fade-in">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={deal.image} 
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={deal.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-lg font-bold px-6 py-3 border-2 border-white rounded-lg mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Details
                        </span>
                      </div>
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        {deal.type.charAt(0).toUpperCase() + deal.type.slice(1)}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{deal.title}</h3>
                      <p className="text-gray-500 mb-3 flex items-center text-sm md:text-base">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                        {deal.location}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="flex items-center text-gray-600 text-sm md:text-base">
                          <i className="fas fa-expand-arrows-alt mr-2 text-blue-600"></i>
                          {deal.area}
                        </span>
                        <span className="text-blue-600 font-bold text-lg">{deal.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">{deal.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {deal.features.map((feature, index) => (
                            <span key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs font-medium px-3 py-2 rounded-full flex items-center border border-blue-200">
                              <i className="fas fa-check text-green-600 mr-2 text-xs"></i>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <a href="#contact-section" className="group/btn block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg py-3 md:py-4 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl">
                        <span className="flex items-center justify-center">
                          <i className="fas fa-envelope mr-2"></i>
                          Request Details
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 md:py-20">
                <div className="max-w-md mx-auto">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">No properties found</h3>
                  <p className="text-gray-600 mb-8 text-lg">We couldn't find any properties matching your criteria.</p>
                  <button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl"
                    onClick={() => setActiveFilter('all')}
                  >
                    <span className="flex items-center">
                      <i className="fas fa-arrow-left mr-2"></i>
                      View All Properties
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
                Get In Touch
              </h6>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Interested in Our <span className="text-blue-600">Land Deals</span>?
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Fill out the form below and our property experts will get in touch with you to provide more details.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
              <div className="p-6 md:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Thank You!</h3>
                    <p className="text-lg text-gray-600">Your inquiry has been submitted successfully. Our property experts will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
                        <p className="font-medium">{error}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base ${
                            errors.name 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base ${
                            errors.phone 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base ${
                            errors.email 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-3">Property Type *</label>
                        <select 
                          id="propertyType" 
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base ${
                            errors.propertyType 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`}
                        >
                          <option value="" disabled>Select Property Type</option>
                          <option value="residential">Residential land parcel</option>
                          <option value="commercial">Commercial land parcel</option>
                          <option value="industrial">Industrial land parcel</option>
                        </select>
                        {errors.propertyType && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.propertyType}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">Budget Range *</label>
                        <select 
                          id="budget" 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:py-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base ${
                            errors.budget 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`}
                        >
                          <option value="" disabled>Select Budget Range</option>
                          <option value="below-25">Below ₹25 Lakhs</option>
                          <option value="25-50">₹25 Lakhs - ₹50 Lakhs</option>
                          <option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
                          <option value="above-1cr">Above ₹1 Crore</option>
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.budget}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">Your Requirements</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          className="w-full px-4 py-3 md:py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-sm md:text-base focus:bg-blue-50"
                          placeholder="Tell us about your specific requirements"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2 mt-6 md:mt-8">
                        <button 
                          type="submit" 
                          className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center text-base md:text-lg"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane mr-2"></i>
                              Submit Inquiry
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section id="why-invest" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Investment Benefits
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Invest in <span className="text-blue-600">Dholera SIR Land</span>?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Secure your future with strategic land investments in India's first planned smart city
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">High ROI Potential</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">With government-backed infrastructure development, land values in Dholera SIR are projected to appreciate significantly over the coming years.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-green-500">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">Strategic Location</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity to major cities, ports, and transportation hubs.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Secure Investment</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">Government-approved project with clear titles, proper documentation, and transparent processes ensuring your investment is secure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandDeal;
