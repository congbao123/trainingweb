// src/page/CategoryPage.tsx

import type React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCategoryNews, setDetailNews } from "../redux/newsSlice";
import { NewsService, type NewsItem } from "../servers/NewsService";
import NewsCard from "../components/card/cardnew";
import "../styles/category.css"; // CSS cho trang
import { Loading } from "../components/loading";
import type { RootState } from "../redux/store";

const CategoryPage: React.FC = () => {
  const { type } = useParams<{ type: string }>(); // Lấy type từ URL 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryNews = useSelector((state: RootState) => state.news.categoryNews);// Lấy danh sách từ Redux
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      try {
        const response = await NewsService.getNewsByCategory(type || '', '&country=vi&language=vi&size=10'); // Gọi API với params
        if (response.success && response.data?.results) {
          dispatch(setCategoryNews(response.data.results)); // Dispatch vào Redux
        } else {
          throw new Error('Không tìm thấy dữ liệu');
        }
      } catch (err) {
        setError('Lỗi tải dữ liệu: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [type, dispatch]);

  const handleNewsClick = (news: NewsItem) => {
    dispatch(setDetailNews(news)); // Cập nhật detail vào Redux
    navigate(`/news/${news.article_id}`); // Điều hướng đến trang chi tiết
  };

  if (loading) return <div className="loading-container">
        <Loading />
      </div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="category-container">
      <h2>Thể loại: {type}</h2>
      <div className="news-grid">
        {categoryNews.map((news: NewsItem) => (
          <NewsCard
            key={news.article_id}
            id={news.article_id}
            title={news.title}
            keywords={news.keywords || []}
            description={news.description}
            pubDate={news.pubDate}
            image_url={news.image_url || ""}
            onClick={() => handleNewsClick(news)} // Tái sử dụng card với onClick
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;