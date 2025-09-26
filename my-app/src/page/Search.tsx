"use client"

import type React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/home.css";
import NewsCard from "../components/card/cardnew";
import { useSearch } from "../hooks/useSearch";
import { selectsearchResults, setDetailNews } from "../redux/newsSlice";
import { type NewsItem } from "../servers/NewsService";
import { Loading } from "../components/loading";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();  // Lấy params từ URL
  const [query, setQuery] = useState("");  // State để sync với URL
  const { loading, error } = useSearch(query);  // Sử dụng query từ URL
  const searchResults = useSelector(selectsearchResults);

  useEffect(() => {
    const q = searchParams.get("q") || "";  // Lấy query từ URL
    setQuery(q);  // Sync state với URL
  }, [searchParams]);

  const handleNewsClick = (news: NewsItem, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(setDetailNews(news));
    navigate(`/news/${news.article_id}`);
  };

  if (error) {
    return (
      <div className="search-container">
        <div className="error-message">
          <h2>Lỗi tìm kiếm</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Thử lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Kết quả tìm kiếm cho "{query}" ({searchResults.length} bài)</h2>
      </div>

      {loading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}

      {!loading && query.trim() && searchResults.length === 0 && (
        <div className="no-results">
          <h2>Không tìm thấy kết quả</h2>
          <p>Thử từ khóa khác: {query}</p>
        </div>
      )}

      {!loading && searchResults.length > 0 && (
        <section className="search-results">
          <div className="news-grid">
            {searchResults.map((news) => (
              <NewsCard
                key={news.article_id}
                id={news.article_id}
                title={news.title}
                keywords={news.keywords || []}
                description={news.description}
                pubDate={news.pubDate}
                image_url={news.image_url || "/placeholder.svg"}
                onClick={(event) => handleNewsClick(news, event)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;