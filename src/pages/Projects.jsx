import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxScroll from '../components/ParallaxScroll';
import projectbanner from '/src/assets/img/projects-Banner.webp';
import industrialImg from '/src/assets/img/Industrial-project.webp';
import residentialImg from '/src/assets/img/Residential-project.webp';
import commercialImg from '/src/assets/img/COMMERCIAL-project.webp';
// Import additional project images
import dholeraBhoomi from '/src/assets/img/project/Dholera-Bhoomi.webp';
import dholeraBhoomi2 from '/src/assets/img/project/Dhollera-Bhoomi2 .webp';
import dholeraBhoomi3 from '/src/assets/img/project/DHOLERA BHOOMI-III .webp';
import orchidLuxury from '/src/assets/img/project/ORCHID LUXURY-BROSER.webp';
import orchidRiverView from '/src/assets/img/project/ORCHID-RIVER-VIEW.webp';
import orchidVillaGreens from '/src/assets/img/project/ORCHID VILLA GREENS-BROSHER.webp';
import orchidVillaLuxuriya from '/src/assets/img/project/ORCHID VILLA LUXURIYA-BROSHER.webp';
import orchidVillaParadise from '/src/assets/img/project/ORCHID VILLA PARADISE 2 NEW 12-12-2023 POXI.webp';
import orchidVillaGold from '/src/assets/img/project/ORCHILD-VILLA-GOLD.webp';
import orchidNatureRegency from '/src/assets/img/project/Orchid Nature Regency_1 (1).webp';
import palmVillas from '/src/assets/img/project/Palm Villas.webp';

function Projects() {
  // State for active project filter
  const [activeFilter, setActiveFilter] = useState('all');
  // State for image dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState('');
  const [dialogAlt, setDialogAlt] = useState('');
  
  // Project data
  const projects = [
    
    {
      id: 1,
      type: 'residential',
      title: 'Dholera Bhoomi',
      location: 'Dholera SIR',
      area: 'Various sizes',
      image: dholeraBhoomi,
      description: 'Premium residential project offering a variety of plot sizes in a well-planned community.'
    },
    {
      id: 2,
      type: 'residential',
      title: 'Dholera Bhoomi Phase II',
      location: 'Dholera SIR',
      area: 'Various sizes',
      image: dholeraBhoomi2,
      description: 'Continuation of the successful Dholera Bhoomi project with enhanced amenities and facilities.'
    },
    {
      id: 3,
      type: 'residential',
      title: 'Dholera Bhoomi Phase III',
      location: 'Dholera SIR',
      area: 'Various sizes',
      image: dholeraBhoomi3,
      description: 'Latest phase of the Dholera Bhoomi project featuring modern infrastructure and sustainable living.'
    },
    {
      id: 4,
      type: 'residential',
      title: 'Orchid Luxury',
      location: 'Dholera SIR',
      area: '2000-5000 sq.ft.',
      image: orchidLuxury,
      description: 'Luxury villa project with premium amenities and contemporary architecture.'
    },
    {
      id: 5,
      type: 'residential',
      title: 'Orchid River View',
      location: 'Dholera SIR',
      area: '1500-4000 sq.ft.',
      image: orchidRiverView,
      description: 'Beautiful residential project with scenic river views and modern facilities.'
    },
    {
      id: 6,
      type: 'residential',
      title: 'Orchid Villa Greens',
      location: 'Dholera SIR',
      area: '2500-6000 sq.ft.',
      image: orchidVillaGreens,
      description: 'Eco-friendly villa project with lush green surroundings and sustainable design.'
    },
    {
      id: 7,
      type: 'residential',
      title: 'Orchid Villa Luxuriya',
      location: 'Dholera SIR',
      area: '3000-7000 sq.ft.',
      image: orchidVillaLuxuriya,
      description: 'Ultra-luxury villa project with world-class amenities and premium finishes.'
    },
    {
      id: 8,
      type: 'residential',
      title: 'Orchid Villa Paradise',
      location: 'Dholera SIR',
      area: '2000-5000 sq.ft.',
      image: orchidVillaParadise,
      description: 'Paradisiacal living experience with modern amenities and beautiful landscaping.'
    },
    {
      id: 9,
      type: 'residential',
      title: 'Orchid Villa Gold',
      location: 'Dholera SIR',
      area: '1800-4500 sq.ft.',
      image: orchidVillaGold,
      description: 'Premium villa project with golden-standard amenities and elegant design.'
    },
    {
      id: 10,
      type: 'residential',
      title: 'Orchid Nature Regency',
      location: 'Dholera SIR',
      area: '1500-4000 sq.ft.',
      image: orchidNatureRegency,
      description: 'Harmonious blend of nature and luxury living in a serene environment.'
    },
    {
      id: 11,
      type: 'residential',
      title: 'Palm Villas',
      location: 'Dholera SIR',
      area: '2000-5000 sq.ft.',
      image: palmVillas,
      description: 'Tropical-inspired villa project with palm tree landscaping and resort-style amenities.'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Status badge color mapping
  const statusColors = {
    'Completed': 'bg-green-600',
    'Ongoing': 'bg-blue-600',
    'Upcoming': 'bg-yellow-600'
  };

  // Open dialog with image
  const openDialog = (image, alt) => {
    setDialogImage(image);
    setDialogAlt(alt);
    setIsDialogOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close dialog when pressing Escape key
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isDialogOpen) {
        closeDialog();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isDialogOpen]);

  return (
    <div className="projects-page overflow-hidden bg-[#673a37]">
       {/* Page Header */}
      <ParallaxSection
        backgroundImage={projectbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Our <span className="text-blue-300">Projects</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of residential, commercial, and industrial projects in Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Browse Projects
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
     
      

      {/* Projects Content */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Browse Our Portfolio</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  className={`${activeFilter === 'all' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('all')}
                >
                  <i className="fas fa-th mr-2"></i>All Projects
                </button>
                <button 
                  className={`${activeFilter === 'residential' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('residential')}
                >
                  <i className="fas fa-home mr-2"></i>Residential
                </button>
                <button 
                  className={`${activeFilter === 'commercial' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('commercial')}
                >
                  <i className="fas fa-building mr-2"></i>Commercial
                </button>
                <button 
                  className={`${activeFilter === 'industrial' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50'} px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  onClick={() => setActiveFilter('industrial')}
                >
                  <i className="fas fa-industry mr-2"></i>Industrial
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <ParallaxScroll speed={0.05} className="z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
                      alt={project.title} 
                      onClick={() => openDialog(project.image, project.title)}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <i className="fas fa-eye text-blue-600 text-2xl"></i>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      {/* <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </div> */}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-600 mb-3 flex items-center">
                        <i className="fas fa-map-marker-alt text-blue-600 mr-3 w-5"></i>
                        {project.location}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <i className="fas fa-ruler-combined text-blue-600 mr-3 w-5"></i>
                        {project.area}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    <Link to="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <i className="fas fa-arrow-right mr-2"></i>Enquire Now
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No projects found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any projects matching your criteria.</p>
                  <button 
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-refresh mr-2"></i>View All Projects
                  </button>
                </div>
              </div>
            )}
          </div>
        </ParallaxScroll>
        </div>
      </div>

      {/* Call to Action Section */}
      <ParallaxSection
        backgroundImage={projectbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Looking for a <span className="text-blue-200">Custom Project?</span>
          </h2>
          <div class="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Contact our team to discuss your specific requirements and explore customized property solutions in Dholera SIR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-phone mr-2"></i>Contact Our Experts
            </Link>
            <Link to="/about" className="inline-block bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-white hover:border-blue-300 font-bold py-4 px-10 rounded-lg transition-all duration-300">
              <i className="fas fa-info-circle mr-2"></i>Learn More
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
       
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Subscribe to Our <span className="text-blue-200">Newsletter</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Stay updated with our latest projects, property listings, and investment opportunities in Dholera SIR.
                </p>
              </div>
              <form className="flex flex-col md:flex-row gap-4" onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                try {
                  const { ContactService } = await import("../services/ContactService");
                  const result = await ContactService.sendContactForm({
                    name: "Newsletter Subscriber",
                    email,
                    phone: "",
                    subject: "Newsletter Subscription",
                    message: `Please subscribe ${email} to the newsletter.`,
                  });

                  if (result.success) {
                    alert("Thank you for subscribing!");
                    e.target.reset();
                  } else {
                    alert(result.message || "Failed to subscribe.");
                  }
                } catch (error) {
                  alert("Failed to subscribe. Please try again later.");
                }
              }}>
                <input 
                  type="email" 
                  name="email"
                  className="flex-grow px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300" 
                  placeholder="Your Email Address"
                  required
                />
                <button 
                  type="submit" 
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Subscribe
                </button>
              </form>
            </div>
          </div>
       
      </section>

      {/* Image Dialog */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeDialog}
          role="dialog"
          aria-modal="true"
          aria-label="Image dialog"
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
              onClick={closeDialog}
              aria-label="Close dialog"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img src={dialogImage} alt={dialogAlt} className="max-h-screen max-w-full object-contain" id="dialog-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
