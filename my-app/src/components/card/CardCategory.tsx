import type React from "react"
import { Link } from "react-router-dom"
import "../../styles/cardcss/CardCategory.css"


interface CardCategoryProps {
  id: string
  title: string
  keywords: string[]
  description: string
  pubDate: string
  image_url: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void // Thêm onClick
}

const CardCategory: React.FC<CardCategoryProps> = ({ id, title, keywords, description, pubDate, image_url,
    
    
    onClick }) => {
        const limitedKeywords = keywords.slice(0, 4)
  return (
    <Link
      to={`/news/${id}`}
      className="news-card"
      onClick={onClick} // Gắn onClick vào Link
    >
       <div className="card-category">
      <div className="card-image">
        <img src={image_url || "/placeholder.svg?height=200&width=300"} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-meta">
          <span className="card-date">{new Date(pubDate).toLocaleDateString("vi-VN")}</span>
        </div>
        <div className="card-keywords">
          {limitedKeywords.map((keyword, index) => (
            <span key={index} className="keyword-tag">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CardCategory
