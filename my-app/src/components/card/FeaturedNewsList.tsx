import type React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardcss/featurednewslist.css";
import {  type NewsItem } from "../../servers/NewsService";

interface FeaturedNewsListProps {
  items: NewsItem[];
  onItemClick: (news: NewsItem, event: React.MouseEvent<HTMLAnchorElement>) => void; // Thêm onItemClick
}

const FeaturedNewsList: React.FC<FeaturedNewsListProps> = ({ items, onItemClick }) => {
  return (
    <div className="featured-news-list">
      <ul>
        {items.map((item) => (
          <li key={item.article_id}>
            <Link
              to={`/news/${item.article_id}`} 
              className="featured-item"
              onClick={(event) => onItemClick(item, event)} // Gắn onItemClick
            >
              <span className="featured-title">{item.title}</span>
              <span className="featured-time">{item.pubDate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedNewsList;