import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { fetchNews } from '../../api/mockData';
import { NewsArticle } from '../../api/types';
import SectionTitle from '../shared/SectionTitle';

const FeaturedNews: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData.slice(0, 3)); // Get the 3 most recent articles
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <SectionTitle title="Latest News\" subtitle="Stay updated with the latest from Gorilla Highland SC" />
          <div className="flex justify-center">
            <div className="animate-pulse h-64 w-full max-w-2xl bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <SectionTitle title="Latest News" subtitle="Stay updated with the latest from Gorilla Highland SC" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article) => (
            <div key={article.id} className="card group hover:translate-y-[-5px]">
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600"
                >
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/news" className="btn btn-outline">
            View All News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;