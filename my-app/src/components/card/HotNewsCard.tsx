import type React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardcss/hotnewscard.css";

interface HotNewsCardProps {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  pubDate: string;
  image_url?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Thêm onClick
}

const HotNewsCard: React.FC<HotNewsCardProps> = ({ id, title, keywords, description, pubDate, image_url, onClick }) => {
  return (
    <Link
      to={`/news/${id}`}
      className="hot-news-card"
      onClick={onClick} // Gắn onClick vào Link
    >
      <div className="hot-news-image">
        {image_url && <img src={image_url} alt={title} />}
      </div>
      <div className="hot-news-content">
        <h2 className="hot-news-title">{title}</h2>
        <p className="hot-news-description">{description}</p>
        <div className="hot-news-meta">
          <span className="hot-news-date">{pubDate}</span>
          <div className="hot-news-keywords">
            {keywords.map((keyword, index) => (
              <span key={index} className="hot-news-keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotNewsCard;