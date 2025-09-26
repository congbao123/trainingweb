"use client"

import type React from "react"
import { useState } from "react"
import { Search, X } from "lucide-react"
import { useNavigate } from "react-router-dom"  // Thêm để navigate
import "../styles/Header/search-box.css"

export function SearchBox() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()  // Hook navigate

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    if (isExpanded) {
      setSearchQuery("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Điều hướng đến trang search với query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <div className="search-container">
      {isExpanded ? (
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Tìm kiếm tin tức..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-expanded"
            autoFocus
          />
          <button type="button" onClick={handleToggle} className="search-close-button">
            <X className="search-icon" />
          </button>
        </form>
      ) : (
        <button onClick={handleToggle} className="search-toggle-button">
          <Search className="search-icon" />
        </button>
      )}
    </div>
  )
}