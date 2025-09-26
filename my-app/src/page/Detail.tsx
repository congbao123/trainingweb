import type React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectNewsById } from "../redux/newsSlice"
import type { RootState } from "../redux/store"
import "../styles/detail.css"

// interface NewsArticle {
//   article_id: string
//   title: string
//   keywords: string[]
//   description: string
//   pubDate: string
//   image_url: string
//   creator?: string[] | null
//   source_name?: string
//   language?: string
//   country?: string[]
//   category?: string[]
// }

interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
  replies?: Comment[]
}

const mockComments: Comment[] = [
  {
    id: "1",
    author: "Nguyễn Văn A",
    content: "Bài viết rất hay và có tính thời sự cao. AI thực sự đang thay đổi cách chúng ta làm việc.",
    createdAt: "2024-01-15T11:00:00Z",
    replies: [
      {
        id: "2",
        author: "Trần Thị B",
        content:
          "Đồng ý với bạn! Tôi đang làm việc trong lĩnh vực marketing và AI đã giúp tôi tiết kiệm rất nhiều thời gian.",
        createdAt: "2024-01-15T11:30:00Z",
      },
    ],
  },
  {
    id: "3",
    author: "Lê Minh C",
    content: "Tuy nhiên chúng ta cũng cần cân nhắc về những thách thức mà AI mang lại, đặc biệt là vấn đề thất nghiệp.",
    createdAt: "2024-01-15T12:00:00Z",
  },
]

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const article = useSelector((state: RootState) => selectNewsById(state, id || ""))
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setComments(mockComments)
    setLoading(false)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !authorName.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      createdAt: new Date().toISOString(),
      replies: [],
    }

    setComments([...comments, comment])
    setNewComment("")
    setAuthorName("")
  }

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim() || !authorName.trim()) return

    const reply: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: replyContent,
      createdAt: new Date().toISOString(),
    }

    setComments(
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply],
          }
        }
        return comment
      }),
    )

    setReplyContent("")
    setReplyingTo(null)
  }

  if (loading) {
    return (
      <div className="news-detail-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải bài viết...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="news-detail-container">
        <div className="error-message">
          <h2>Không tìm thấy bài viết</h2>
          <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng thử lại sau.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="news-detail-container">
      <article className="news-article">
        <header className="article-header">
          <h1 className="article-title">{article.title || "Tiêu đề không có"}</h1>
          <div className="article-meta">
            <time className="publish-date" dateTime={article.pubDate}>
              {formatDate(article.pubDate) || "Ngày không xác định"}
            </time>
          </div>
        </header>

        <div className="article-image-container">
          <img src={article.image_url || "/placeholder.svg"} alt={article.title || "Hình ảnh không có"} className="article-image" />
        </div>

        <div className="article-content">
          <div className="article-description">
            <p>{article.description || "Mô tả không có"}</p>
            <a href={article.link} title="link đọc chính thức"> link chính thức </a>
          </div>

          <div className="keywords-section">
            <h3 className="keywords-title">Từ khóa:</h3>
            <div className="keywords-list">
              {article.keywords?.map((keyword, index) => (
                <span key={index} className="keyword-tag">
                  {keyword}
                </span>
              )) || <span>Không có từ khóa</span>}
            </div>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-actions">
            <button className="action-button share-button">Chia sẻ</button>
            <button className="action-button bookmark-button">Lưu bài viết</button>
          </div>
        </footer>
      </article>

      <section className="comments-section">
        <h2 className="comments-title">Bình luận ({comments.length})</h2>

        <form className="comment-form" onSubmit={handleSubmitComment}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tên của bạn"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="author-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Viết bình luận của bạn..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-textarea"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="submit-comment-btn">
            Gửi bình luận
          </button>
        </form>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{formatDate(comment.createdAt)}</span>
              </div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-actions">
                <button
                  className="reply-btn"
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                >
                  Trả lời
                </button>
              </div>

              {replyingTo === comment.id && (
                <div className="reply-form">
                  <textarea
                    placeholder="Viết phản hồi..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="reply-textarea"
                    rows={3}
                  />
                  <div className="reply-actions">
                    <button onClick={() => handleSubmitReply(comment.id)} className="submit-reply-btn">
                      Gửi phản hồi
                    </button>
                    <button onClick={() => setReplyingTo(null)} className="cancel-reply-btn">
                      Hủy
                    </button>
                  </div>
                </div>
              )}

              {comment.replies && comment.replies.length > 0 && (
                <div className="replies-list">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="reply-item">
                      <div className="comment-header">
                        <span className="comment-author">{reply.author}</span>
                        <span className="comment-date">{formatDate(reply.createdAt)}</span>
                      </div>
                      <div className="comment-content">{reply.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}