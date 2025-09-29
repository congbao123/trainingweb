import type React from "react"
import { Link } from "react-router-dom";
import "../../styles/cardcss/Cardhuge.css"
import type { NewsItem } from "../../servers/NewsService";


interface CardhugeCardProps {
  featuredNews: NewsItem[]
  onItemClick: (news: NewsItem, event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Cardhuge: React.FC<CardhugeCardProps> = ({ featuredNews, onItemClick }) => {
  const mainArticle = featuredNews[0]
  const sideArticles = featuredNews.slice(1, 3)
  const bottomArticles = featuredNews.slice(3, 8)

  if (!mainArticle) return null

  return (
    <div className="Cardhuge-container">
      <div className="main-content">
        <article className="featured-article">
          <Link
            to={`/news/${mainArticle.article_id}`}
            onClick={(e) => onItemClick(mainArticle, e)}
            className="article-link"
          >
            <img
              src={mainArticle.image_url || "/placeholder.svg?height=300&width=500&query=vietnamese city aerial view"}
              alt={mainArticle.title}
              className="featured-image"
            />
            <div className="featured-content">
              <h1 className="featured-title">{mainArticle.title}</h1>
              <p className="featured-description">{mainArticle.description}</p>
            </div>
          </Link>
        </article>

        <aside className="side-articles">
          {sideArticles.map((article, index) => (
            <article key={article.article_id} className="side-article">
              <Link
                to={`/news/${article.article_id}`}
                onClick={(e) => onItemClick(article, e)}
                className="side-article-link"
              >
                <img
                  src={article.image_url || `/placeholder.svg?height=120&width=200&query=vietnam news ${index + 1}`}
                  alt={article.title}
                  className="side-image"
                />
                <h3 className="side-title">{article.title}</h3>
              </Link>
            </article>
          ))}
        </aside>
      </div>

      {bottomArticles.length > 0 && (
        <section className="bottom-news">
          <div className="news-grid">
            {bottomArticles.map((article, index) => (
              <article key={article.article_id} className="news-item">
                <Link
                  to={`/news/${article.article_id}`}
                  onClick={(e) => onItemClick(article, e)}
                  className="news-item-link"
                >
                  <img
                    src={
                      article.image_url || `/placeholder.svg?height=120&width=200&query=vietnam news item ${index + 1}`
                    }
                    alt={article.title}
                    className="news-item-image"
                  />
                  <h4 className="news-item-title">{article.title}</h4>
                  <div className="news-category">
                    {article.keywords?.[0] || "Tin tức"}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Cardhuge