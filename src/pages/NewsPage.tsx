import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews, fetchNewsArticle } from '../api/mockData';
import { NewsArticle } from '../api/types';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import NewsCard from '../components/news/NewsCard';
import { Calendar, User, Tag } from 'lucide-react';

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      if (slug) {
        try {
          const articleData = await fetchNewsArticle(slug);
          if (articleData) {
            setArticle(articleData);
            
            // Fetch related news (same category)
            const allNews = await fetchNews();
            const related = allNews
              .filter(news => news.id !== articleData.id && news.category === articleData.category)
              .slice(0, 3);
            setRelatedNews(related);
          }
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch article:', error);
          setLoading(false);
        }
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <div className="animate-pulse h-96 bg-gray-200 rounded-lg mb-8"></div>
          <div className="animate-pulse h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="section">
        <div className="container text-center">
          <h2>Article not found</h2>
          <p className="mt-4">The article you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero 
        title={article.title} 
        backgroundImage={article.image}
      />

      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {article.category}
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-gray-700 mb-6">{article.excerpt}</p>
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {relatedNews.length > 0 && (
              <div className="mt-16">
                <SectionTitle title="Related News" center={false} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map(newsItem => (
                    <NewsCard key={newsItem.id} article={newsItem} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsListPage: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(news.map(article => article.category.toLowerCase()))];

  const filteredNews = filter === 'all'
    ? news
    : news.filter(article => article.category.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      <PageHero 
        title="Latest News" 
        subtitle="Stay updated with the latest from Gorilla Highland Sports Club"
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NewsPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  
  return slug ? <NewsDetailPage /> : <NewsListPage />;
};

export default NewsPage;