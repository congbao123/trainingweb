// src/page/CountryPage.tsx

import type React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCountryNews, setDetailNews } from "../redux/newsSlice";
import { NewsService, type NewsItem } from "../servers/NewsService";
import NewsCard from "../components/card/cardnew";
import "../styles/category.css"; // Sử dụng chung CSS
import { Loading } from "../components/loading";
import type { RootState } from "../redux/store";


const CountryPage: React.FC = () => {
  const { country } = useParams<{ country: string }>(); // Chỉ lấy country
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countryNews =  useSelector((state: RootState) => state.news.countryNews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryNews = async () => {
      setLoading(true);
      try {
        if (!country) throw new Error("Thiếu quốc gia");
        const response = await NewsService.getNewsByCountry(country, "&size=10");
        if (response.success && response.data?.results) {
          dispatch(setCountryNews(response.data.results));
          console.log('show du lieu quoc gia',response.data)
        } else {
          throw new Error(response.error || "Không tìm thấy dữ liệu");
        }
      } catch (err) {
        setError("Lỗi tải dữ liệu: " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryNews();
  }, [country, dispatch]);

  const handleNewsClick = (news: NewsItem) => {
    dispatch(setDetailNews(news));
    navigate(`/news/${news.article_id}`);
  };

  if (loading) return <div className="loading-container">
        <Loading />
      </div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="category-container">
      <h2>Quốc gia: {country}</h2>
      <div className="news-grid">
        {countryNews.map((news: NewsItem) => (
          <NewsCard
            key={news.article_id}
            id={news.article_id}
            title={news.title}
            keywords={news.keywords || []}
            description={news.description}
            pubDate={news.pubDate}
            image_url={news.image_url || ""}
            onClick={() => handleNewsClick(news)}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;