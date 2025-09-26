"use client"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import "../styles/Header/mobile-menu.css"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen)
  }

  return (
    <>
      <button className="mobile-menu-button" onClick={onToggle}>
        {isOpen ? <X className="mobile-menu-icon" /> : <Menu className="mobile-menu-icon" />}
      </button>

      {isOpen && (
        <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
          <nav className="mobile-menu-nav">
            <a href="/" className="mobile-menu-link">
              Trang chủ
            </a>

            <div className="mobile-country-dropdown">
              <button onClick={toggleCountryDropdown} className="mobile-country-button">
                <Globe className="mobile-country-icon" />
                Quốc gia
              </button>
              {isCountryDropdownOpen && (
                <div className="mobile-country-submenu">
                  <a href="/country/vi" className="mobile-country-item">
                    🇻🇳 Việt Nam
                  </a>
                  <a href="/country/us" className="mobile-country-item">
                    🇺🇸 Hoa Kỳ
                  </a>
                  <a href="/country/cn" className="mobile-country-item">
                    🇨🇳 Trung Quốc
                  </a>
                  <a href="/country/jp" className="mobile-country-item">
                    🇯🇵 Nhật Bản
                  </a>
                  <a href="/country/kr" className="mobile-country-item">
                    🇰🇷 Hàn Quốc
                  </a>
                  <a href="/country/de" className="mobile-country-item">
                    🇩🇪 Đức
                  </a>
                  <a href="/country/jp" className="mobile-country-item">
                    🇫🇷 Pháp
                  </a>
                  <a href="/country/gb" className="mobile-country-item">
                    🇬🇧 Anh
                  </a>
                </div>
              )}
            </div>

            <a href="/category/crime"className="mobile-menu-link">
              Tin tức
            </a>
            <a href="/category/business" className="mobile-menu-link">
              Kinh tế
            </a>
            <a href="/category/sports" className="mobile-menu-link">
              Thể thao
            </a>
            <a href="/category/lifestyle" className="mobile-menu-link">
              Văn hóa
            </a>
            <a href="/category/technology"className="mobile-menu-link">
              Công nghệ
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
