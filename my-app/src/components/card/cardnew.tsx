import type React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardcss/newcard.css";

interface NewsCardProps {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  pubDate: string;
  image_url: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Thêm onClick
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, keywords, description, pubDate, image_url, onClick }) => {
  return (
    <Link
      to={`/news/${id}`}
      className="news-card"
      onClick={onClick} // Gắn onClick vào Link
    >
      <div className="news-card-image">
        <img src={image_url} alt={title} />
      </div>
      <div className="news-card-content">
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-description">{description}</p>
        <div className="news-card-meta">
          <span className="news-card-date">{pubDate}</span>
          <div className="news-card-keywords">
            {keywords.map((keyword, index) => (
              <span key={index} className="news-card-keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;