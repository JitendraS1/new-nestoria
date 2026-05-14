import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TabsComponent from '../components/TabsComponent';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';
import aboutdholeraimg from '/src/assets/img/aboutdholera.webp'
import futuredholera from '/src/assets/img/futuredholera.webp'
import dholeraconnectivity from '/src/assets/img/dholeraconnectivity.webp'

function Aboutdholera() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    propertyType: '1',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Import the service dynamically to avoid circular dependencies
        const { AboutdholeraService } = await import('../services/AboutdholeraService');
        
        const result = await AboutdholeraService.sendAboutdholeraRequest(formData);
        
        if (result.success) {
          setFormSubmitted(true);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            mobile: '',
            propertyType: '1',
            message: ''
          });
        } else {
          alert(result.message || 'There was an error submitting your request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <>
     

      {/* Header Start */}
       <div className="relative bg-blue-600 text-white py-16 sm:py-20 md:py-32 overflow-hidden">
       
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="max-w-6xl mx-auto">
            
     
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              About <span className="text-blue-300">Dholera SIR</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              India's First Planned Smart Industrial City with unlimited growth potential
            </p>
           
          </div>
           
           
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <Link
                to="/land-deals"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden focus:outline-none focus:ring-0"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Explore Opportunities
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm focus:outline-none focus:ring-0"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </span>
              </Link>
              
            </div>
            </div>
          </div>
        </div>
      </div>
      
           
      {/* Header End */}
      
     

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h6 className="text-blue-600 font-semibold text-lg mb-3 uppercase tracking-wider">
                India's First Smart City
              </h6>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Dholera Special Investment <span className="text-blue-600">Region (SIR)</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Dholera SIR is a greenfield industrial planned city near Dholera in Gujarat's Ahmedabad district, around 100 kilometers to the south-west. Spread over more than 920 sq. km, it is a new industrial city being jointly developed by the Government of India and Gujarat.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Dholera is strategically located, well connected with trade gateways and falls in the influence zone of proposed Delhi – Mumbai Industrial Corridor project (DMIC), a joint initiative by the Government of India and Japan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
                {[
                  "Strategic Location",
                  "World-Class Infrastructure",
                  "Government Backed",
                  "Investment Potential"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start p-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 border-blue-500"
                  >
                    <div className="flex-shrink-0 mr-3 bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <i className="fa fa-check text-blue-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/land-deals" 
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-0"
                aria-label="Explore Land Deals"
              >
                <span>Explore Opportunities</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
              {/* <a
                href="https://dholera.gujarat.gov.in/dholera_virtual_tours/static/src/Dholera%20SIR/data/index.htm"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-0"
                aria-label="Virtual Tour" target="_blank"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-street-view"></i>
                  Virtual Tour
                </span>
              </a> */}
              
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  className="w-full h-80 sm:h-96 md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={futuredholera} 
                  alt="Overview of Dholera SIR" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-3xl font-bold px-6 py-4 border-2 border-white rounded-lg mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Discover Dholera
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-blue-600 font-semibold text-sm">Smart City</span>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
      
      {/* What Sets Us Apart Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4"> */}
          {/* Section Header */}
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              What Sets Us Apart...
            </h2>
            <div className="h-1 w-32 bg-blue-600 mx-auto"></div>
          </div> */}

          {/* Features Grid */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_worldclass_infrastructure.png",
                title: "Worldclass Infrastructure",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Worldclass_Infrastructure"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_ease_of_governance.png",
                title: "Ease of Governance",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Ease_of_Governance"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_plug_play.png",
                title: "Plug & Play",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Plug_Play"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_social_infrastructure.png",
                title: "Social Infrastructure",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Social_Infrastructure"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_ease_of_business.png",
                title: "Ease of Business",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Ease_of_Business"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_external_connectivity.png",
                title: "External Connectivity",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#External_Connectivity"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_live_workand_play.png",
                title: "Live, Work and Play",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Live_Work_Play"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_technology.png",
                title: "Technology",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Technology"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_sustainability.png",
                title: "Sustainability",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Sustainability"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_fast_track_approvals.png",
                title: "Fast Track Approvals",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Fast_Track_Approvals"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_security.png",
                title: "Security",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Security"
              },
              {
                icon: "https://dholera.gujarat.gov.in/dicdl_web_portal/static/src/img/smart_icons/dicdl_internal_connectivity.png",
                title: "Internal Connectivity",
                link: "https://dholera.gujarat.gov.in/advantage_dholera#Internal_Connectivity"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <a href={feature.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 h-full flex flex-col items-center p-6 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight text-center">
                      {feature.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div> */}
          
          {/* Source Credit */}
          {/* <div className="mt-8 text-right">
            <p className="text-sm text-gray-500 italic">
              Source: <a href="https://dholera.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">DICDL</a>
            </p>
          </div>
        </div>
      </section> */}


      {/* Dholera SIR Tabs Section */}
      <section id='tab-section' className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Discover More
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Explore <span className="text-blue-600">Dholera SIR</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Discover the vision, infrastructure, connectivity, and investment opportunities in India's first planned smart city</p>
          </div>
          
          {/* Tabs Component */}
          <div className="mb-10">
            {/* Tabs Navigation */}
            <TabsComponent />
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Infrastructure
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Key Features of <span className="text-blue-600">Dholera SIR</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Dholera SIR is being developed with world-class infrastructure and facilities to create a sustainable and smart urban environment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "fa fa-road",
                title: "Smart Transportation",
                desc: "Integrated transportation network with metro rail, high-speed rail, expressways, and international airport connectivity.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "fa fa-solar-panel",
                title: "Renewable Energy",
                desc: "Focus on renewable energy sources including solar parks and wind farms to ensure sustainable power supply.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "fa fa-tint",
                title: "Water Management",
                desc: "Advanced water management systems including water treatment plants, recycling facilities, and flood control measures.",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                icon: "fa fa-wifi",
                title: "Digital Connectivity",
                desc: "High-speed internet connectivity and smart city infrastructure for seamless digital integration.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "fa fa-industry",
                title: "Industrial Zones",
                desc: "Dedicated industrial zones for various sectors including manufacturing, IT, electronics, and more.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "fa fa-leaf",
                title: "Green Spaces",
                desc: "Abundant green spaces, parks, and recreational areas for a balanced urban environment.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-4 border-t-4 border-blue-500 hover:border-blue-400">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-br ${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <i className={`${feature.icon} text-2xl text-white`}></i>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  className="w-full h-80 sm:h-96 md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={dholeraconnectivity}
                  alt="Strategic Location of Dholera SIR" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-3xl font-bold px-6 py-4 border-2 border-white rounded-lg mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Location
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-blue-600 font-semibold text-sm">DMIC Zone</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="text-blue-600 font-semibold text-lg mb-3 uppercase tracking-wider">
                Strategic Location
              </h6>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Perfectly Positioned for <span className="text-blue-600">Growth</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Dholera SIR is strategically located in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world's largest infrastructure projects. This prime location offers excellent connectivity and access to major markets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                {[
                  "100 km from Ahmedabad",
                  "30 km from Bhavnagar",
                  "Dedicated Freight Corridor",
                  "Planned International Airport"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start p-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 border-blue-500"
                  >
                    <div className="flex-shrink-0 mr-3 bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <i className="fa fa-check text-blue-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                The strategic location of Dholera SIR makes it an ideal destination for businesses looking to establish a presence in India's rapidly growing economy. With excellent connectivity to major cities and ports, Dholera SIR offers unparalleled access to domestic and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Potential Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h6 className="text-blue-600 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wider">
              Investment Opportunity
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Investment <span className="text-blue-600">Potential</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Dholera SIR offers significant investment opportunities across various sectors, backed by government support and world-class infrastructure</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "fa fa-chart-line",
                title: "High ROI",
                desc: "Significant appreciation potential with government backing and planned development.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "fa fa-building",
                title: "Multiple Sectors",
                desc: "Investment opportunities in residential, commercial, and industrial sectors.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "fa fa-handshake",
                title: "Government Support",
                desc: "Strong government backing with special incentives for investors.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "fa fa-globe",
                title: "Global Hub",
                desc: "Positioned to become a global manufacturing and trading hub.",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white text-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-4 border-t-4 border-blue-500 hover:border-blue-400">
                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <i className={`${item.icon} text-2xl md:text-3xl`}></i>
                      </div>
                      <h5 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage={aboutdholeraimg}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-7/12 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Invest in <span className="text-blue-300">Dholera SIR</span>?
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mb-8"></div>
              <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
                Contact our expert team today to explore premium investment opportunities in Dholera SIR. We'll guide you through every step of your investment journey with personalized solutions and expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 md:px-12 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg"
                  aria-label="Contact Us Now"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-phone mr-2"></i>
                    Contact Us Now
                  </span>
                </Link>
                <Link 
                  to="/land-deals" 
                  className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 md:px-12 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-lg backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-search mr-2"></i>
                    View Properties
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <h5 className="text-2xl font-bold text-blue-600">Request Information</h5>
                </div>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-6xl mb-4">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h3>
                    <p className="text-gray-600 text-lg">Your request has been submitted successfully. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                            errors.name 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`} 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name" 
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                        <input 
                          type="text" 
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                            errors.mobile 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`} 
                          id="mobile" 
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter your mobile number" 
                        />
                        {errors.mobile && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.mobile}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                            errors.email 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`} 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address" 
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                        <select 
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all duration-300 text-sm md:text-base focus:bg-blue-50" 
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                        >
                          <option value="1">Residential Plot</option>
                          <option value="2">Commercial Property</option>
                          <option value="3">Industrial Plot</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                        <textarea 
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base ${
                            errors.message 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:bg-blue-50"
                          }`} 
                          placeholder="Tell us about your property requirements" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <div className="sm:col-span-2 text-center">
                        <button 
                          className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto" 
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <i className="fa fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              <i className="fas fa-paper-plane mr-2"></i>
                              Submit Request
                            </span>
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
      </ParallaxSection>
    </>
  );
}

export default Aboutdholera;
