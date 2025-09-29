import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import NewsCard from "../components/card/cardnew";
import HotNewsCard from "../components/card/HotNewsCard";
import FeaturedNewsList from "../components/card/FeaturedNewsList";
import { useNewsData } from "../hooks/useNewsData";
import {
  selectHotNews,
  selectLatestNews,
  selectFeaturedNews,
  setDetailNews,
} from "../redux/newsSlice";
import { type NewsItem } from "../servers/NewsService";
import { Loading } from "../components/loading";
import Cardhuge from "../components/card/Cardhuge";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useNewsData();
  const hotNews = useSelector(selectHotNews);
  const latestNews = useSelector(selectLatestNews);
  const featuredNews: NewsItem[] = useSelector(selectFeaturedNews);

  const handleNewsClick = (news: NewsItem, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(setDetailNews(news));
    navigate(`/news/${news.article_id}`);
  };

  if (loading) return <div className="loading-container"><Loading /></div>;
  if (error) return <div>{error}</div>;

  console.log("Hot News:", hotNews);
  console.log("Latest News:", latestNews);
  console.log("Featured News:", featuredNews);

  return (
    <div className="home-container">
      <section className="hot-news">
        <h2>Tin Nóng</h2>
        {hotNews && (
          <HotNewsCard
            id={hotNews.article_id}
            title={hotNews.title}
            keywords={hotNews.keywords || []}
            description={hotNews.description}
            pubDate={hotNews.pubDate}
            image_url={hotNews.image_url || ""}
            onClick={(event) => handleNewsClick(hotNews, event)}
          />
        )}
      </section>
      <section className="vietnam-news">
        <Cardhuge featuredNews={featuredNews} onItemClick={handleNewsClick} />
      </section>
      <section className="latest-news">
        <h2>Tin Tức Mới Nhất</h2>
        <div className="news-grid">
          {latestNews.map((news) => (
            <NewsCard
              key={news.article_id}
              id={news.article_id}
              title={news.title}
              keywords={news.keywords || []}
              description={news.description}
              pubDate={news.pubDate}
              image_url={news.image_url || ""}
              onClick={(event) => handleNewsClick(news, event)}
            />
          ))}
        </div>
      </section>
      <aside className="ad-banner">
        <img
          src="https://intphcm.com/data/upload/banner-la-gi.jpg"
          alt="Quảng cáo"
          className="ad-img"
        />
        <a href="#" className="ad-link">Tìm hiểu thêm</a>
      </aside>
      <section className="featured-news">
        <h2>Tin Nổi Bật</h2>
        <FeaturedNewsList items={featuredNews} onItemClick={handleNewsClick} />
      </section>
    </div>
  );
};

export default Home;