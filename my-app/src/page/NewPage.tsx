import "../styles/newpage.css"
export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "AI thay đổi thế giới lập trình",
      desc: "Các công cụ AI đang giúp lập trình viên tăng tốc độ làm việc và giảm lỗi.",
      img: "https://picsum.photos/id/1011/400/250",
    },
    {
      id: 2,
      title: "Bóng đá Việt Nam và giấc mơ World Cup",
      desc: "Đội tuyển Việt Nam tiếp tục nuôi hy vọng tham dự vòng chung kết World Cup.",
      img: "https://picsum.photos/id/1015/400/250",
    },
    {
      id: 3,
      title: "Khám phá công nghệ 5G",
      desc: "Mạng 5G đang dần phủ sóng, mang đến trải nghiệm Internet tốc độ cao.",
      img: "https://picsum.photos/id/1025/400/250",
    },
    {
      id: 4,
      title: "AI thay đổi thế giới lập trình",
      desc: "Các công cụ AI đang giúp lập trình viên tăng tốc độ làm việc và giảm lỗi.",
      img: "https://picsum.photos/id/1011/400/250",
    },
    {
      id: 5,
      title: "AI thay đổi thế giới lập trình",
      desc: "Các công cụ AI đang giúp lập trình viên tăng tốc độ làm việc và giảm lỗi.",
      img: "https://picsum.photos/id/1011/400/250",
    },
  ];

  return (
    <div className="news-page">
      <main className="news-content">
        <section className="highlight">
          <img
            src="https://picsum.photos/id/1005/800/400"
            alt="highlight"
            className="highlight-img"
          />
          <div className="highlight-info">
            <h2>Tiêu điểm: Thế giới sau năm 2025</h2>
            <p>
              Những thay đổi lớn về kinh tế, xã hội và công nghệ đang định hình
              lại cuộc sống của chúng ta.
            </p>
          </div>
        </section>

        <section className="news-list">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <img src={item.img} alt={item.title} className="news-img" />
              <div className="news-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                 <span  className="hot-news-keyword">
                key
              </span>
              </div>
            </article>
          ))}
        </section>
        <aside className="ad-banner">
          <img
            src="https://intphcm.com/data/upload/banner-la-gi.jpg"
            alt="Quảng cáo"
            className="ad-img"
          />
          <a href="#" className="ad-link">Tìm hiểu thêm</a>
        </aside>
        <section className="video-highlight">
          <h2>Video cực nóng của tin </h2>
          <video controls width="100%">
            <source src="https://www.pexels.com/vi-vn/download/video/855431/" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </section>
          <section className="most-read">
  <h2>Đọc nhiều nhất</h2>
  <ol>
    <li><a href="#">Kinh tế toàn cầu thay đổi mạnh mẽ</a></li>
    <li><a href="#">Công nghệ AI bùng nổ năm 2025</a></li>
    <li><a href="#">Thể thao: Chung kết giải đấu lớn</a></li>
    <li><a href="#">Khám phá không gian: Sứ mệnh lên sao Hỏa</a></li>
    <li><a href="#">Giải trí: Phim bom tấn mới ra mắt</a></li>
  </ol>
</section>
         <div className="news-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Featured Article */}
        <article className="featured-article">
          <img src="/aerial-view-of-vietnamese-city-with-green-fields-a.jpg" alt="Aerial view of Vietnamese city" className="featured-image" />
          <div className="featured-content">
            <h1 className="featured-title">Real estate market enters cautious phase with hope on the horizon</h1>
            <p className="featured-excerpt">
              Experts warn of a flat year-end for Vietnam's property sector but remain optimistic about steady growth
              through 2027.
            </p>
          </div>
        </article>

        {/* Side Articles */}
        <aside className="side-articles">
          <article className="side-article">
            <img src="/vietnam-cultural-event-with-people-in-traditional-.jpg" alt="Vietnam Night event" className="side-image" />
            <h2 className="side-title">Vietnam Night dazzles Busan with stars, cinema, and cultural flair</h2>
          </article>

          <article className="side-article">
            <img src="/tourists-enjoying-food-and-drinks-at-outdoor-festi.jpg" alt="Tourists enjoying food" className="side-image" />
            <h2 className="side-title">Tourists in Quang Ninh to enjoy free beer and squid cakes</h2>
          </article>
        </aside>
      </main>

      {/* Bottom News Grid */}
      <section className="news-grid">
        <article className="news-item">
          <img src="/vietnamese-official-with-certificate-and-flag.jpg" alt="Official ceremony" className="news-image" />
          <h3 className="news-title">Tuyên dương nam sinh cứu bạn thoát khỏi vụ thảm án ở Đắk Lắk</h3>
          <span className="news-category">Chuyện từ tế</span>
        </article>

        <article className="news-item">
          <img src="/mountain-forest-landscape-in-vietnam.jpg" alt="Mountain landscape" className="news-image" />
          <h3 className="news-title">Đổi thay tích cực ở thôn nghèo "ba không" vùng cao Lào Cai</h3>
          <span className="news-category">Giảm nghèo bền vững</span>
        </article>

        <article className="news-item">
          <img src="/football-players-manchester-united-rashford-antony.jpg" alt="Football players" className="news-image" />
          <h3 className="news-title">Rashford và Antony lần lượt tỏa sáng: Nghịch lý MU</h3>
          <span className="news-category">Tin tức 24h</span>
        </article>

        <article className="news-item">
          <img src="/toyota-car-dealership-in-vietnam.jpg" alt="Toyota dealership" className="news-image" />
          <h3 className="news-title">
            30 năm Toyota tại Việt Nam: Hãng chúc DN học ở hãng xe Nhật, tăng mạnh năng suất
          </h3>
          <span className="news-category">Công nghiệp hỗ trợ</span>
        </article>

        <article className="news-item">
          <img src="/vietnamese-woman-working-at-market-or-shop.jpg" alt="Woman at work" className="news-image" />
          <h3 className="news-title">Lại Châu quyết tâm đẩy lùi buôn lậu, gian lận thương mại và hàng giả</h3>
          <span className="news-category">Bảo vệ người tiêu dùng</span>
        </article>
      </section>
    </div>
      </main>
    </div>
  );
}
