import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchService from '../servers/seachService';  // Import từ SearchService
import { setSearchResults } from '../redux/newsSlice';
import type { NewsItem } from '../servers/NewsService';  // Giả định bạn thêm action này vào newsSlice (xem phần dưới)

export const useSearch = (query: string) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<NewsItem[]>([]);  // Local state để cache kết quả

  useEffect(() => {
    if (!query.trim()) {
      dispatch(setSearchResults([]));  // Clear kết quả nếu query rỗng
      setResults([]);
      return;
    }

    const fetchSearch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await SearchService.searchNews(query);

        if (!res.success) throw new Error(res.error || 'Search error');

        const searchResults = res.data?.results || [];
        console.log("Search results:", searchResults);
        dispatch(setSearchResults(searchResults));  // Dispatch vào Redux để dùng ở nơi khác nếu cần
        setResults(searchResults);
      } catch (err) {
        setError('Lỗi khi tìm kiếm: ' + (err as Error).message);
        console.error("Search error:", err);
        dispatch(setSearchResults([]));
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [query, dispatch]);

  return { loading, error, results };
};