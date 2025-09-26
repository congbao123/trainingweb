import { Link } from "react-router-dom"
import { Facebook, Twitter, Youtube, Mail } from "lucide-react"
import "../styles/Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="footer-brand">
              <div className="footer-brand-icon">
                <span>B</span>
              </div>
              <span className="footer-brand-text">Báo Quốc Tế</span>
            </Link>
            <p className="footer-description">
              Trang báo điện tử hàng đầu Việt Nam, cung cấp tin tức nóng hổi, chính xác và đáng tin cậy 24/7.
            </p>
            <div className="footer-social">
              <Link to="#" className="footer-social-link">
                <Facebook style={{ width: "1.25rem", height: "1.25rem" }} />
              </Link>
              <Link to="#" className="footer-social-link">
                <Twitter style={{ width: "1.25rem", height: "1.25rem" }} />
              </Link>
              <Link to="#" className="footer-social-link">
                <Youtube style={{ width: "1.25rem", height: "1.25rem" }} />
              </Link>
              <Link to="#" className="footer-social-link">
                <Mail style={{ width: "1.25rem", height: "1.25rem" }} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-title">Liên kết nhanh</h3>
            <ul className="footer-list">
              {[
                { to: "/tin-tuc", text: "Tin tức" },
                { to: "/kinh-te", text: "Kinh tế" },
                { to: "/the-thao", text: "Thể thao" },
                { to: "/van-hoa", text: "Văn hóa" },
                { to: "/cong-nghe", text: "Công nghệ" },
              ].map((item, index) => (
                <li key={index} className="footer-list-item">
                  <Link to={item.to} className="footer-link">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-section-title">Dịch vụ</h3>
            <ul className="footer-list">
              {[
                { to: "/quang-cao", text: "Quảng cáo" },
                { to: "/rss", text: "RSS Feed" },
                { to: "/mobile-app", text: "Ứng dụng di động" },
                { to: "/newsletter", text: "Bản tin email" },
              ].map((item, index) => (
                <li key={index} className="footer-list-item">
                  <Link to={item.to} className="footer-link">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-section-title">Liên hệ</h3>
            <ul className="footer-contact">
              <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>Điện thoại: (028) 1234 5678</li>
              <li>Email: info@baovietnam.vn</li>
              <li>Hotline: 1900 1234</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Báo Việt Nam. Tất cả quyền được bảo lưu.</p>
          <div className="footer-bottom-links">
            {[
              { to: "/chinh-sach-bao-mat", text: "Chính sách bảo mật" },
              { to: "/dieu-khoan-su-dung", text: "Điều khoản sử dụng" },
              { to: "/lien-he", text: "Liên hệ" },
            ].map((item, index) => (
              <Link key={index} to={item.to} className="footer-link">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
