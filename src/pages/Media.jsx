import React, { useState } from 'react';



function Media() {
  // State for active media filter
  const [activeFilter, setActiveFilter] = useState('all');
  // State for dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ type: '', url: '', title: '' });
  
  // Media data - News Articles
  const mediaData = [
    {
      id: 1,
      title: "Gujarat CM reviews on-site progress of overall development works at Dholera SIR",
      excerpt: "on Friday visited Dholera to personally assess the progress of development works at Dholera Special Investment Region (SIR).",
      date: "May 02, 2025 18:49",
      type: "news",
      category: "News ANI",
      image: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250502125106.jpg',
      link: "https://www.aninews.in/news/national/general-news/gujarat-cm-reviews-on-site-progress-of-overall-development-works-at-dholera-sir20250502184936/"
    },
    {
      id: 2,
      title: "Gujarat CM reviews development works at Dholera Special Investment Region",
      excerpt: "Gujarat CM Bhupendra Patel assessed the progress of the Tata Electronics semiconductor plant and the Dholera International Airport, crucial components of the developing 'Semicon City' ecosystem...",
      date: "May 03, 2025 07:39",
      type: "news",
      category: "Interview",
      image: 'https://etimg.etb2bimg.com/photo/120839350.cms',
      link: "https://infra.economictimes.indiatimes.com/news/urban-infrastructure/gujarat-cm-reviews-development-works-at-dholera-special-investment-region/120839327"
    },
    {
      id: 3,
      title: "P.K. Mishra reviews Gujarat infra projects, inspects expressway & heritage complex",
      excerpt: "Dr. P.K. Mishra, Principal Secretary to the Prime Minister, conducted site inspections and chaired high-level review meetings in Dholera and Lothal, Gujarat, on Monday to assess the progress of key infrastructure projects. These initiatives align with Prime Minister Narendra Modi's vision for industrial growth and economic development in the region.",
      date: "16/06/25 | 22:56 ",
      type: "news",
      category: "Report",
      image: 'https://ddnews.gov.in/wp-content/uploads/2025/06/GettyImages-633657840.jpg',
      link: "https://ddnews.gov.in/en/p-k-mishra-reviews-gujarat-infra-projects-inspects-expressway-heritage-complex/"
    },
    {
      id: 4,
      title: "Greenfield Expressway: हाईवे से अहमदाबाद-धोलेरा की यात्रा में बचेंगे 45 मिनट, PM के प्रधान सचिव ने की समीक्षा",
      excerpt: "डॉ. मिश्र ने वैश्विक स्तरीय अहमदाबाद-धोलेरा ग्रीनफील्ड एक्सप्रेसवे को समय पर पूरा करने को लेकर निर्देश दिए। साथ ही धोलेरा विशेष निवेश क्षेत्र (डीएसआईआर) में डॉ. मिश्र ने हवाईअड्डे की प्रगति की भी समीक्षा की। यहां कार्गो संचालन अक्तूबर 2025 तक शुरू हो जाएगा।",
      date: "Jun 2025 05:45",
      type: "news",
      category: "Feature",
      image: 'https://staticimg.amarujala.com/assets/images/2024/11/02/india-committed-to-sendai-framework-for-disaster-risk-reduction-principal-secretary-to-pm_910ff360ae04c23f026bcb89c8044da5.jpeg?w=674&dpr=1.0&q=80',
      link: "https://www.amarujala.com/india-news/pk-mishra-says-greenfield-expressway-construction-tol-save-45-minutes-in-travel-between-ahmedabad-and-dholera-2025-06-17"
    },
    {
      id: 5,
      title: "Japan fully committed to India's journey to manufacture semiconductors: Envoy Ono Keiichi",
      excerpt: "The visit marked a significant milestone in advancing industrial cooperation between India and Japan, built on shared values of innovation, sustainability and inclusive development.",
      date: " Jul 12, 2025 10:51 ",
      type: "news",
      category: "Analysis",
      image: 'https://etimg.etb2bimg.com/photo/122400124.cms',
      link: "https://manufacturing.economictimes.indiatimes.com/news/hi-tech/japan-fully-committed-to-indias-journey-to-manufacture-semiconductors-envoy-ono-keiichi/122400107"
    },
    {
      id: 6,
      title: "Japanese Ambassador leads high-level delegation to Dholera to advance Japan-India industrial cooperation",
      excerpt: "The Ambassador of Japan to India, Keiichi Ono, led a high-level delegation of leading Japanese companies on an official visit to Dholera Special Investment Region (Dholera SIR), marking a significant milestone in advancing industrial cooperation between India and Japan.",
      date: " July 10, 2025 23:20",
      type: "news",
      category: "Update",
      image: 'https://images.moneycontrol.com/static-mcnews/2025/07/20250710174410_Dholera.png?impolicy=website&width=770&height=431',
      link: "https://www.moneycontrol.com/world/japanese-ambassador-leads-high-level-delegation-to-dholera-to-advance-japan-india-industrial-cooperation-article-13262814.html"
    },
    {
      id: 7,
      title: "ધોલેરા SIRની મુલાકાતે જાહેર હિસાબ સમિતિ:ટાટા સેમિકન્ડક્ટર પ્લાન્ટ અને વોટર ટ્રીટમેન્ટ પ્લાન્ટની મુલાકાત લીધી",
      excerpt: "ગુજરાત વિધાનસભાની જાહેર હિસાબ સમિતિ (PAC)એ ધોલેરા SIRની મુલાકાત લીધી હતી. સમિતિએ કાદીપુર ખાતે આવેલા 50 MLD વોટર એન્ડ વેસ્ટ વોટર ટ્રીટમેન્ટ પ્લાન્ટની મુલાકાત લીધી. તેમણે ધોલેરામાં નિર્માણાધીન ટાટા સેમિકન્ડક્ટર પ્લાન્ટ અને એક્ટિવેશન સેન્ટરનું પણ નિરીક્",
      date: "Aug 12, 2025 07:39",
      type: "news",
      category: "Community",
      image: 'https://images.bhaskarassets.com/webp/thumb/512x0/web2images/960/2025/07/17/17da5a72-507c-4304-bdd9-37f8f8c245a6_1752723650762.jpg',
      link: "https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/dholera/news/gujarat-assembly-pac-dholera-sir-visit-tata-semiconductor-plant-water-treatment-135467086.html"
    },
    {
      id: 8,
      title: "Product nation: Dholera and India's quest to build factories for the world",
      excerpt: "A guided tour of the Dholera Special Investment Region (SIR) typically starts with a short audio-visual presentation titled ''New Vision for New India''. ",
      date: "Jan 30, 2026 | 17:37 ",
      type: "news",
      category: "Development",
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2025-05/28/full/1748453868-4954.jpg?im=FitAndFill=(826,465)',
      link: "https://www.business-standard.com/economy/news/product-nation-dholera-and-india-s-quest-to-build-factories-for-the-world-125052801923_1.html"
    },
    // Press Releases
    {
      id: 9,
      title: "Nestoria Group Announces New Residential Project Launch in Dholera SIR",
      excerpt: "Leading real estate developer unveils premium residential plots with modern amenities in India's first smart city.",
      date: "March 10, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news1.jpeg',
      link: "#"
    },
    {
      id: 10,
      title: "Nestoria Group Partners with Global Tech Giants for Dholera Development",
      excerpt: "Strategic collaboration aims to bring world-class infrastructure and technology to Dholera Special Investment Region.",
      date: "March 05, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news2.jpeg',
      link: "#"
    },
    {
      id: 11,
      title: "Nestoria Group Achieves Record Sales in Q1 2026",
      excerpt: "Company reports unprecedented growth in residential and commercial property investments in Dholera SIR.",
      date: "February 28, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news3.jpeg',
      link: "#"
    },
    {
      id: 12,
      title: "Nestoria Group Launches Affordable Housing Initiative",
      excerpt: "New initiative makes dream homes accessible to middle-income families in Dholera's emerging hub.",
      date: "February 20, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news4.jpeg',
      link: "#"
    },
    {
      id: 13,
      title: "Nestoria Group Receives Excellence Award for Sustainable Development",
      excerpt: "Recognition for outstanding contribution to eco-friendly construction practices and green building initiatives.",
      date: "February 15, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news5.jpeg',
      link: "#"
    },
    {
      id: 14,
      title: "Nestoria Group Expands Commercial Portfolio with New Business Hub",
      excerpt: "State-of-the-art commercial complex to boost business opportunities and economic growth in Dholera.",
      date: "February 10, 2026",
      type: "press",
      category: "Press Release",
      image: 'https://nestoriagroup.com/news-images/news6.jpeg',
      link: "#"
    },
    // Videos
    {
      id: 15,
      title: " Dholera Smart City | Nitin Sir Podcast",
      excerpt: "Discover how Nestoria Group is revolutionizing real estate development in India's first smart city.",
      date: "March 2026",
      type: "video",
      category: "Promotional",
      image: 'https://img.youtube.com/vi/FmrBK8TmAvQ/hqdefault.jpg',
      link: "https://www.youtube.com/embed/FmrBK8TmAvQ"
    },
    {
      id: 16,
      title: "TATA's ₹91000 Crore Investment Creates INDIA's Fastest Growing City!",
      excerpt: "Explore the vision and progress of Dholera Special Investment Region.",
      date: "March 2026",
      type: "video",
      category: "Documentary",
      image: 'https://img.youtube.com/vi/884m9TUxxAo/hqdefault.jpg',
      link: "https://www.youtube.com/embed/884m9TUxxAo"
    },
    {
      id: 17,
      title: "Tell Your Story | Episode 1 | Nitin Singh Tomar, MD, Nestoria Group",
      excerpt: "Witness the transformation and groundbreaking development of Dholera Special Investment Region.",
      date: "March 2026",
      type: "video",
      category: "Documentary",
      image: 'https://img.youtube.com/vi/WRjG9ETnCz0/hqdefault.jpg',
      link: "https://www.youtube.com/embed/WRjG9ETnCz0"
    }
  ];

  // Filter media items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.type === activeFilter);

  // Function to open dialog
  const openDialog = (type, url, title) => {
    setDialogContent({ type, url, title });
    setDialogOpen(true);
  };

  // Function to close dialog
  const closeDialog = () => {
    setDialogOpen(false);
    setDialogContent({ type: '', url: '', title: '' });
  };

  // Function to render media item based on type
  const renderMediaItem = (item) => {
    switch(item.type) {
      case 'video':
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <iframe 
                src={`${item.link}?enablejsapi=1&rel=0`} 
                title={item.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full rounded-t-2xl"
                style={{ height: '250px', objectFit: 'cover' }}
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <div 
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => openDialog('video', item.link, item.title)}
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-play text-blue-600 text-2xl ml-1"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div 
                  className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 cursor-pointer"
                  onClick={() => openDialog('video', item.link, item.title)}
                >
                  <i className="fas fa-video text-white text-sm"></i>
                </div>
                <span className="text-sm font-semibold text-red-600">Video</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-video ml-2 mr-2"></i>YouTube
              </p>
              <p className="text-gray-700 leading-relaxed">{item.excerpt}</p>
            </div>
          </div>
        );
      case 'photo':
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <img 
                src={item.image} 
                className="w-full rounded-t-2xl group-hover:scale-110 transition-transform duration-500" 
                alt={item.title} 
                style={{ height: '200px', objectFit: 'cover' }}

              />
              <div 
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => openDialog('image', item.image, item.title)}
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-expand text-blue-600 text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div 
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 cursor-pointer"
                  onClick={() => openDialog('image', item.image, item.title)}
                >
                  <i className="fas fa-camera text-white text-sm"></i>
                </div>
                <span className="text-sm font-semibold text-green-600">Photo Gallery</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-camera ml-2 mr-2"></i>{item.source}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <button 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => openDialog('image', item.image, item.title)}
              >
                <i className="fas fa-images mr-2"></i>View Full Gallery
              </button>
            </div>
          </div>
        );
      default: // news and press
        return (
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <img 
                src={item.image} 
                className="w-full rounded-t-2xl group-hover:scale-110 transition-transform duration-500" 
                alt={item.title} 
                style={{ height: '200px', objectFit: 'cover' }}

              />
              <div 
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => openDialog('image', item.image, item.title)}
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="fas fa-external-link-alt text-blue-600 text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div 
                  className={`w-8 h-8 ${item.type === 'news' ? 'bg-blue-500' : 'bg-purple-500'} rounded-full flex items-center justify-center mr-3 cursor-pointer`}
                  onClick={() => openDialog('image', item.image, item.title)}
                >
                  <i className={`fas ${item.type === 'news' ? 'fa-newspaper' : 'fa-bullhorn'} text-white text-sm`}></i>
                </div>
                <span className={`text-sm font-semibold ${item.type === 'news' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {item.type === 'news' ? 'News Article' : 'Press Release'}
                </span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">
                <i className="fas fa-calendar-alt mr-2"></i>{item.date} | 
                <i className="fas fa-newspaper ml-2 mr-2"></i>{item.source}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-arrow-right mr-2"></i>Read More
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="media-page">
      {/* Dialog Box */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl">
            <button 
              onClick={closeDialog}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
            >
              <i className="fas fa-times text-gray-600 text-xl"></i>
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{dialogContent.title}</h3>
              {dialogContent.type === 'video' ? (
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={`${dialogContent.url}?autoplay=1&enablejsapi=1&rel=0`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    title={dialogContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={dialogContent.url} 
                  alt={dialogContent.title} 
                  className="w-full rounded-lg"

                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="relative bg-blue-600 text-white py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
              Media <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Center</span>
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
              Stay updated with the latest news, press releases, videos, and photos from Nestoria Group and Dholera SIR
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 animate-slide-up opacity-0 animation-delay-500">
              {/* <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-play mr-2"></i>
                  Watch Videos
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button> */}
              {/* <button className="group bg-transparent hover:bg-white/10 text-white font-bold text-base md:text-lg py-3 px-6 md:py-4 md:px-8 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <i className="fas fa-download mr-2"></i>
                  Download Press Kit
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Media Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="w-full">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Browse Media</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <button 
                    className={`${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-th mr-2"></i>All Media
                  </button>
                  <button 
                    className={`${activeFilter === 'news' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('news')}
                  >
                    <i className="fas fa-newspaper mr-2"></i>News Articles
                  </button>
                  <button 
                    className={`${activeFilter === 'press' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('press')}
                  >
                    <i className="fas fa-bullhorn mr-2"></i>Press Releases
                  </button>
                  <button 
                    className={`${activeFilter === 'video' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('video')}
                  >
                    <i className="fas fa-video mr-2"></i>Videos
                  </button>
                  <button 
                    className={`${activeFilter === 'photo' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    onClick={() => setActiveFilter('photo')}
                  >
                    <i className="fas fa-camera mr-2"></i>Photo Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div key={item.id} className="transform hover:scale-105 transition-all duration-300">
                  {renderMediaItem(item)}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No media items found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any media items matching your criteria.</p>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setActiveFilter('all')}
                  >
                    <i className="fas fa-refresh mr-2"></i>View All Media
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Contact Section */}
      <section className="relative bg-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Media <span className="text-blue-600">Inquiries</span>
              </h2>
              <div className="w-24 h-1 bg-blue-300 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 leading-relaxed">
                For press inquiries, interview requests, or additional information about Nestoria Group and Dholera SIR, please contact our media relations team.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8 lg:mb-0">
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-envelope text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Email Us</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Send your media inquiries directly to our press team.</p>
                  <a href="mailto:marketing@nestoriagroup.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-paper-plane mr-2"></i>marketing@nestoriagroup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-phone-alt text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Call Us</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Speak directly with our media relations team.</p>
                  <a href="tel:+919876543210" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-phone mr-2"></i>+919213005611
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm h-full rounded-2xl shadow-xl text-center p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-download text-2xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Press Kit</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">Download our press kit with company information, logos, and high-resolution images.</p>
                  <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <i className="fas fa-download mr-2"></i>Download Press Kit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Media;
