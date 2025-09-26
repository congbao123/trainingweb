import type React from "react";
import { Link } from "react-router-dom"; // Thay <a> bằng <Link>
import "../../styles/cardcss/cryptonewslist.css";
import { type NewsItem } from "../../servers/NewsService";

interface CryptoNewsListProps {
  items: NewsItem[];
  onItemClick: (news: NewsItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CryptoNewsList: React.FC<CryptoNewsListProps> = ({ items, onItemClick }) => {
  return (
    <div className="crypto-news-list">
      <ul>
        {items.map((item) => (
          <li key={item.article_id}>
            <Link
              to={`/news/${item.article_id}`} // Sửa link
              className="crypto-item"
              onClick={(event) => onItemClick(item, event)}
            >
              <span className="crypto-title">{item.title}</span>
              <span className="crypto-time">{item.pubDate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoNewsList;