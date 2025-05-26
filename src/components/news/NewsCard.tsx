import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../../api/types';
import { Calendar, ChevronRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="card group hover:translate-y-[-5px]">
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
  );
};

export default NewsCard;