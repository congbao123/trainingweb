import type React from "react"
import { Link } from "react-router-dom"
import "../../styles/cardcss/newcard.css"

// Định nghĩa interface cho props của NewsCard
interface NewsCardProps {
  id: string // ID bài báo để điều hướng
  title: string
  keywords: string[]
  description: string
  pubDate: string // Chuỗi ngày, ví dụ: "2023-10-01"
  image_url: string
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, keywords, description, pubDate, image_url, }) => {
  return (
    <Link to={`/news/${id}`} className="news-card">
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
  )
}

export default NewsCard
