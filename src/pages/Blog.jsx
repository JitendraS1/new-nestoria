import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from '../components/ParallaxSection';
import blogbanner from '/src/assets/img/blog.webp'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'investment', name: 'Investment' },
    { id: 'dholera', name: 'Dholera SIR' },
    { id: 'market-trends', name: 'Market Trends' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Nestoria Group Welcomes a New Dawn of Intelligent Building with 3D Homes in Dholera",
      excerpt: "The Indian real estate market is entering an ambitious new era with Nestoria group being on the forefront of developing 3D-printed houses on a large scale at Dholera",
      date: "March 14, 2026",
      author: "India CSR",
      category: "investment",
      image: "https://indiacsr.in/wp-content/uploads/2026/02/India-Builds.jpg",
      link: "https://indiacsr.in/nestoria-group-welcomes-a-new-dawn-of-intelligent-building-with-3d-homes-in-dholera/"
    },
     {
       id: 2,
       title: "Nestoria Group Brings 3D Printed Construction to Dholera Smart City",
       excerpt: "Nestoria Group has initiated 3D printed construction technology in Dholera, positioning the project as a significant development within India’s emerging smart city landscape. ",
       date: "March 2, 2026",
       author: "Devdarsh Nambiar",
       category: "market-trends",
       image: "https://www.aurumproptech.in/_next/image?url=https%3A%2F%2Fd1smx9vz40s2y3.cloudfront.net%2Fmedia%2Fbanner_image%2F1772448735861-nestoria-group-brings-3d-printed-construction-to-dholera-smart-city.jpeg&w=828&q=75",
       link: "https://www.aurumproptech.in/pulse/media/nestoria-group-brings-3d-printed-construction-to-dholera-smart-city"
     }
    // {
    //   id: 3,
    //   title: "The Delhi-Mumbai Industrial Corridor: A Game Changer for Gujarat",
    //   excerpt: "Learn how the DMIC project is transforming the economic landscape of Gujarat and creating unprecedented opportunities for growth.",
    //   date: "April 10, 2023",
    //   author: "Amit Shah",
    //   category: "market-trends",
    //   image: "/src/assets/img/connectivity.webp",
    //   readTime: "6 min read"
    // },
    // {
    //   id: 4,
    //   title: "Residential vs. Commercial: Which Property Type Offers Better Returns in Dholera?",
    //   excerpt: "A comparative analysis of residential and commercial property investments in Dholera SIR to help you make informed investment decisions.",
    //   date: "March 22, 2023",
    //   author: "Neha Gupta",
    //   category: "real-estate",
    //   image: "/src/assets/img/Residential-project.webp",
    //   readTime: "8 min read"
    // },
    // {
    //   id: 5,
    //   title: "The Future of Sustainable Development in Dholera SIR",
    //   excerpt: "Explore how Dholera SIR is implementing green technologies and sustainable practices to create an eco-friendly urban environment.",
    //   date: "February 15, 2023",
    //   author: "Vikram Singh",
    //   category: "dholera",
    //   image: "/src/assets/img/smart-city.gif",
    //   readTime: "5 min read"
    // },
    // {
    //   id: 6,
    //   title: "How to Finance Your Property Purchase in Dholera SIR",
    //   excerpt: "A comprehensive guide to financing options, loan schemes, and payment plans available for property purchases in Dholera SIR.",
    //   date: "January 30, 2023",
    //   author: "Sanjay Mehta",
    //   category: "real-estate",
    //   image: "/src/assets/img/COMMERCIAL-project.webp",
    //   readTime: "7 min read"
    // },
    // {
    //   id: 7,
    //   title: "2023 Real Estate Market Trends: What Investors Should Know",
    //   excerpt: "Stay ahead of the curve with insights into the latest real estate market trends and how they might impact your investment strategy.",
    //   date: "January 12, 2023",
    //   author: "Ananya Desai",
    //   category: "market-trends",
    //   image: "/src/assets/img/Industrial-project.webp",
    //   readTime: "6 min read"
    // },
    // {
    //   id: 8,
    //   title: "The Rise of Industrial Real Estate in Dholera SIR",
    //   excerpt: "Discover why industrial properties in Dholera SIR are becoming increasingly attractive to investors and businesses alike.",
    //   date: "December 5, 2022",
    //   author: "Rahul Verma",
    //   category: "investment",
    //   image: "/src/assets/img/Industrial.webp",
    //   readTime: "5 min read"
    // },
    // {
    //   id: 9,
    //   title: "Smart Infrastructure: The Backbone of Dholera SIR",
    //   excerpt: "An in-depth look at the cutting-edge infrastructure being developed in Dholera SIR and how it's setting new standards for urban development.",
    //   date: "November 18, 2022",
    //   author: "Deepak Kumar",
    //   category: "dholera",
    //   image: "/src/assets/img/masterplan.webp",
    //   readTime: "8 min read"
    // }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page bg-white">
      <Helmet>
        <title>Blog - Nestoria Group | Dholera SIR</title>
        <meta name="description" content="Stay updated with the latest news, insights, and trends in real estate and Dholera SIR through our blog." />
      </Helmet>
      
      {/* Page Header */}
       <ParallaxSection
        backgroundImage={blogbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Our <span className="text-blue-300">Blog</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Explore our latest articles, news, and insights about Dholera SIR and real estate
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              <a
                href="#blog-content"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-newspaper mr-2"></i>
                  Read Articles
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#newsletter"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-8 md:px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Subscribe
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </ParallaxSection>
      
      
      

      {/* Blog Content */}
      <section id="blog-content" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 md:mb-16">
            <div className="flex justify-center flex-wrap gap-3 md:gap-4">
              {categories.map(category => (
                <button 
                  key={category.id} 
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base transform hover:-translate-y-1 hover:scale-105 ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl' 
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map(post => (
              <div className="mb-6" key={post.id}>
                <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-gray-100 group transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      className="w-full h-48 md:h-56 object-cover transform transition-transform duration-700 group-hover:scale-110" 
                      alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white text-lg font-bold px-6 py-3 border-2 border-white rounded-lg mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Read More
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                        {categories.find(cat => cat.id === post.category).name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <span className="text-sm text-gray-500 font-medium mb-2 sm:mb-0">{post.date}</span>
                      <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">{post.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
                    
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="mr-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center font-medium shadow-lg">
                          {post.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700 block">{post.author}</span>
                        <span className="text-xs text-gray-500">Author</span>
                      </div>
                    </div>
                  </div>
                  {post.link ? (
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute inset-0" 
                      aria-label={`Read more about ${post.title}`}
                    ></a>
                  ) : (
                    <Link to={`/blog/${post.id}`} className="absolute inset-0" aria-label={`Read more about ${post.title}`}></Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="text-center py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">No posts found in this category</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">Please try selecting a different category or check back later for new content.</p>
                <button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl font-bold transform hover:-translate-y-1 hover:scale-105"
                  onClick={() => setActiveCategory('all')}
                >
                  <span className="flex items-center">
                    <i className="fas fa-arrow-left mr-2"></i>
                    View All Posts
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Subscribe to Our <span className="text-blue-300">Newsletter</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest news, property listings, and insights about Dholera SIR development and investment opportunities.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.elements.email.value;
              
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
                className="bg-gradient-to-r from-white to-blue-100 text-blue-600 px-8 py-4 rounded-lg transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
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
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Invest in <span className="text-blue-300">Dholera SIR</span>?
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mb-8"></div>
              <p className="text-lg md:text-xl mb-0 text-white/90 leading-relaxed">
                Contact our team today to explore investment opportunities in India's first planned smart city.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-white to-blue-100 text-blue-600 hover:from-blue-50 hover:to-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </span>
              </Link>
              <Link 
                to="/land-deals" 
                className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  View Properties
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
