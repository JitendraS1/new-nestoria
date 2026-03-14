import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getReviewSchema } from "../utils/SchemaMarkup";
import { TestimonialService } from "../services/TestimonialService";
import testomonial1 from "/src/assets/img/testomonials/D-P-Kaushik.webp";
import testomonial2 from "/src/assets/img/testomonials/Khargeswar-Brahma.webp";
import testomonial3 from "/src/assets/img/testomonials/Miss.-Arti-Nagpal.webp";
import testomonial4 from "/src/assets/img/testomonials/Mr-CHARANJIT-SINGH.webp";
import testomonial5 from "/src/assets/img/testomonials/Mr-K-C-Anand.webp";
import testomonial6 from "/src/assets/img/testomonials/Mr.-Dayananda-Reddy.webp";
import testomonial7 from "/src/assets/img/testomonials/Shahnawaz-Choudhary.webp";
import testomonial8 from "/src/assets/img/testomonials/Jasbir-Singh-Arora.webp";
import teamDisImg from "/src/assets/img/team/team-dis.webp";
// Video imports removed as files don't exist in the assets directory

function Testimonial() {
  // Testimonial categories
  const categories = [
    { id: "all", name: "All Testimonials" },
    { id: "residential", name: "Residential Plots" },
    { id: "commercial", name: "Commercial Properties" },
    { id: "industrial", name: "Industrial Plots" },
    { id: "investment", name: "Investment Advisory" },
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track which video is playing (by an id)
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Mr. D P Kaushik",
      position: "- Manager, Human Resource Deppt, Govt of India",
      // location: "Ahmedabad",
      category: "commercial",
      rating: 5,
      testimonial:
        "Hello guys. If you are planning to buy some property, don’t waste your time, just dial Nestoria Group and let them do the rest. You just tell them what you need and sit relaxed. Trust me, you will get the perfect piece of property. I must say, one hundred percent satisfaction.",
      image: testomonial1,
      // date: "December 15, 2023"
    },
    {
      id: 2,
      name: "Mr. Khargeswar Brahma",
      position: "EX. ARMY EME (Junior commissioned officer) Indian ARMY",
      // location: "Gandhinagar",
      category: "residential",
      rating: 5,
      testimonial:
        "I would really like to thank the team of Nestoria group for helping me find the best option in Dholera SIR. They understood my requirements and presented me with the best investment option in the Dholera Smart City project. A big thanks to team Nestoria.",
      image: testomonial2,
      // date: "November 5, 2023"
    },
    {
      id: 3,
      name: "Miss. Arti Nagpal",
      position: "Bollywood Actor & Investor",
      // location: "Surat",
      category: "industrial",
      rating: 4,
      testimonial:
        "It’s almost Five years since I got a perfect place to my dream home through Nestoria. And I have recommended it to everyone looking for any type of property. Whenever my friends, relatives, or known ones ask me about the property, my call goes to only Nestoria Group. And this confidence comes from the level of satisfaction we had.",
      image: testomonial3,
      // date: "October 20, 2023"
    },
    {
      id: 4,
      name: "Mr. Charanjit Singh",
      position: "(RETD.) Manager, RBI",
      // location: "Mumbai",
      category: "investment",
      rating: 5,
      testimonial:
        "Now I am the owner of a fantastic property in Dholera Smart City. To be honest, I spent around seven months deciding that and I was confused about investing in Dholera SIR. But then the Nestoria group came to help and explained everything about the location in a transparent manner with appropriate investment options. It really helped me in the right decision-making. And now, I own some properties in Dholera Smart City.",
      image: testomonial4,
      // date: "September 12, 2023"
    },
    {
      id: 5,
      name: "Mr. K. C. Anand",
      position: "General Manager, (Retd) RBI",
      // location: "Vadodara",
      category: "residential",
      rating: 5,
      testimonial:
        "I only explained my requirements and budget to them, and the rest was taken care of by an excellent team of Nestoria. Showcasing only the best possible options really helped me in saving huge time and effort. Really professional.",
      image: testomonial5,
      // date: "August 30, 2023"
    },
    {
      id: 6,
      name: "Mr. Dayananda Reddy",
      position: "MLC Bengaluru & Founder of Dayananda foundation",
      // location: "Ahmedabad",
      category: "commercial",
      rating: 4,
      testimonial:
        "It is tedious and demanding to look for the right property while in a job. It needs effort and involves a risk of wrong selection, but Nestoria made it simple for me. It made my experience as cozy as their property.",
      image: testomonial6,
      // date: "July 15, 2023"
    },
    {
      id: 7,
      name: "Mr. Shahnawaz Choudhary",
      position:
        "Director of Institute of Political Leadership & Political Trainer",
      // location: "Dubai (Originally from Gujarat)",
      category: "investment",
      rating: 5,
      testimonial:
        "As an NRI looking to invest in Indian real estate, I needed a trustworthy partner who could handle everything while I was abroad. Nestoria Group managed the entire process seamlessly - from property selection to legal documentation. Their virtual tours and detailed reports helped me make confident decisions without being physically present. The investment has shown good appreciation, and I'm considering additional investments through them.",
      image: testomonial7,
      // date: "June 22, 2023"
    },
    {
      id: 8,
      name: "Dr. Jasbir Singh Arora",
      position: "International Trainer, business coach & Motivational speaker.",
      // location: "Bhavnagar",
      category: "industrial",
      rating: 5,
      testimonial:
        "Nestoria Group is more than a real estate company. It’s a solution provider, working hard to provide you with the best options. It was a great experience with Nestoria to own the right property.",
      image: testomonial8,
      // date: "May 10, 2023"
    },
  ];

  // Filter testimonials based on active category
  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((item) => item.category === activeCategory);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        ></i>
      );
    }
    return stars;
  };

  // Generate schema markup for testimonials
  const testimonialSchemas = testimonials.map((testimonial) => {
    return getReviewSchema({
      author: testimonial.name,
      rating: testimonial.rating,
      content: testimonial.testimonial,
      date: testimonial.date || new Date().toISOString().split("T")[0],
      title: `${testimonial.name}'s experience with Nestoria Group`,
    });
  });

  return (
    <div className="testimonial-page overflow-hidden bg-[#673a37]">
      {/* SEO Helmet */}
      <Helmet>
        <title>
          Client Testimonials - Nestoria Group | Real Estate Developer in
          Dholera SIR
        </title>
        <meta
          name="description"
          content="Read authentic testimonials from our satisfied clients who have invested in Dholera SIR through Nestoria Group. Discover why we are the most trusted real estate developer."
        />
        <meta
          name="keywords"
          content="Nestoria Group testimonials, client reviews, Dholera SIR investment reviews, real estate testimonials"
        />
        <link rel="canonical" href="https://nestoriagroup.com/testimonial" />

        {/* Add schema markup for testimonials */}
        {testimonialSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Page Header */}
      <div className="relative bg-blue-800 text-white py-16 sm:py-20 md:py-32 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              Client <span className="text-blue-300">Testimonials</span>
            </h1>

            {/* Divider */}
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Hear what our satisfied clients have to say about their experience
              with Nestoria Group
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="#testimonial-content"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-4 px-10 rounded-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-quote-right mr-2"></i>
                  Read Testimonials
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#testimonial-form"
                className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-4 px-10 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-pen mr-2"></i>
                  Share Your Story
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Filter Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Browse Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Filter by property type to find relevant testimonials
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                      activeCategory === category.id
                        ? "bg-blue-700 text-white shadow-lg"
                        : "bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <i
                      className={`fas ${
                        category.id === "all"
                          ? "fa-th"
                          : category.id === "residential"
                          ? "fa-home"
                          : category.id === "commercial"
                          ? "fa-building"
                          : category.id === "industrial"
                          ? "fa-industry"
                          : "fa-chart-line"
                      } mr-2`}
                    ></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                className="transform hover:scale-105 transition-all duration-300"
                key={testimonial.id}
              >
                <div className="h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 group">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 object-cover rounded-full mr-4 border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"

                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-quote-left text-white text-xs"></i>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.name}
                        </h5>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {testimonial.position}
                        </p>
                        <div className="mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-gray-500 text-xs">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                    <div className="testimonial-content relative">
                      <div className="absolute -top-2 -left-2 text-blue-200 text-4xl opacity-30">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p className="text-gray-700 leading-relaxed pl-6 italic">
                        {testimonial.testimonial}
                      </p>
                      <div className="absolute -bottom-2 -right-2 text-blue-200 text-4xl opacity-30">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-search text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No testimonials found
                </h3>
                <p className="text-gray-600 mb-6">
                  We don't have any testimonials in this category yet. Please
                  check back later or select another category.
                </p>
                <button
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setActiveCategory("all")}
                >
                  <i className="fas fa-refresh mr-2"></i>View All Testimonials
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Video <span className="text-blue-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our clients share their experience and success stories with
              Nestoria Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative pb-[56.25%]">
                  {playingVideoId === "vid1" ? (
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      src="https://www.youtube.com/embed/6GHYBLDWZHo?autoplay=1&rel=0"
                      title="Owner's Testimonial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <button
                      type="button"
                      aria-label="Play video testimonial"
                      onClick={() => setPlayingVideoId("vid1")}
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      style={{
                        backgroundImage:
                          "url(https://img.youtube.com/vi/6GHYBLDWZHo/hqdefault.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="sr-only">Play</span>
                    </button>
                  )}
                  {playingVideoId !== "vid1" && (
                    <div className="absolute inset-0 bg-black/20 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <i className="fas fa-play text-blue-600 text-2xl ml-1"></i>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-video text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-semibold text-blue-700">
                      Video Testimonial
                    </span>
                  </div>
                  <h5 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    CEO of the company
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    Mohan Singh Tomar, CEO of the company, shares his insights
                    on leadership and business growth in the real estate sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative pb-[56.25%]">
                  {playingVideoId === "vid2" ? (
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      src="https://www.youtube.com/embed/_ecESivkJoI?autoplay=1&rel=0"
                      title="Nitin Singh Tomar Testimonial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <button
                      type="button"
                      aria-label="Play video testimonial"
                      onClick={() => setPlayingVideoId("vid2")}
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                      style={{
                        backgroundImage:
                          "url(https://img.youtube.com/vi/_ecESivkJoI/hqdefault.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="sr-only">Play</span>
                    </button>
                  )}
                  {playingVideoId !== "vid2" && (
                    <div className="absolute inset-0 bg-black/20 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <i className="fas fa-play text-blue-600 text-2xl ml-1"></i>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-video text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      Video Testimonial
                    </span>
                  </div>
                  <h5 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Owner's Testimonial
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    Nitin Singh Tomar, Director of Nestoria Group, envisions
                    transforming real estate with personalized guidance, expert
                    insights, and unwavering client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed case studies of our client success and investment
              achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group">
                <div className="relative">
                  <img
                    src="/src/assets/img/COMMERCIAL-project.webp"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Commercial Development"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="fas fa-external-link-alt text-blue-600 text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-building text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">
                      Commercial
                    </span>
                  </div>
                  <h5 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    From Empty Plot to Thriving Business Hub
                  </h5>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How Mehta Enterprises transformed their Dholera SIR
                    commercial plot into a profitable business center within 2
                    years.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="fas fa-arrow-right mr-2"></i>Read Case Study
                  </a>
                </div>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group">
                <div className="relative">
                  <img
                    src="/src/assets/img/Residential-project.webp"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Residential Community"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="fas fa-external-link-alt text-blue-600 text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-home text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      Residential
                    </span>
                  </div>
                  <h5 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Building a Dream Community
                  </h5>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The journey of 50 families who collectively invested in
                    adjacent plots to create a gated community with shared
                    amenities.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="fas fa-arrow-right mr-2"></i>Read Case Study
                  </a>
                </div>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group">
                <div className="relative">
                  <img
                    src="/src/assets/img/Industrial-project.webp"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Industrial Development"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="fas fa-external-link-alt text-blue-600 text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-industry text-white text-sm"></i>
                    </div>
                    <span className="text-sm font-semibold text-yellow-600">
                      Industrial
                    </span>
                  </div>
                  <h5 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Manufacturing Excellence in Dholera
                  </h5>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How Gujarat Precision Tools established their
                    state-of-the-art manufacturing facility and benefited from
                    Dholera's strategic location.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="fas fa-arrow-right mr-2"></i>Read Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Share Your <span className="text-blue-600">Nestoria Story</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p className="mb-8 text-xl text-gray-700 leading-relaxed">
                We'd love to hear about your experience with Nestoria Group.
                Your feedback helps us improve and inspires others who are
                considering investing in Dholera SIR.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">
                    Your testimonial may be featured on our website
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">
                    Opportunity to participate in our video testimonial program
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">
                    Help others make informed investment decisions
                  </span>
                </li>
              </ul>
              <a
                href="#testimonial-form"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-pen mr-2"></i>Share Your Story
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={teamDisImg}
                  alt="Share Your Story"
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="text-center text-white">
                    <i className="fas fa-quote-left text-4xl mb-4"></i>
                    <p className="text-xl font-semibold">
                      Your Success is Our Story
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Form Section */}
      <section id="testimonial-form" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Submit Your <span className="text-blue-600">Testimonial</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We appreciate your feedback and would love to hear about your
              experience with Nestoria Group
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="bg-gray-50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = {
                      name: e.target.elements.name.value,
                      email: e.target.elements.email.value,
                      phone: e.target.elements.phone.value,
                      propertyType: e.target.elements["property-type"].value,
                      subject: "Testimonial Submission",
                      message: `Testimonial from ${e.target.elements.name.value}

Property Type: ${e.target.elements["property-type"].value}

Testimonial: ${e.target.elements.testimonial.value}`,
                    };

                    try {
                      // Use TestimonialService to send the form data
                      const result = await TestimonialService.sendTestimonial(
                        formData
                      );

                      if (result.success) {
                        alert(
                          "Thank you for your testimonial! We appreciate your feedback."
                        );
                        e.target.reset();
                      } else {
                        alert(
                          result.message ||
                            "Failed to submit testimonial. Please try again later."
                        );
                      }
                    } catch (error) {
                      console.error("Error submitting testimonial:", error);
                      alert(
                        "Failed to submit testimonial. Please try again later."
                      );
                    }
                  }}
                >
                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-base sm:text-lg font-semibold text-gray-800 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 sm:px-4 sm:py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base"
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base sm:text-lg font-semibold text-gray-800 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 sm:px-4 sm:py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base"
                        id="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-base sm:text-lg font-semibold text-gray-800 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 sm:px-4 sm:py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base"
                        id="phone"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="property-type"
                        className="block text-base sm:text-lg font-semibold text-gray-800 mb-2"
                      >
                        Property Type
                      </label>
                      <select
                        className="w-full px-4 py-3 sm:px-4 sm:py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base"
                        id="property-type"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select property type
                        </option>
                        <option value="residential">Residential Plot</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="industrial">Industrial Plot</option>
                        <option value="investment">Investment Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="testimonial"
                        className="block text-base sm:text-lg font-semibold text-gray-800 mb-2"
                      >
                        Your Testimonial
                      </label>
                      <textarea
                        className="w-full px-4 py-3 sm:px-4 sm:py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base min-h-[120px] sm:min-h-[140px]"
                        id="testimonial"
                        rows="5"
                        placeholder="Share your experience with Nestoria Group"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Rate Your Experience
                      </label>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className="far fa-star text-2xl sm:text-3xl cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start">
                        <input
                          className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-3"
                          type="checkbox"
                          id="permission"
                          required
                        />
                        <label
                          className="text-base sm:text-lg text-gray-700 leading-relaxed"
                          htmlFor="permission"
                        >
                          I give permission to Nestoria Group to use my
                          testimonial on their website and marketing materials
                        </label>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
                      >
                        <i className="fas fa-paper-plane mr-2"></i>Submit
                        Testimonial
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
