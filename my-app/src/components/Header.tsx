"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import { SearchBox } from "./SearchBox"
import "../styles/Header/Header.css"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <a href="/" className="logo-link">
            <div className="logo-icon">
              <span>B</span>
            </div>
            <span className="logo-text-desktop">Báo Quốc Tế</span>
            <span className="logo-text-mobile">Báo Quốc Tế</span>
          </a>

          <nav className="desktop-nav">
            <a href="/" className="nav-link">
              Trang chủ
            </a>

            <div className="country-dropdown">
              <button onClick={toggleCountryDropdown} className="country-button">
                <Globe className="w-4 h-4" />
                Quốc gia
              </button>
              {isCountryDropdownOpen && (
                <div className="country-dropdown-menu">
                  <a href="/country/vi" className="country-dropdown-item">
                    🇻🇳 Việt Nam
                  </a>
                  <a href="/country/us" className="country-dropdown-item">
                    🇺🇸 Hoa Kỳ
                  </a>
                  <a href="/country/cn" className="country-dropdown-item">
                    🇨🇳 Trung Quốc
                  </a>
                  <a href="/country/jp" className="country-dropdown-item">
                    🇯🇵 Nhật Bản
                  </a>
                  <a href="/country/kr" className="country-dropdown-item">
                    🇰🇷 Hàn Quốc
                  </a>
                  <a href="/country/de" className="country-dropdown-item">
                    🇩🇪 Đức
                  </a>
                  <a href="/country/fr" className="country-dropdown-item">
                    🇫🇷 Pháp
                  </a>
                  <a href="/country/gb" className="country-dropdown-item">
                    🇬🇧 Anh
                  </a>
                </div>
              )}
            </div>

            <a href="/category/crime" className="nav-link">
              Tin tức
            </a>
            <a href="/category/business" className="nav-link">
              Kinh tế
            </a>
            <a href="/category/sports" className="nav-link">
              Thể thao
            </a>
            <a href="/category/lifestyle" className="nav-link">
              Văn hóa
            </a>
            <a href="/category/technology" className="nav-link">
              Công nghệ
            </a>
          </nav>

          <div className="header-actions">
            <SearchBox />
            <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </div>
    </header>
  )
}
