import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from '../components/ParallaxSection';
import newsBanner from '../assets/img/media.webp';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use a ref to track all fetched URLs (persists across renders)
  const fetchedUrlsRef = React.useRef(new Set());

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        '/api/everything?q=dholera&from=2026-02-17&sortBy=publishedAt&apiKey=f6b55aa8e8d64f69ba580d57524a4b5f'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      const articles = data.articles || [];
      
      // Filter out duplicate articles based on URL or title
      const uniqueArticles = articles.filter(article => {
        if (!article.url && !article.title) return false; // Skip articles without URL and title
        
        // Check if we've already seen this URL or title
        const urlKey = article.url ? `url:${article.url}` : '';
        const titleKey = article.title ? `title:${article.title.toLowerCase().trim()}` : '';
        const identifier = urlKey || titleKey;
        
        if (fetchedUrlsRef.current.has(identifier)) {
          return false;
        }
        
        // Add to fetched URLs
        fetchedUrlsRef.current.add(identifier);
        return true;
      });
      
      // If no new articles, don't update state
      if (uniqueArticles.length === 0 && news.length > 0) {
        setLoading(false);
        return;
      }
      
      // Combine with existing news and remove any duplicates within the new batch
      const combinedNews = [...news, ...uniqueArticles];
      const seenIdentifiers = new Set();
      const deduplicatedNews = combinedNews.filter(article => {
        if (!article.url && !article.title) return false;
        
        const urlKey = article.url ? `url:${article.url}` : '';
        const titleKey = article.title ? `title:${article.title.toLowerCase().trim()}` : '';
        const identifier = urlKey || titleKey;
        
        if (seenIdentifiers.has(identifier)) {
          return false;
        }
        seenIdentifiers.add(identifier);
        return true;
      });
      
      setNews(deduplicatedNews);
      setError(null);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching news');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="latest-news-page bg-white">
      <Helmet>
        <title>Latest News - Nestoria Group | Dholera SIR Updates</title>
        <meta name="description" content="Stay updated with the latest news and developments about Dholera SIR and Nestoria Group." />
      </Helmet>

      {/* Page Header */}
      <ParallaxSection
        backgroundImage={newsBanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.25), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up font-condor leading-tight">
              Latest <span className="text-blue-300">News</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 animate-slide-up opacity-0 animation-delay-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest updates from Dholera SIR
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* News Content */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <i className="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
                <h3 className="text-2xl font-bold text-red-700 mb-2">Unable to Load News</h3>
                <p className="text-red-600 mb-6">{error}</p>
                <button
                  onClick={fetchLatestNews}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className="fas fa-redo mr-2"></i>Try Again
                </button>
              </div>
            </div>
          ) : news.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <i className="fas fa-newspaper text-5xl text-blue-500 mb-4"></i>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">No News Available</h3>
                <p className="text-blue-600">Check back later for the latest updates.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Recent Updates
                </h2>
                <div className="h-1 w-32 bg-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4 text-lg">
                  {news.length} article{news.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {article.urlToImage ? (
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x250?text=News+Image';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <i className="fas fa-newspaper text-6xl text-white/30"></i>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          News
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {article.description || 'Click to read full article...'}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          {article.source?.name && (
                            <span className="text-sm text-blue-600 font-medium">
                              <i className="fas fa-bullhorn mr-2"></i>
                              {article.source.name}
                            </span>
                          )}
                        </div>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300"
                        >
                          Read More <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
